// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Standard monthly work-hours: 40 h/week × 52 weeks ÷ 12 months = 173.33
 */
export const MONTHLY_HOURS = 173.33;

/**
 * Pension calculation ceiling (monthly).
 * Contributions above this base are still deducted but the employer match
 * above the ceiling loses its tax-exempt status.
 * 2024 figure ≈ 4× average wage.
 */
export const PENSION_CEILING = 24_000;

/**
 * Study-fund (קרן השתלמות) ceiling: the monthly salary up to which the
 * employer's 7.5% contribution is tax-exempt (2024: 15,712 ILS/month).
 */
export const STUDY_FUND_CEILING = 15_712;

/** Recovery-pay rate per day (updated June 2023). */
export const RECOVERY_DAY_RATE = 350;

/** Value per tax-credit point (2024). */
const CREDIT_POINT_VALUE = 242;

// ─────────────────────────────────────────────────────────────────────────────
// Tax helpers  (⚠ DO NOT MODIFY — per task constraints)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Monthly income-tax per 2024 brackets.
 * Constraint: brackets and logic must NOT be changed.
 */
export function calcIncomeTax(monthly) {
  const brackets = [
    { up: 7_010,    rate: 0.10 },
    { up: 10_060,   rate: 0.14 },
    { up: 16_150,   rate: 0.20 },
    { up: 22_440,   rate: 0.31 },
    { up: 46_690,   rate: 0.35 },
    { up: 60_130,   rate: 0.47 },
    { up: Infinity, rate: 0.50 },
  ];
  let tax = 0;
  let prev = 0;
  for (const b of brackets) {
    if (monthly <= prev) break;
    tax += (Math.min(monthly, b.up) - prev) * b.rate;
    prev = b.up;
  }
  return tax;
}

/**
 * Combined Bituach Leumi + health insurance (employee portion).
 * Constraint: brackets and logic must NOT be changed.
 */
export function calcSocialSecurity(gross) {
  if (gross <= 7_522) return gross * 0.0395;
  return 7_522 * 0.0395 + (gross - 7_522) * 0.12;
}

// ─────────────────────────────────────────────────────────────────────────────
// Child tax-credit points  (⚠ DO NOT MODIFY — per task constraints)
// ─────────────────────────────────────────────────────────────────────────────

export function childCreditPoints(age, isMother) {
  if (age === 0)  return 2.5;
  if (age <= 2)   return 4.5;
  if (age === 3)  return 3.5;
  if (age <= 5)   return 2.5;
  if (age <= 17)  return isMother ? 2 : 1;
  if (age === 18) return isMother ? 0.5 : 0;
  return 0;
}

export function calcMiluimPoints(days) {
  if (days < 30) return 0;
  if (days < 40) return 0.5;
  if (days < 50) return 0.75;
  const extra = Math.floor((days - 50) / 5) * 0.25;
  return Math.min(1.0 + extra, 4.0);
}

// ─────────────────────────────────────────────────────────────────────────────
// Recovery days by seniority
// ─────────────────────────────────────────────────────────────────────────────

export function recoveryDaysByYears(years) {
  if (years < 2)  return 5;
  if (years < 4)  return 6;
  if (years < 11) return 7;
  if (years < 16) return 8;
  if (years < 20) return 9;
  return 12;
}

// ─────────────────────────────────────────────────────────────────────────────
// Main calculation
// ─────────────────────────────────────────────────────────────────────────────

/**
 * @param {number}  baseSalary  Grade base salary (ILS/month)
 * @param {object}  contract    Contract object (pension/SF rates etc.)
 * @param {object}  params      All user inputs
 * @param {object}  carPackages CAR_PACKAGES map (passed in to keep util sync)
 * @param {object}  carImputation COMPANY_CAR_IMPUTATION map
 * @returns {object} Full breakdown
 */
export function calcAll(baseSalary, contract, params, carPackages, carImputation) {
  const {
    // Overtime
    overtimeHours = 0,
    eveningShiftHours = 0,          // NEW: 120% evening/night shifts
    // Oncall & premium
    oncallCount = 0,
    premiumHours = 0,
    premiumPct = 0,
    gradeHourlyRate,
    // Car
    carType = 'none',
    companyCar = false,
    companyCarGroup = 3,
    // Travel
    travelAllowance = 323,
    insuranceCost = 0,
    vehicleRegFee = 0,
    // Family
    childrenAges = [],
    childrenUnder5 = 0,
    children6to18 = 0,
    gender = 'male',
    hasDegree = false,
    miluimDays = 0,
    inclMaonot = true,
    // Seniority
    recoveryYears = 0,
    // Entitlements
    hasOvertimeEntitlement = true,
    // Benefit toggles
    includeInsuranceRefund = true,
    includeStudyFund = true,
    includePension = true,
    includeRecovery = true,
    includeClothing = true,
    includeGifts = true,
  } = params;

  // ── Hourly rate ───────────────────────────────────────────────────────────
  const hr = gradeHourlyRate ?? baseSalary / MONTHLY_HOURS;

  // ── Overtime (⚠ split logic must remain unchanged) ───────────────────────
  const ot125h = overtimeHours * (2 / 3);
  const ot150h = overtimeHours * (1 / 3);
  const overtimePay = hr * 1.25 * ot125h + hr * 1.50 * ot150h;

  // NEW: 120% evening/night shift supplement (separate from overtime)
  const eveningShiftPay = hr * 1.20 * eveningShiftHours;

  // ── On-call: 1 כוננות = 5.33 h × hourly rate ─────────────────────────────
  const oncallPay = oncallCount * 5.33 * hr;

  // ── Premium ───────────────────────────────────────────────────────────────
  const premiumPay = premiumHours * (premiumPct / 100) * hr;

  // ── Car / travel ──────────────────────────────────────────────────────────
  const cp = (carPackages ?? {})[carType] ?? { value: 0, isCar: false };
  const companyCarImputation = companyCar
    ? ((carImputation ?? {})[companyCarGroup] ?? 0)
    : 0;
  const effectiveCarValue  = companyCar ? 0 : cp.value;
  const effectiveTravelPay = companyCar ? 0 : travelAllowance;
  const carGross = effectiveCarValue + effectiveTravelPay;

  // ── Day-care supplement (מעונות) ─────────────────────────────────────────
  const under5count = childrenAges.length > 0
    ? childrenAges.filter(e => e.age <= 4).reduce((s, e) => s + (e.count ?? 1), 0)
    : (childrenUnder5 ?? 0);
  const maonotPay = inclMaonot && under5count > 0
    ? Math.min(under5count, 2) * 330
    : 0;

  // ── Gross ─────────────────────────────────────────────────────────────────
  const totalGross =
    baseSalary +
    overtimePay +
    eveningShiftPay +
    carGross +
    maonotPay +
    companyCarImputation +
    oncallPay +
    premiumPay;

  // ── Tax credit points (⚠ logic must remain unchanged) ────────────────────
  const isMother = gender === 'female';
  let points = isMother ? 2.75 : 2.25;
  if (hasDegree) points += 1;

  if (childrenAges.length > 0) {
    childrenAges.forEach(({ age, count = 1 }) => {
      points += childCreditPoints(age, isMother) * count;
    });
  } else {
    points += childrenUnder5 * 2.5;
    points += children6to18 * (isMother ? 2 : 1);
  }
  const miluimPoints = calcMiluimPoints(miluimDays);
  points += miluimPoints;
  const taxCreditValue = points * CREDIT_POINT_VALUE;

  // ── Income tax ────────────────────────────────────────────────────────────
  const incomeTax = Math.max(0, calcIncomeTax(totalGross) - taxCreditValue);

  // ── Bituach Leumi ─────────────────────────────────────────────────────────
  const socialSecurity = calcSocialSecurity(totalGross);

  // ── Pensionable salary (⚠ overtime-inclusion rule unchanged) ─────────────
  // Oncall, premium, and expense reimbursements are excluded.
  const pensionableRaw     = baseSalary + overtimePay + eveningShiftPay;
  const pensionableSalary  = Math.min(pensionableRaw, PENSION_CEILING);   // NEW ceiling

  // ── Study-fund base (tax-exempt ceiling) ─────────────────────────────────
  const studyFundBase = Math.min(pensionableRaw, STUDY_FUND_CEILING);     // NEW ceiling

  // ── Employee deductions ───────────────────────────────────────────────────
  const pensionDed   = pensionableSalary * contract.pensionEmployee;
  const studyFundDed = studyFundBase     * contract.studyFundEmployee;
  const unionDues    = 50;

  const totalDeductions = incomeTax + socialSecurity + pensionDed + studyFundDed + unionDues;
  const netSalary = totalGross - totalDeductions;

  // ── Employer contributions ────────────────────────────────────────────────
  const pensionEmployer   = pensionableSalary * contract.pensionEmployer;
  const studyFundEmployer = studyFundBase     * contract.studyFundEmployer;
  const severancePay      = pensionableSalary * 0.0833;

  // ── Extra benefits ────────────────────────────────────────────────────────
  const recDays     = recoveryDaysByYears(recoveryYears ?? 0);
  const recoveryPay = (recDays * RECOVERY_DAY_RATE) / 12;
  const clothing    = 206;
  const gifts       = 100;

  const insuranceRefundMonthly = cp.isCar && !companyCar
    ? Math.min(insuranceCost, 7_000) / 12
    : 0;
  const regFeeRefundMonthly = cp.isCar && !companyCar
    ? Math.min(vehicleRegFee ?? 0, 2_326) / 12
    : 0;

  // ── Total economic value ──────────────────────────────────────────────────
  let totalEconomicValue = netSalary;
  if (includeInsuranceRefund) totalEconomicValue += insuranceRefundMonthly + regFeeRefundMonthly;
  if (includeStudyFund)       totalEconomicValue += studyFundEmployer;
  if (includePension)         totalEconomicValue += pensionEmployer;
  if (includeRecovery)        totalEconomicValue += recoveryPay;
  if (includeClothing)        totalEconomicValue += clothing;
  if (includeGifts)           totalEconomicValue += gifts;

  return {
    baseSalary,
    hourlyRate: hr,
    // Overtime
    overtimePay, ot125h, ot150h,
    // Evening shifts
    eveningShiftHours, eveningShiftPay,
    // Oncall / premium
    oncallPay, premiumPay,
    // Car
    carGross, companyCarImputation, effectiveCarValue, effectiveTravelPay,
    carLabel: cp.label ?? '',
    // Daycare
    maonotPay,
    // Gross
    totalGross,
    // Tax credits
    points, miluimPoints, taxCreditValue,
    // Deductions
    incomeTax, socialSecurity,
    pensionableRaw, pensionableSalary,
    studyFundBase,
    pensionDed, studyFundDed, unionDues,
    totalDeductions,
    // Net
    netSalary,
    // Employer
    pensionEmployer, studyFundEmployer, severancePay,
    // Extras
    recoveryPay, recoveryDays: recDays,
    clothing, gifts,
    insuranceRefundMonthly, regFeeRefundMonthly,
    // Total
    totalEconomicValue,
    // Metadata
    isGlobalContract: !hasOvertimeEntitlement,
    ceilingApplied: pensionableRaw > PENSION_CEILING,
    studyCeilingApplied: pensionableRaw > STUDY_FUND_CEILING,
  };
}

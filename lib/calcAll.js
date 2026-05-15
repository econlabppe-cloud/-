// © 2025 Yehuda Saadia — All Rights Reserved. Unauthorized copying or distribution prohibited.
// SERVER ONLY — never import this file from any "use client" component

import { CAR_PACKAGES } from './contracts.js';

export const MONTHLY_HOURS = 173.33;
export const RECOVERY_DAY_RATE = 374; // שיעור יומי הבראה 2025

export function calcMiluimPoints(days) {
  if (days < 30) return 0;
  if (days < 40) return 0.5;
  if (days < 50) return 0.75;
  const addPts = Math.floor((days - 50) / 5) * 0.25;
  return Math.min(1.0 + addPts, 4.0);
}

// מחשב מס הכנסה חודשי לפי מדרגות 2026 (מוצע) — מדרגת 20% הורחבה עד 19,000 ₪
export function calcIncomeTax(monthly) {
  const brackets = [
    { up: 7010,      rate: 0.10 },
    { up: 10060,     rate: 0.14 },
    { up: 19000,     rate: 0.20 }, // הורחב מ-16,680 → 19,000 (הצעת תקציב 2026)
    { up: 25100,     rate: 0.31 },
    { up: 46690,     rate: 0.35 },
    { up: 60317,     rate: 0.47 },
    { up: Infinity,  rate: 0.50 },
  ];
  let tax = 0, prev = 0;
  for (const b of brackets) {
    if (monthly <= prev) break;
    tax += (Math.min(monthly, b.up) - prev) * b.rate;
    prev = b.up;
  }
  return tax;
}

// ביטוח לאומי + בריאות 2025
export function calcSocialSecurity(gross) {
  const minWage = 7878;
  if (gross <= minWage) return gross * 0.0395;
  return (minWage * 0.0395) + ((gross - minWage) * 0.12);
}

export function calcRecoveryDays(years) {
  if (years < 1)  return 5;
  if (years < 2)  return 5;
  if (years < 4)  return 6;
  if (years < 11) return 7;
  if (years < 16) return 8;
  if (years < 20) return 9;
  return 12;
}

// הנחות שווי שימוש ברכב לפי סוג דלק (תמריץ ירוק)
const CAR_ECO_DISCOUNT = { hybrid: 580, electric: 1380, none: 0 };


export function calcAll(baseSalary, contract, params) {
  const {
    overtimeHours, carType, childrenAges,
    gender, hasDegree, partnerWorks, miluimDays, insuranceCost,
    vehicleRegFee, travelAllowance,
    companyCar, companyCarGroup,
    oncallCount, premiumHours, premiumPct,
    recoveryYears,
    includeInsuranceRefund, includeStudyFund, includePension,
    includeRecovery, includeClothing, includeGifts,
    inclMaonot,
    hasOvertimeEntitlement,
    inclCibus, inclPhone,
    localityGroupData,
    mealAllowance,
    carEcoType,
    ashalDays,
  } = params;

  const cp = CAR_PACKAGES[carType] || CAR_PACKAGES['none'];
  const hourlyRate = baseSalary / MONTHLY_HOURS;
  const ot125h = (overtimeHours || 0) * (2 / 3);
  const ot150h = (overtimeHours || 0) * (1 / 3);
  const overtimePay = (hourlyRate * 1.25 * ot125h) + (hourlyRate * 1.50 * ot150h);
  const travelPay = travelAllowance || 323;

  const COMPANY_CAR_IMPUTATION = { 3: 4390, 4: 5260, 5: 7280 };
  const carEcoDiscount = CAR_ECO_DISCOUNT[carEcoType] || 0;
  const companyCarImputation = companyCar ? (COMPANY_CAR_IMPUTATION[companyCarGroup] || 0) : 0;
  // שווי שימוש נטו לאחר הנחת תמריץ ירוק — ממוסה אך לא חלק מהברוטו
  const companyCarImputationNet = Math.max(0, companyCarImputation - carEcoDiscount);

  // בכירים (noTravel) אינם זכאים לקצובת נסיעה — הם מקבלים רכב
  const effectiveTravelPay = (companyCar || contract.noTravel) ? 0 : travelPay;

  const gradeHourlyRate = params.gradeHourlyRate || (baseSalary / MONTHLY_HOURS);
  const oncallPay = (oncallCount || 0) * 5.33 * gradeHourlyRate;
  const premiumPay = (premiumHours || 0) * ((premiumPct || 0) / 100) * gradeHourlyRate;

  // מעונות: 330₪ לכל ילד עד גיל 4 (עד 2 ילדים)
  const childrenUnder5Count = childrenAges && childrenAges.length > 0
    ? childrenAges.filter(e => e.age <= 4).reduce((s, e) => s + (e.count || 1), 0)
    : 0;
  const maonotPay = (inclMaonot !== false && childrenUnder5Count > 0)
    ? (Math.min(childrenUnder5Count, 2) * 330)
    : 0;

  // החזר הוצאות רכב שירות: פטור ממס — מוסף ישירות לנטו כסעיף נפרד בתלוש
  const carNetValue = (cp.isCar && !companyCar) ? cp.value : 0;
  const carGross = effectiveTravelPay; // רק קצובת נסיעה בברוטו

  // totalGross = ברוטו שכר בלבד (ללא שווי שימוש ברכב — מופיע בנפרד)
  const totalGross = baseSalary + overtimePay + carGross + maonotPay + oncallPay + premiumPay;

  // taxableGross = הבסיס לחישוב מס הכנסה וביטוח לאומי (כולל שווי שימוש נטו)
  const taxableGross = totalGross + companyCarImputationNet;

  // נקודות זיכוי לפי גיל ילד ומגדר
  const CHILD_POINTS = (age, isMother) => {
    if (age === 0) return 2.5;
    if (age <= 2) return 4.5;
    if (age === 3) return 3.5;
    if (age <= 5) return 2.5;
    if (age <= 17) return isMother ? 2 : 1;
    if (age === 18) return isMother ? 0.5 : 0;
    return 0;
  };
  const isMother = gender === 'female';
  let points = isMother ? 2.75 : 2.25;
  if (hasDegree) points += 1;
  if (childrenAges && childrenAges.length > 0) {
    childrenAges.forEach(({ age, count }) => {
      points += CHILD_POINTS(age, isMother) * (count || 1);
    });
  }
  const miluimPoints = calcMiluimPoints(miluimDays || 0);
  points += miluimPoints;

  const taxCreditValue = points * 250; // נקודת זיכוי 2025 — 250 ₪/חודש
  const localityBenefit = localityGroupData
    ? Math.min(Math.min(taxableGross, localityGroupData.monthlyCeiling) * localityGroupData.rate, localityGroupData.maxMonthlyBenefit)
    : 0;
  // מס מחושב על taxableGross (כולל שווי שימוש), לא על totalGross
  let incomeTax = Math.max(0, calcIncomeTax(taxableGross) - taxCreditValue - localityBenefit);
  const socialSecurity = calcSocialSecurity(taxableGross);

  // השכר הקובע לפנסיה = שכר בסיס + שעות נוספות מדווחות
  const pensionableSalary = baseSalary + overtimePay;

  const pensionDed = pensionableSalary * contract.pensionEmployee;
  const studyFundDed = pensionableSalary * contract.studyFundEmployee;
  const unionDues = 50;
  const totalDeductions = incomeTax + socialSecurity + pensionDed + studyFundDed + unionDues;
  // netSalary = נטו כולל — ברוטו שכר בניכוי ניכויים + החזר רכב פטור ממס
  const netSalary = totalGross - totalDeductions + carNetValue;

  const studyFundEmployer = pensionableSalary * contract.studyFundEmployer;
  const pensionEmployer = pensionableSalary * contract.pensionEmployer;

  const recoveryDays = calcRecoveryDays(recoveryYears || 0);
  const recoveryPay = (recoveryDays * RECOVERY_DAY_RATE) / 12;

  const clothing = 206;
  const gifts = 100;
  const cibus = 30 * 20; // 30 ₪ × 20 ימי עבודה
  const phone = 130;
  const insuranceRefundMonthly = (cp.isCar && !companyCar) ? Math.min(insuranceCost || 0, 7000) / 12 : 0;
  const regFeeRefundMonthly = (cp.isCar && !companyCar) ? Math.min(vehicleRegFee || 0, 2326) / 12 : 0;
  // אש"ל: 21.1 ₪ ליום עבודה מעל 10 שעות — פטור ממס
  const ashalPay = (ashalDays || 0) * 21.1;

  let totalEconomicValue = netSalary; // כולל carNetValue פטור ממס
  if (companyCarImputationNet > 0) totalEconomicValue += companyCarImputationNet;
  if (ashalPay > 0) totalEconomicValue += ashalPay;
  if (includeInsuranceRefund) totalEconomicValue += insuranceRefundMonthly + regFeeRefundMonthly;
  if (includeStudyFund) totalEconomicValue += studyFundEmployer;
  if (includePension) totalEconomicValue += pensionEmployer;
  if (includeRecovery) totalEconomicValue += recoveryPay;
  if (includeClothing) totalEconomicValue += clothing;
  if (includeGifts) totalEconomicValue += gifts;
  if (inclCibus) totalEconomicValue += cibus;
  if (inclPhone) totalEconomicValue += phone;
  if (mealAllowance) totalEconomicValue += mealAllowance;

  return {
    baseSalary, pensionableSalary, overtimePay, ot125h, ot150h, carGross, maonotPay,
    totalGross, taxableGross, points, miluimPoints, taxCreditValue, localityBenefit,
    incomeTax, socialSecurity, pensionDed, studyFundDed, unionDues,
    totalDeductions, netSalary, insuranceRefundMonthly, regFeeRefundMonthly,
    studyFundEmployer, pensionEmployer, totalEconomicValue,
    cibus, phone, clothing, gifts, mealAllowance: mealAllowance || 0,
    hourlyRate: gradeHourlyRate, recoveryPay, recoveryDays, travelAllowance,
    companyCarImputation, companyCarImputationNet, carEcoDiscount, oncallPay, premiumPay,
    effectiveTravelPay, carNetValue, ashalPay,
  };
}

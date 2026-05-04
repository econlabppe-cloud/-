// © 2025 Yehuda Saadia — All Rights Reserved. Unauthorized copying or distribution prohibited.
// SERVER ONLY

import { NextResponse } from 'next/server';
import { CONTRACTS, CAR_PACKAGES, LOCALITY_GROUPS, LOCALITY_MAP } from '../../../lib/contracts.js';
import { calcAll } from '../../../lib/calcAll.js';

export const dynamic = 'force-dynamic';

/**
 * POST /api/calculate
 * Accepts calculation parameters, runs calcAll on the server, returns results.
 * Salary tables and calculation logic never reach the client.
 */
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const {
    contractId,
    gradeId,
    overtimeHours = 0,
    gender = 'male',
    carType = 'none',
    childrenAges = [],
    hasDegree = false,
    partnerWorks = true,
    miluimDays = 0,
    insuranceCost = 0,
    vehicleRegFee = 0,
    travelAllowance = 323,
    companyCar = false,
    companyCarGroup = 3,
    oncallCount = 0,
    premiumHours = 0,
    premiumPct = 25,
    recoveryYears = 0,
    includeInsuranceRefund = true,
    includeStudyFund = true,
    includePension = true,
    includeRecovery = true,
    includeClothing = true,
    includeGifts = true,
    inclMaonot = true,
    inclCibus = true,
    inclPhone = true,
    localityName = '',
  } = body;

  // Validate contractId
  const contract = CONTRACTS[contractId];
  if (!contract) {
    return NextResponse.json(
      { error: `Invalid contractId: ${contractId}` },
      { status: 400 }
    );
  }

  // Validate carType
  if (!CAR_PACKAGES[carType]) {
    return NextResponse.json({ error: `Invalid carType: ${carType}` }, { status: 400 });
  }

  // Find grade
  const grade = gradeId
    ? contract.grades.find(g => g.id === gradeId) || contract.grades[0]
    : contract.grades[0];

  if (!grade) {
    return NextResponse.json({ error: 'No grades available for this contract' }, { status: 400 });
  }

  const params = {
    overtimeHours: Number(overtimeHours) || 0,
    carType,
    childrenAges: Array.isArray(childrenAges) ? childrenAges : [],
    gender,
    hasDegree: Boolean(hasDegree),
    partnerWorks: Boolean(partnerWorks),
    miluimDays: Number(miluimDays) || 0,
    insuranceCost: Number(insuranceCost) || 0,
    vehicleRegFee: Number(vehicleRegFee) || 0,
    travelAllowance: Number(travelAllowance) || 323,
    companyCar: Boolean(companyCar),
    companyCarGroup: Number(companyCarGroup) || 3,
    oncallCount: Number(oncallCount) || 0,
    premiumHours: Number(premiumHours) || 0,
    premiumPct: Number(premiumPct) || 0,
    recoveryYears: Number(recoveryYears) || 0,
    includeInsuranceRefund: Boolean(includeInsuranceRefund),
    includeStudyFund: Boolean(includeStudyFund),
    includePension: Boolean(includePension),
    includeRecovery: Boolean(includeRecovery),
    includeClothing: Boolean(includeClothing),
    includeGifts: Boolean(includeGifts),
    inclMaonot: Boolean(inclMaonot),
    inclCibus: Boolean(inclCibus),
    inclPhone: Boolean(inclPhone),
    gradeHourlyRate: grade.hourlyRate || (grade.salary / 173.33),
    hasOvertimeEntitlement: true,
    localityGroupData: (localityName && LOCALITY_MAP[localityName])
      ? LOCALITY_GROUPS[String(LOCALITY_MAP[localityName])]
      : null,
    mealAllowance: grade.mealAllowance || 0,
  };

  const result = calcAll(grade.salary, contract, params);

  // Calculate next grade — preserving letter suffix (39ב → 40ב, not 40)
  const gradeIdx = contract.grades.findIndex(g => g.id === grade.id);
  let nextGradeResult = null;
  let nextGradeLabel = null;
  if (gradeIdx >= 0) {
    const hebrewLetters = 'אבגדהוזחטיכלמנסעפצקרשת';
    const curLabel = grade.label;
    const curSuffix = hebrewLetters.includes(curLabel.slice(-1)) ? curLabel.slice(-1) : '';
    for (let i = gradeIdx + 1; i < contract.grades.length; i++) {
      const g = contract.grades[i];
      const gSuffix = hebrewLetters.includes(g.label.slice(-1)) ? g.label.slice(-1) : '';
      if (gSuffix === curSuffix) {
        nextGradeResult = calcAll(g.salary, contract, params);
        nextGradeLabel = g.label;
        break;
      }
    }
  }

  return NextResponse.json(
    {
      result,
      nextGradeResult,
      nextGradeLabel,
      gradeLabel: grade.label,
      gradeSalary: grade.salary,
    },
    {
      headers: {
        'Cache-Control': 'no-store',
      },
    }
  );
}

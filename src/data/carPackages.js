// Car / mobility packages — monthly values in ILS
export const CAR_PACKAGES = {
  none:   { label: 'ללא רכב',            value: 0,    isCar: false },
  level2: { label: 'רכב שירות - רמה ב׳', value: 1022, isCar: true, insurance: 444 },
  level3: { label: 'רכב שירות - רמה ג׳', value: 1228, isCar: true, insurance: 570 },
  level4: { label: 'רכב שירות - רמה ד׳', value: 1403, isCar: true, insurance: 676 },
};

// Imputation values for company car (leased / צמוד) — monthly, per group
export const COMPANY_CAR_IMPUTATION = { 3: 4390, 4: 5260, 5: 7280 };

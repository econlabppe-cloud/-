/**
 * Per-contract entitlements per Annex A of Civil Service Commissioner Instruction 1.14.
 * overtime      – entitled to reported overtime pay
 * oncall        – entitled to on-call (כוננויות)
 * personalGrade – entitled to personal grade supplement
 * choiceOption  – may choose between contract and salary-scale
 */
export const CONTRACT_ENTITLEMENTS = {
  // ── בכירים ──
  '557': { overtime: false, oncall: false, personalGrade: false, choiceOption: true },
  '568': { overtime: false, oncall: false, personalGrade: false, choiceOption: true },
  '569': { overtime: false, oncall: false, personalGrade: false, choiceOption: true },
  '864': { overtime: false, oncall: false, personalGrade: false, choiceOption: true },
  // ── לשכות ──
  '564': { overtime: false, oncall: false, personalGrade: true,  choiceOption: false },
  '764': { overtime: false, oncall: false, personalGrade: false, choiceOption: false },
  '516': { overtime: true,  oncall: false, personalGrade: false, choiceOption: false },
  '517': { overtime: false, oncall: false, personalGrade: false, choiceOption: false },
  // ── כלכלנים ואקדמאים ──
  '551': { overtime: true,  oncall: false, personalGrade: true,  choiceOption: true },
  '514': { overtime: true,  oncall: false, personalGrade: true,  choiceOption: true },
  '14':  { overtime: true,  oncall: false, personalGrade: true,  choiceOption: true },
  '87':  { overtime: true,  oncall: true,  personalGrade: true,  choiceOption: true },
  '587': { overtime: true,  oncall: true,  personalGrade: true,  choiceOption: true },
  '187': { overtime: true,  oncall: true,  personalGrade: true,  choiceOption: true },
  '402': { overtime: true,  oncall: false, personalGrade: true,  choiceOption: true },
  // ── משפטנים ──
  '987': { overtime: true,  oncall: true,  personalGrade: true,  choiceOption: true },
  // ── חוקרי מח"ש ──
  '168': { overtime: true,  oncall: true,  personalGrade: true,  choiceOption: true },
  // ── בוחני פטנטים ──
  '165': { overtime: true,  oncall: false, personalGrade: false, choiceOption: true },
  '264': { overtime: true,  oncall: false, personalGrade: false, choiceOption: true },
  '265': { overtime: true,  oncall: false, personalGrade: false, choiceOption: true },
  '266': { overtime: true,  oncall: false, personalGrade: false, choiceOption: true },
  // ── עוזרים משפטיים ──
  '561': { overtime: true,  oncall: false, personalGrade: false, choiceOption: false },
  '562': { overtime: false, oncall: false, personalGrade: false, choiceOption: false },
  // ── מומחים ──
  '555': { overtime: true,  oncall: false, personalGrade: false, choiceOption: true },
  '964': { overtime: false, oncall: false, personalGrade: false, choiceOption: true },
  '164': { overtime: true,  oncall: false, personalGrade: false, choiceOption: true },
  '965': { overtime: true,  oncall: false, personalGrade: false, choiceOption: true },
  // ── פקחים ──
  '552': { overtime: true,  oncall: false, personalGrade: true,  choiceOption: true },
  // ── תעופה ──
  '122': { overtime: false, oncall: false, personalGrade: false, choiceOption: true },
  '688': { overtime: false, oncall: false, personalGrade: false, choiceOption: false },
  '588': { overtime: true,  oncall: false, personalGrade: false, choiceOption: true },
  '188': { overtime: true,  oncall: false, personalGrade: false, choiceOption: true },
  '512': { overtime: true,  oncall: true,  personalGrade: true,  choiceOption: true },
  // ── מיוחדים ──
  '167': { overtime: false, oncall: false, personalGrade: false, choiceOption: false },
  '315': { overtime: false, oncall: false, personalGrade: false, choiceOption: false },
  '387': { overtime: true,  oncall: false, personalGrade: false, choiceOption: false },
  '384': { overtime: false, oncall: false, personalGrade: false, choiceOption: false },
  '584': { overtime: true,  oncall: false, personalGrade: false, choiceOption: false },
  '525': { overtime: true,  oncall: false, personalGrade: false, choiceOption: false },
  '521': { overtime: true,  oncall: false, personalGrade: true,  choiceOption: true },
  '520': { overtime: true,  oncall: false, personalGrade: true,  choiceOption: true },
  '519': { overtime: true,  oncall: false, personalGrade: true,  choiceOption: false },
  '210': { overtime: true,  oncall: false, personalGrade: true,  choiceOption: false },
  '710': { overtime: true,  oncall: false, personalGrade: true,  choiceOption: false },
  '556': { overtime: true,  oncall: false, personalGrade: true,  choiceOption: true },
  '554': { overtime: true,  oncall: false, personalGrade: false, choiceOption: false },
  '509': { overtime: false, oncall: false, personalGrade: false, choiceOption: false },
  '343': { overtime: false, oncall: false, personalGrade: false, choiceOption: false },
  '109': { overtime: true,  oncall: false, personalGrade: false, choiceOption: false },
  '110': { overtime: true,  oncall: false, personalGrade: false, choiceOption: false },
  '553': { overtime: true,  oncall: false, personalGrade: false, choiceOption: false },
  '610': { overtime: false, oncall: false, personalGrade: false, choiceOption: false },
  '166': { overtime: false, oncall: false, personalGrade: false, choiceOption: false },
  '522': { overtime: false, oncall: false, personalGrade: false, choiceOption: true },
  '382': { overtime: false, oncall: false, personalGrade: false, choiceOption: true },
  '383': { overtime: true,  oncall: false, personalGrade: false, choiceOption: true },
  '589': { overtime: false, oncall: false, personalGrade: false, choiceOption: false },
  '421': { overtime: false, oncall: false, personalGrade: false, choiceOption: true },
  '422': { overtime: true,  oncall: false, personalGrade: false, choiceOption: true },
  '423': { overtime: true,  oncall: false, personalGrade: false, choiceOption: true },
  '424': { overtime: true,  oncall: false, personalGrade: false, choiceOption: true },
  '425': { overtime: true,  oncall: false, personalGrade: false, choiceOption: true },
  '426': { overtime: true,  oncall: false, personalGrade: false, choiceOption: true },
  '427': { overtime: true,  oncall: false, personalGrade: false, choiceOption: true },
  '496': { overtime: false, oncall: false, personalGrade: false, choiceOption: false },
  '497': { overtime: false, oncall: false, personalGrade: false, choiceOption: false },
  '491': { overtime: false, oncall: false, personalGrade: false, choiceOption: false },
  '492': { overtime: false, oncall: false, personalGrade: false, choiceOption: false },
  '493': { overtime: false, oncall: false, personalGrade: false, choiceOption: false },
  '494': { overtime: false, oncall: false, personalGrade: false, choiceOption: false },
  '286': { overtime: false, oncall: false, personalGrade: false, choiceOption: false },
  '495': { overtime: true,  oncall: true,  personalGrade: false, choiceOption: false },
  '48':  { overtime: true,  oncall: true,  personalGrade: true,  choiceOption: true },
  '148': { overtime: true,  oncall: true,  personalGrade: true,  choiceOption: true },
  '948': { overtime: true,  oncall: true,  personalGrade: true,  choiceOption: true },
  '64':  { overtime: true,  oncall: false, personalGrade: false, choiceOption: false },
  '600': { overtime: false, oncall: false, personalGrade: false, choiceOption: false },
  '287': { overtime: true,  oncall: true,  personalGrade: true,  choiceOption: true },
  '787': { overtime: true,  oncall: true,  personalGrade: true,  choiceOption: true },
  '123': { overtime: true,  oncall: true,  personalGrade: true,  choiceOption: true },
  '331': { overtime: true,  oncall: true,  personalGrade: false, choiceOption: false },
  '332': { overtime: true,  oncall: true,  personalGrade: false, choiceOption: false },
  '333': { overtime: true,  oncall: true,  personalGrade: false, choiceOption: false },
  '334': { overtime: true,  oncall: true,  personalGrade: false, choiceOption: false },
  '335': { overtime: true,  oncall: true,  personalGrade: false, choiceOption: false },
  '336': { overtime: true,  oncall: true,  personalGrade: false, choiceOption: false },
  '337': { overtime: true,  oncall: true,  personalGrade: false, choiceOption: false },
  '338': { overtime: true,  oncall: true,  personalGrade: false, choiceOption: false },
  '339': { overtime: true,  oncall: true,  personalGrade: false, choiceOption: false },
  '340': { overtime: true,  oncall: true,  personalGrade: false, choiceOption: false },
  '310': { overtime: true,  oncall: true,  personalGrade: false, choiceOption: false },
  '320': { overtime: true,  oncall: true,  personalGrade: false, choiceOption: false },
  '635': { overtime: true,  oncall: true,  personalGrade: false, choiceOption: false },
  '636': { overtime: true,  oncall: true,  personalGrade: false, choiceOption: false },
  '134': { overtime: true,  oncall: false, personalGrade: false, choiceOption: false },
  '195': { overtime: true,  oncall: false, personalGrade: false, choiceOption: false },
  '204': { overtime: true,  oncall: false, personalGrade: false, choiceOption: false },
};

/** Fallback when a contract number is not listed above */
export const DEFAULT_ENTITLEMENTS = {
  overtime: true, oncall: false, personalGrade: false, choiceOption: false,
};

export function getEntitlements(contractId) {
  return CONTRACT_ENTITLEMENTS[contractId] ?? DEFAULT_ENTITLEMENTS;
}

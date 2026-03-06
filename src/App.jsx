import { useState, useMemo, useEffect, useCallback } from 'react';

import { CONTRACTS } from './data/contracts';
import { getEntitlements } from './data/contractEntitlements';
import { CAR_PACKAGES, COMPANY_CAR_IMPUTATION } from './data/carPackages';
import { calcAll } from './utils/calculator';
import { useUrlSync, stateToParams, paramsToState } from './hooks/useUrlSync';

import DisclaimerModal from './components/DisclaimerModal';
import ContractSelector from './components/ContractSelector';
import TopStats from './components/TopStats';
import SalaryBreakdown from './components/SalaryBreakdown';
import BenefitToggles from './components/BenefitToggles';
import PayslipModal from './components/PayslipModal';
import { Icons, Card, SectionTitle } from './components/icons';

// ─── Default state ────────────────────────────────────────────────────────────
const DEFAULT_STATE = {
  contractId: '551',
  gradeId: '44',
  // Work hours
  overtimeHours: 0,
  eveningShiftHours: 0,
  // Allowances
  oncallCount: 0,
  premiumHours: 0,
  premiumPct: 0,
  // Car
  carType: 'none',
  companyCar: false,
  companyCarGroup: 3,
  // Travel
  travelAllowance: 323,
  insuranceCost: 0,
  vehicleRegFee: 0,
  // Family
  childrenAges: [],
  childrenUnder5: 0,
  children6to18: 0,
  gender: 'male',
  hasDegree: false,
  partnerWorks: true,
  miluimDays: 0,
  inclMaonot: true,
  // Seniority
  recoveryYears: 0,
  // Benefit toggles
  inclIns: true,
  inclSF: true,
  inclPens: true,
  inclRec: true,
  inclCloth: true,
  inclGifts: true,
};

// ─── Numeric input helper ─────────────────────────────────────────────────────
const numInput = (val, setter) => ({
  type: 'number',
  value: val,
  min: 0,
  onChange: e => setter(Math.max(0, Number(e.target.value))),
  className:
    'w-full border-2 border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 rounded-xl py-2 px-3 text-sm font-bold transition-all outline-none bg-white',
});

// ─── Section label ────────────────────────────────────────────────────────────
const Label = ({ children, sub }) => (
  <div className="mb-1">
    <div className="text-sm font-semibold text-slate-700">{children}</div>
    {sub && <div className="text-xs text-slate-400">{sub}</div>}
  </div>
);

const Row = ({ children, className = '' }) => (
  <div className={`grid gap-3 ${className}`}>{children}</div>
);

export default function App() {
  const { writeParams } = useUrlSync();

  // ── State ──────────────────────────────────────────────────────────────────
  const [contractId, setContractId]         = useState(DEFAULT_STATE.contractId);
  const [gradeId, setGradeId]               = useState(DEFAULT_STATE.gradeId);
  const [overtimeHours, setOvertimeHours]   = useState(DEFAULT_STATE.overtimeHours);
  const [eveningShiftHours, setEvening]     = useState(DEFAULT_STATE.eveningShiftHours);
  const [oncallCount, setOncallCount]       = useState(DEFAULT_STATE.oncallCount);
  const [premiumHours, setPremiumHours]     = useState(DEFAULT_STATE.premiumHours);
  const [premiumPct, setPremiumPct]         = useState(DEFAULT_STATE.premiumPct);
  const [carType, setCarType]               = useState(DEFAULT_STATE.carType);
  const [companyCar, setCompanyCar]         = useState(DEFAULT_STATE.companyCar);
  const [companyCarGroup, setCompanyCarGrp] = useState(DEFAULT_STATE.companyCarGroup);
  const [travelAllowance, setTravel]        = useState(DEFAULT_STATE.travelAllowance);
  const [insuranceCost, setInsurance]       = useState(DEFAULT_STATE.insuranceCost);
  const [vehicleRegFee, setRegFee]          = useState(DEFAULT_STATE.vehicleRegFee);
  const [childrenAges, setChildrenAges]     = useState(DEFAULT_STATE.childrenAges);
  const [childrenUnder5, setUnder5]         = useState(DEFAULT_STATE.childrenUnder5);
  const [children6to18, set6to18]           = useState(DEFAULT_STATE.children6to18);
  const [gender, setGender]                 = useState(DEFAULT_STATE.gender);
  const [hasDegree, setHasDegree]           = useState(DEFAULT_STATE.hasDegree);
  const [miluimDays, setMiluimDays]         = useState(DEFAULT_STATE.miluimDays);
  const [inclMaonot, setInclMaonot]         = useState(DEFAULT_STATE.inclMaonot);
  const [recoveryYears, setRecoveryYears]   = useState(DEFAULT_STATE.recoveryYears);
  const [inclIns, setInclIns]               = useState(DEFAULT_STATE.inclIns);
  const [inclSF, setInclSF]                 = useState(DEFAULT_STATE.inclSF);
  const [inclPens, setInclPens]             = useState(DEFAULT_STATE.inclPens);
  const [inclRec, setInclRec]               = useState(DEFAULT_STATE.inclRec);
  const [inclCloth, setInclCloth]           = useState(DEFAULT_STATE.inclCloth);
  const [inclGifts, setInclGifts]           = useState(DEFAULT_STATE.inclGifts);

  const [showPayslip, setShowPayslip]       = useState(false);
  const [showAnnual, setShowAnnual]         = useState(false);
  const [urlCopied, setUrlCopied]           = useState(false);

  // ── Hydrate from URL on first render ──────────────────────────────────────
  useEffect(() => {
    const hydrated = paramsToState(DEFAULT_STATE);
    if (hydrated.contractId)      setContractId(hydrated.contractId);
    if (hydrated.gradeId)         setGradeId(hydrated.gradeId);
    if (hydrated.overtimeHours !== undefined)   setOvertimeHours(hydrated.overtimeHours);
    if (hydrated.eveningShiftHours !== undefined) setEvening(hydrated.eveningShiftHours);
    if (hydrated.oncallCount !== undefined)     setOncallCount(hydrated.oncallCount);
    if (hydrated.premiumHours !== undefined)    setPremiumHours(hydrated.premiumHours);
    if (hydrated.premiumPct !== undefined)      setPremiumPct(hydrated.premiumPct);
    if (hydrated.carType)         setCarType(hydrated.carType);
    if (hydrated.companyCar !== undefined)      setCompanyCar(hydrated.companyCar);
    if (hydrated.companyCarGroup !== undefined) setCompanyCarGrp(hydrated.companyCarGroup);
    if (hydrated.travelAllowance !== undefined) setTravel(hydrated.travelAllowance);
    if (hydrated.insuranceCost !== undefined)   setInsurance(hydrated.insuranceCost);
    if (hydrated.vehicleRegFee !== undefined)   setRegFee(hydrated.vehicleRegFee);
    if (hydrated.childrenAges)    setChildrenAges(hydrated.childrenAges);
    if (hydrated.childrenUnder5 !== undefined)  setUnder5(hydrated.childrenUnder5);
    if (hydrated.children6to18 !== undefined)   set6to18(hydrated.children6to18);
    if (hydrated.gender)          setGender(hydrated.gender);
    if (hydrated.hasDegree !== undefined)       setHasDegree(hydrated.hasDegree);
    if (hydrated.miluimDays !== undefined)      setMiluimDays(hydrated.miluimDays);
    if (hydrated.inclMaonot !== undefined)      setInclMaonot(hydrated.inclMaonot);
    if (hydrated.recoveryYears !== undefined)   setRecoveryYears(hydrated.recoveryYears);
    if (hydrated.inclIns !== undefined)   setInclIns(hydrated.inclIns);
    if (hydrated.inclSF !== undefined)    setInclSF(hydrated.inclSF);
    if (hydrated.inclPens !== undefined)  setInclPens(hydrated.inclPens);
    if (hydrated.inclRec !== undefined)   setInclRec(hydrated.inclRec);
    if (hydrated.inclCloth !== undefined) setInclCloth(hydrated.inclCloth);
    if (hydrated.inclGifts !== undefined) setInclGifts(hydrated.inclGifts);
  }, []);

  // ── Derived data ──────────────────────────────────────────────────────────
  const contract = CONTRACTS[contractId] ?? CONTRACTS['551'];
  const grades   = contract.grades ?? [];
  const grade    = grades.find(g => g.id === gradeId) ?? grades[grades.length - 1] ?? { salary: 0 };
  const gradeIdx = grades.indexOf(grade);
  const nextGrade = gradeIdx >= 0 && gradeIdx < grades.length - 1 ? grades[gradeIdx + 1] : null;
  const ent = getEntitlements(contractId);

  // ── Params object for calcAll ─────────────────────────────────────────────
  const params = useMemo(() => ({
    overtimeHours,
    eveningShiftHours,
    oncallCount,
    premiumHours,
    premiumPct,
    carType,
    companyCar,
    companyCarGroup,
    travelAllowance,
    insuranceCost,
    vehicleRegFee,
    childrenAges,
    childrenUnder5,
    children6to18,
    gender,
    hasDegree,
    miluimDays,
    inclMaonot,
    recoveryYears,
    hasOvertimeEntitlement: ent.overtime,
    includeInsuranceRefund: inclIns,
    includeStudyFund: inclSF,
    includePension: inclPens,
    includeRecovery: inclRec,
    includeClothing: inclCloth,
    includeGifts: inclGifts,
    _carPackages: CAR_PACKAGES,
  }), [
    overtimeHours, eveningShiftHours, oncallCount, premiumHours, premiumPct,
    carType, companyCar, companyCarGroup, travelAllowance, insuranceCost, vehicleRegFee,
    childrenAges, childrenUnder5, children6to18, gender, hasDegree, miluimDays, inclMaonot,
    recoveryYears, ent.overtime, inclIns, inclSF, inclPens, inclRec, inclCloth, inclGifts,
  ]);

  // ── Calculation results ───────────────────────────────────────────────────
  const R = useMemo(
    () => calcAll(grade.salary, contract, params, CAR_PACKAGES, COMPANY_CAR_IMPUTATION),
    [grade.salary, contract, params]
  );

  const NR = useMemo(
    () => nextGrade
      ? calcAll(nextGrade.salary, contract, params, CAR_PACKAGES, COMPANY_CAR_IMPUTATION)
      : null,
    [nextGrade, contract, params]
  );

  // ── URL sync (write on every state change) ────────────────────────────────
  useEffect(() => {
    writeParams(stateToParams({
      contractId, gradeId, overtimeHours, eveningShiftHours, oncallCount,
      premiumHours, premiumPct, carType, companyCar, companyCarGroup,
      travelAllowance, insuranceCost, vehicleRegFee, childrenAges,
      childrenUnder5, children6to18, gender, hasDegree, miluimDays, inclMaonot,
      recoveryYears, inclIns, inclSF, inclPens, inclRec, inclCloth, inclGifts,
    }));
  }, [
    contractId, gradeId, overtimeHours, eveningShiftHours, oncallCount,
    premiumHours, premiumPct, carType, companyCar, companyCarGroup,
    travelAllowance, insuranceCost, vehicleRegFee, childrenAges,
    childrenUnder5, children6to18, gender, hasDegree, miluimDays, inclMaonot,
    recoveryYears, inclIns, inclSF, inclPens, inclRec, inclCloth, inclGifts,
    writeParams,
  ]);

  // When contract changes, reset grade to last (highest) grade
  const handleContractChange = useCallback((id) => {
    setContractId(id);
    const ct = CONTRACTS[id];
    if (ct?.grades?.length) setGradeId(ct.grades[ct.grades.length - 1].id);
  }, []);

  // ── Share URL ─────────────────────────────────────────────────────────────
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setUrlCopied(true);
      setTimeout(() => setUrlCopied(false), 2500);
    });
  };

  // ─────────────────────────────────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-slate-100" dir="rtl">

      {/* Disclaimer modal (first visit) */}
      <DisclaimerModal />

      {/* ── Header ── */}
      <header className="bg-gradient-to-l from-slate-800 to-slate-900 text-white py-6 px-4 shadow-xl">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                <Icons.Brief c="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-extrabold tracking-tight">מחשבון שכר — שירות המדינה</h1>
                <p className="text-slate-400 text-sm mt-0.5">סימולציה מלאה לפי דירוג, דרגה ותנאים אישיים · 2024–2025</p>
              </div>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 text-sm bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl transition-all border border-white/10"
            >
              <Icons.Share c="w-4 h-4" />
              {urlCopied ? 'הקישור הועתק!' : 'שתף חישוב'}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 space-y-6">

        {/* ── Top KPI cards ── */}
        <TopStats R={R} contract={contract} showAnnual={showAnnual} setShowAnnual={setShowAnnual} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ════════════════════════════════════════════════════════════════
              LEFT COLUMN — inputs
              ════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-1 space-y-4">

            {/* ── Contract selector ── */}
            <Card className="p-5">
              <SectionTitle icon={Icons.Brief} title="בחירת דירוג" subtitle="בחר את הדירוג המתאים לך" />
              <ContractSelector contractId={contractId} setContractId={handleContractChange} />
            </Card>

            {/* ── Grade selector ── */}
            <Card className="p-5">
              <SectionTitle icon={Icons.Calc} title="דרגה" subtitle="בחר דרגה בסולם" />
              <select
                value={gradeId}
                onChange={e => setGradeId(e.target.value)}
                className="w-full border-2 border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 rounded-xl py-2.5 px-3 text-sm font-bold transition-all outline-none bg-white"
              >
                {grades.map(g => (
                  <option key={g.id} value={g.id}>
                    {g.label} — {Math.round(g.salary).toLocaleString('he-IL')} ₪
                  </option>
                ))}
              </select>
            </Card>

            {/* ── Work hours ── */}
            <Card className="p-5">
              <SectionTitle icon={Icons.Cal} title="שעות עבודה" subtitle="שעות נוספות ומשמרות" />
              <div className="space-y-3">
                <div>
                  <Label sub="עד 42 שעות/חודש בדרך כלל">שעות נוספות</Label>
                  <input {...numInput(overtimeHours, setOvertimeHours)} max={100} />
                </div>
                <div>
                  <Label sub="תגמול 120% — משמרות ערב/לילה">שעות משמרת ערב/לילה</Label>
                  <input {...numInput(eveningShiftHours, setEvening)} max={200} />
                </div>
                {ent.oncall && (
                  <div>
                    <Label sub="כל כוננות = 5.33 שעות">כוננויות בחודש</Label>
                    <input {...numInput(oncallCount, setOncallCount)} max={30} />
                  </div>
                )}
                <div>
                  <Label sub="שעות פרמיה">שעות פרמיה</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <input {...numInput(premiumHours, setPremiumHours)} placeholder="שעות" />
                    <input {...numInput(premiumPct, setPremiumPct)} placeholder="%" max={200} />
                  </div>
                </div>
              </div>
            </Card>

            {/* ── Car & travel ── */}
            <Card className="p-5">
              <SectionTitle icon={Icons.Car} title="רכב ונסיעות" subtitle="הרכב השירותי ודמי נסיעה" />
              <div className="space-y-3">
                <div>
                  <Label>סוג רכב שירות</Label>
                  <select
                    value={carType}
                    onChange={e => setCarType(e.target.value)}
                    className="w-full border-2 border-slate-200 focus:border-blue-400 rounded-xl py-2.5 px-3 text-sm font-bold outline-none bg-white"
                  >
                    {Object.entries(CAR_PACKAGES).map(([k, v]) => (
                      <option key={k} value={k}>{v.label}</option>
                    ))}
                  </select>
                </div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox" checked={companyCar}
                    onChange={e => setCompanyCar(e.target.checked)}
                    className="w-5 h-5 text-blue-600 rounded"
                  />
                  <span className="text-sm font-semibold text-slate-700">רכב צמוד (ליסינג)</span>
                </label>
                {companyCar && (
                  <div>
                    <Label>קבוצת רכב צמוד</Label>
                    <select
                      value={companyCarGroup}
                      onChange={e => setCompanyCarGrp(Number(e.target.value))}
                      className="w-full border-2 border-slate-200 focus:border-blue-400 rounded-xl py-2.5 px-3 text-sm font-bold outline-none bg-white"
                    >
                      {Object.entries(COMPANY_CAR_IMPUTATION).map(([g, v]) => (
                        <option key={g} value={g}>קבוצה {g} — שווי {v.toLocaleString('he-IL')} ₪</option>
                      ))}
                    </select>
                  </div>
                )}
                {!companyCar && (
                  <>
                    <div>
                      <Label sub="עד 323 ₪/חודש">דמי נסיעה חודשיים</Label>
                      <input {...numInput(travelAllowance, setTravel)} max={1000} />
                    </div>
                    {carType !== 'none' && (
                      <>
                        <div>
                          <Label sub="עד 7,000 ₪ בשנה">עלות ביטוח רכב שנתית</Label>
                          <input {...numInput(insuranceCost, setInsurance)} max={15000} />
                        </div>
                        <div>
                          <Label sub="עד 2,326 ₪ בשנה">אגרת רישוי שנתית</Label>
                          <input {...numInput(vehicleRegFee, setRegFee)} max={5000} />
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
            </Card>

            {/* ── Personal details ── */}
            <Card className="p-5">
              <SectionTitle icon={Icons.Baby} title="פרטים אישיים" subtitle="מגדר, השכלה ומשפחה" />
              <div className="space-y-3">
                {/* Gender */}
                <div>
                  <Label>מגדר (לחישוב נקודות זיכוי)</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {[['male', 'גבר'], ['female', 'אישה']].map(([val, lbl]) => (
                      <button
                        key={val}
                        onClick={() => setGender(val)}
                        className={`py-2 rounded-xl border-2 text-sm font-bold transition-all ${
                          gender === val
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300'
                        }`}
                      >
                        {lbl}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Degree */}
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox" checked={hasDegree}
                    onChange={e => setHasDegree(e.target.checked)}
                    className="w-5 h-5 text-blue-600 rounded"
                  />
                  <span className="text-sm font-semibold text-slate-700">בעל/ת תואר (נקודת זיכוי נוספת)</span>
                </label>

                {/* Children under 5 */}
                <div>
                  <Label sub="גיל 0–4 · מעונות 330 ₪ לילד (עד 2)">ילדים עד גיל 4</Label>
                  <input {...numInput(childrenUnder5, setUnder5)} max={10} />
                </div>

                {/* Maonot toggle */}
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox" checked={inclMaonot}
                    onChange={e => setInclMaonot(e.target.checked)}
                    className="w-5 h-5 text-blue-600 rounded"
                  />
                  <span className="text-sm font-semibold text-slate-700">כלול תוספת מעונות</span>
                </label>

                {/* Children 6-18 */}
                <div>
                  <Label sub="גיל 6–18 · נקודות זיכוי">ילדים גיל 6–18</Label>
                  <input {...numInput(children6to18, set6to18)} max={15} />
                </div>

                {/* Miluim */}
                <div>
                  <Label sub="30+ ימים מזכים בנקודות זיכוי נוספות">ימי מילואים בשנה</Label>
                  <input {...numInput(miluimDays, setMiluimDays)} max={365} />
                </div>
              </div>
            </Card>

          </div>

          {/* ════════════════════════════════════════════════════════════════
              RIGHT COLUMN — results
              ════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-2 space-y-4">

            {/* Salary breakdown */}
            <SalaryBreakdown
              R={R}
              NR={NR}
              contract={contract}
              grade={grade}
              nextGrade={nextGrade}
              overtimeHours={overtimeHours}
              params={params}
              onShowPayslip={() => setShowPayslip(true)}
            />

            {/* Benefit toggles / economic value */}
            <Card className="p-5">
              <SectionTitle
                icon={Icons.Trend}
                title="שווי כלכלי כולל"
                subtitle="בחר אילו הטבות לכלול בחישוב"
              />
              <BenefitToggles
                R={R}
                contract={contract}
                inclIns={inclIns}   setInclIns={setInclIns}
                inclSF={inclSF}     setInclSF={setInclSF}
                inclPens={inclPens} setInclPens={setInclPens}
                inclRec={inclRec}   setInclRec={setInclRec}
                inclCloth={inclCloth} setInclCloth={setInclCloth}
                inclGifts={inclGifts} setInclGifts={setInclGifts}
                recoveryYears={recoveryYears} setRecYears={setRecoveryYears}
              />
            </Card>

            {/* Annual summary */}
            <Card className="p-5">
              <SectionTitle icon={Icons.Cal} title="סיכום שנתי" subtitle="הכנסות ותנאים לשנה שלמה" />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { label: 'נטו שנתי',           value: R.netSalary * 12 },
                  { label: 'ברוטו שנתי',          value: R.totalGross * 12 },
                  { label: 'מס הכנסה שנתי',       value: R.incomeTax * 12 },
                  { label: 'ביטוח לאומי שנתי',    value: R.socialSecurity * 12 },
                  { label: 'פנסיה עובד שנתי',     value: R.pensionDed * 12 },
                  { label: 'קה״ש עובד שנתי',      value: R.studyFundDed * 12 },
                  { label: 'פנסיה מעסיק שנתי',    value: R.pensionEmployer * 12 },
                  { label: 'קה״ש מעסיק שנתי',     value: R.studyFundEmployer * 12 },
                  { label: 'שווי כלכלי שנתי',     value: R.totalEconomicValue * 12, highlight: true },
                ].map(({ label, value, highlight }) => (
                  <div
                    key={label}
                    className={`rounded-xl p-3 border ${
                      highlight
                        ? 'bg-emerald-50 border-emerald-200'
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="text-xs text-slate-500 mb-1">{label}</div>
                    <div className={`font-bold text-sm ${highlight ? 'text-emerald-700' : 'text-slate-800'}`}>
                      {Math.round(value).toLocaleString('he-IL')} ₪
                    </div>
                  </div>
                ))}
              </div>
            </Card>

          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="mt-12 py-8 bg-slate-800 text-slate-400 text-center text-xs px-4">
        <p className="mb-1">
          מחשבון שכר — שירות המדינה · נתוני 2024–2025 · לסימולציה בלבד
        </p>
        <p>
          אין לראות בפלטי המחשבון כתלוש שכר רשמי או ייעוץ מקצועי.
        </p>
      </footer>

      {/* ── Payslip modal ── */}
      {showPayslip && (
        <PayslipModal
          R={R}
          contract={contract}
          grade={grade}
          params={params}
          onClose={() => setShowPayslip(false)}
        />
      )}
    </div>
  );
}

'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import ContractSelector from '../components/ContractSelector';
import BenefitToggles from '../components/BenefitToggles';
import ResultsPanel from '../components/ResultsPanel';
import PayslipModal from '../components/PayslipModal';
import StickyContactBar from '../components/StickyContactBar';

// ── Icons ──
const Ico = {
  Calc: ({ c }) => <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
  Brief: ({ c }) => <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  Car: ({ c }) => <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l1 1h1m8-1h1l1-1v-2.586a1 1 0 00-.293-.707l-3.414-3.414A1 1 0 0010 7H9M17 16h1l1-1V9" /></svg>,
  Baby: ({ c }) => <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
  Coin: ({ c }) => <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  File: ({ c }) => <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
  Shield: ({ c }) => <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  Zap: ({ c }) => <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  Check: ({ c }) => <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  Info: ({ c }) => <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
};

const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-2xl shadow-lg border border-slate-200 ${className}`}>{children}</div>
);

const SectionTitle = ({ icon: Icon, title, subtitle }) => (
  <div className="mb-5">
    <div className="flex items-center gap-3 mb-1">
      <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg">
        <Icon c="w-5 h-5 text-white" />
      </div>
      <span className="text-lg font-bold text-slate-800">{title}</span>
    </div>
    {subtitle && <p className="text-sm text-slate-500 mr-11">{subtitle}</p>}
  </div>
);

const CAR_PACKAGES_META = {
  none:   { label: 'ללא רכב', isCar: false, value: 0 },
  level2: { label: "רכב שירות - רמה ב'", isCar: true, value: 1022 },
  level3: { label: "רכב שירות - רמה ג'", isCar: true, value: 1228 },
  level4: { label: "רכב שירות - רמה ד'", isCar: true, value: 1403 },
};

function ChildrenInput({ childrenAges, setChildrenAges, gender }) {
  const [showInput, setShowInput] = useState(false);
  const [newAge, setNewAge] = useState(0);
  const [newCount, setNewCount] = useState(1);

  const CHILD_POINTS_UI = (age) => {
    const isMother = gender === 'female';
    if (age === 0) return 2.5; if (age <= 2) return 4.5; if (age === 3) return 3.5;
    if (age <= 5) return 2.5; if (age <= 17) return isMother ? 2 : 1;
    if (age === 18) return isMother ? 0.5 : 0; return 0;
  };

  const addChild = () => {
    const age = Number(newAge);
    if (age < 0 || age > 18) return;
    const existing = childrenAges.find(c => c.age === age);
    if (existing) {
      setChildrenAges(childrenAges.map(c => c.age === age ? { ...c, count: c.count + newCount } : c));
    } else {
      setChildrenAges([...childrenAges, { age, count: newCount }].sort((a, b) => a.age - b.age));
    }
    setShowInput(false);
  };

  const removeChild = (age) => setChildrenAges(childrenAges.filter(c => c.age !== age));

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-semibold text-slate-700">ילדים — נקודות זיכוי לפי גיל</label>
        <button onClick={() => setShowInput(!showInput)}
          className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg transition-all font-semibold">
          + הוסף ילד
        </button>
      </div>
      {showInput && (
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-3 mb-2 flex items-end gap-2">
          <div className="flex-1">
            <label className="text-xs text-slate-600 mb-1 block">גיל הילד (0–18)</label>
            <input type="number" min="0" max="18" value={newAge} onChange={e => setNewAge(Number(e.target.value))}
              className="w-full border-2 border-blue-300 rounded-lg px-3 py-2 text-center font-bold text-lg focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="w-20">
            <label className="text-xs text-slate-600 mb-1 block">כמות</label>
            <input type="number" min="1" max="5" value={newCount} onChange={e => setNewCount(Number(e.target.value))}
              className="w-full border-2 border-blue-300 rounded-lg px-3 py-2 text-center font-bold text-lg focus:ring-2 focus:ring-blue-500" />
          </div>
          <button onClick={addChild} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold transition-all">✓</button>
          <button onClick={() => setShowInput(false)} className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-3 py-2 rounded-lg transition-all">✕</button>
        </div>
      )}
      {childrenAges.length > 0 ? (
        <div className="space-y-1.5">
          {childrenAges.map(({ age, count }) => (
            <div key={age} className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg px-3 py-2">
              <div className="text-sm font-semibold text-slate-700">
                {age === 0 ? 'תינוק' : `גיל ${age}`}
                {count > 1 && <span className="mr-1 text-blue-600 font-bold">×{count}</span>}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">
                  {CHILD_POINTS_UI(age) * count} נק׳
                </span>
                <button onClick={() => removeChild(age)} className="text-red-400 hover:text-red-600 text-xs font-bold">✕</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-3 text-slate-400 text-sm bg-slate-50 rounded-xl border border-dashed border-slate-300">
          לא הוזנו ילדים
        </div>
      )}
    </div>
  );
}

export default function SalaryCalculatorPage() {
  // Meta (from /api/contracts — no salary data)
  const [meta, setMeta] = useState(null);
  const [metaError, setMetaError] = useState(false);

  // Calculator state
  const [contractId, setContractId] = useState('551');
  const [gradeId, setGradeId] = useState(null);
  const [overtimeHours, setOT] = useState(0);
  const [carType, setCar] = useState('none');
  const [insuranceCost, setIns] = useState(0);
  const [vehicleRegFee, setRegFee] = useState(0);
  const [travelAllowance, setTravel] = useState(323);
  const [childrenAges, setChildrenAges] = useState([]);
  const [gender, setGender] = useState('male');
  const [hasDegree, setDeg] = useState(false);
  const [partnerWorks, setPartner] = useState(true);
  const [miluimDays, setMiluim] = useState(0);
  const [companyCar, setCompanyCar] = useState(false);
  const [companyCarGroup, setCompanyCarGroup] = useState(3);
  const [oncallCount, setOncall] = useState(0);
  const [premiumHours, setPremHours] = useState(0);
  const [premiumPct, setPremPct] = useState(25);
  const [recoveryYears, setRecYears] = useState(0);
  const [inclMaonot, setInclMaonot] = useState(true);

  const [toggles, setToggles] = useState({
    includeInsuranceRefund: true,
    includeStudyFund: true,
    includePension: true,
    includeRecovery: true,
    includeClothing: true,
    includeGifts: true,
    inclCibus: true,
    inclPhone: true,
  });

  // Results
  const [result, setResult] = useState(null);
  const [nextResult, setNextResult] = useState(null);
  const [gradeLabel, setGradeLabel] = useState('');
  const [loading, setLoading] = useState(false);
  const [showAnnual, setShowAnnual] = useState(false);
  const [showPayslip, setShowPayslip] = useState(false);

  const debounceRef = useRef(null);

  // Load contract metadata on mount
  useEffect(() => {
    fetch('/api/contracts')
      .then(r => r.json())
      .then(data => {
        setMeta(data);
        // Set initial grade
        const grades = data.contracts['551']?.grades;
        if (grades) {
          setGradeId(grades[Math.floor(grades.length / 3)]?.id || grades[0]?.id);
        }
      })
      .catch(() => setMetaError(true));
  }, []);

  // Reset grade when contract changes
  useEffect(() => {
    if (!meta) return;
    const grades = meta.contracts[contractId]?.grades;
    if (grades && grades.length > 0) {
      setGradeId(grades[Math.floor(grades.length / 3)]?.id || grades[0]?.id);
      setOncall(0);
    }
  }, [contractId, meta]);

  // Calculate — debounced 300ms
  const calculate = useCallback(() => {
    if (!gradeId || !meta) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      setLoading(true);
      try {
        const body = {
          contractId, gradeId,
          overtimeHours, carType, childrenAges,
          gender, hasDegree, partnerWorks, miluimDays,
          insuranceCost, vehicleRegFee, travelAllowance,
          companyCar, companyCarGroup,
          oncallCount, premiumHours, premiumPct,
          recoveryYears, inclMaonot,
          ...toggles,
        };
        const res = await fetch('/api/calculate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        if (!res.ok) throw new Error('Calculate failed');
        const data = await res.json();
        setResult(data.result);
        setNextResult(data.nextGradeResult);
        setGradeLabel(data.gradeLabel || gradeId);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 300);
  }, [
    contractId, gradeId, overtimeHours, carType, childrenAges,
    gender, hasDegree, partnerWorks, miluimDays,
    insuranceCost, vehicleRegFee, travelAllowance,
    companyCar, companyCarGroup,
    oncallCount, premiumHours, premiumPct,
    recoveryYears, inclMaonot, toggles, meta,
  ]);

  useEffect(() => { calculate(); }, [calculate]);

  if (metaError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">⚠️</div>
          <div className="text-xl font-bold text-red-600 mb-2">שגיאה בטעינת הנתונים</div>
          <button onClick={() => window.location.reload()} className="px-4 py-2 bg-blue-600 text-white rounded-lg">נסה שנית</button>
        </div>
      </div>
    );
  }

  if (!meta) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <div className="text-slate-600">טוען נתונים...</div>
        </div>
      </div>
    );
  }

  const contract = meta.contracts[contractId];
  const entitlements = meta.entitlements[contractId] || { overtime: true, oncall: true, personalGrade: true, choiceOption: true };
  const grades = contract?.grades || [];
  const cp = CAR_PACKAGES_META[carType];

  const sliderStyle = (val, max, color) => ({
    background: `linear-gradient(to left, ${color} 0%, ${color} ${(val / max) * 100}%, #e2e8f0 ${(val / max) * 100}%, #e2e8f0 100%)`,
  });

  const childrenUnder5Count = childrenAges.filter(e => e.age <= 4).reduce((s, e) => s + (e.count || 1), 0);

  return (
    <div className="min-h-screen p-3 md:p-6 pb-20 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* ── Header ── */}
        <header className="text-center pt-6 pb-2">
          <div className={`inline-flex items-center justify-center p-4 bg-gradient-to-br ${contract?.color || 'from-blue-600 to-indigo-700'} rounded-3xl shadow-2xl mb-5 transition-all duration-500`}>
            <Ico.Calc c="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
            סימולטור שכר — חוזים אישיים בשירות המדינה
          </h1>
          <p className="text-slate-500 text-base mb-3">
            עדכני לשנת 2025 • מעודכן למדד 2025 • חישוב מלא כולל ניכויים, מס ותנאים סוציאליים
          </p>
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-2 mb-4 text-sm text-amber-800">
            <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            </svg>
            <span>הסימולטור <strong>אינו כולל</strong> שינויים זמניים בשכר בעקבות המלחמה</span>
          </div>
          <div className="max-w-2xl mx-auto bg-white/60 backdrop-blur-sm border border-slate-200 rounded-2xl px-6 py-4 mb-4 text-right shadow-sm">
            <p className="text-sm text-slate-600 leading-relaxed">
              סימולטור זה נועד <strong className="text-slate-800">לפשט ולהנגיש את עולם השכר בשירות הציבורי</strong> — מגוון הדירוגים, הרכיבים והניכויים יכול להיות מורכב ובלתי שקוף. כאן תוכלו לקבל תמונה ברורה ומהירה של השכר נטו, ערך התפקיד הכלכלי והשוואה בין דירוגים — הכל במקום אחד, בצורה פשוטה וזמינה לכולם.
            </p>
          </div>
          <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
            <span className="flex items-center gap-1"><Ico.Check c="w-4 h-4 text-emerald-500" />כולל נקודות זיכוי</span>
            <span className="flex items-center gap-1"><Ico.Shield c="w-4 h-4 text-blue-500" />מילואים</span>
            <span className="flex items-center gap-1"><Ico.Zap c="w-4 h-4 text-amber-500" />חישוב בזמן אמת</span>
          </div>
        </header>

        {/* ── Contract Selector ── */}
        <Card className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className={`p-2 bg-gradient-to-br ${contract?.color || 'from-blue-600 to-indigo-700'} rounded-lg transition-all duration-300`}>
              <Ico.Brief c="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-slate-800 text-lg">בחר חוזה / דירוג</span>
            <span className="mr-auto text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-full">
              {Object.keys(meta.contracts).length} דירוגים
            </span>
          </div>
          {contract && (
            <div className={`mb-4 p-3 bg-gradient-to-l ${contract.color} rounded-xl text-white flex items-center justify-between`}>
              <div>
                <div className="text-xs opacity-80">נבחר כעת</div>
                <div className="font-bold text-sm">{contract.name}</div>
              </div>
              <div className="text-xl font-extrabold opacity-70">#{contract.number}</div>
            </div>
          )}
          <ContractSelector
            contracts={meta.contracts}
            groups={meta.groups}
            contractId={contractId}
            setContractId={setContractId}
          />
        </Card>

        {/* ── Main Form Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* ── LEFT COLUMN — פרטי העסקה ── */}
          <div className="lg:col-span-5 space-y-5">

            {/* Grade Selector */}
            <Card className="p-6">
              <SectionTitle icon={Ico.Brief} title="פרטי העסקה" subtitle="חוזה, דרגה ושעות עבודה" />
              <div className="mb-4">
                <label className="text-sm font-semibold text-slate-700 mb-2 block">דרגה</label>
                <div className="relative">
                  <select
                    value={gradeId || ''}
                    onChange={e => setGradeId(e.target.value)}
                    className="w-full appearance-none bg-gradient-to-l from-slate-50 to-blue-50 border-2 border-slate-200 text-slate-800 py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-semibold transition-all hover:border-blue-300"
                  >
                    {grades.map(g => (
                      <option key={g.id} value={g.id}>{g.label}{g.salary ? ` — ${Math.round(g.salary).toLocaleString('he-IL')} ₪` : ''}</option>
                    ))}
                  </select>
                  <div className="absolute left-4 top-3.5 pointer-events-none text-slate-400">▾</div>
                </div>
              </div>

              {/* Next grade comparison */}
              {nextResult && result && (
                <div className="mb-4 bg-gradient-to-l from-emerald-50 to-teal-50 rounded-xl border border-emerald-200 p-3">
                  <div className="text-xs font-bold text-emerald-800 mb-1">השוואה לדרגה הבאה</div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">תוספת נטו:</span>
                    <span className="font-bold text-emerald-700">
                      +{Math.round(nextResult.netSalary - result.netSalary).toLocaleString('he-IL')} ₪/חודש
                    </span>
                  </div>
                </div>
              )}

              {/* Entitlements badges */}
              <div className="mb-4 p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">זכאויות דירוג {contractId}</div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { key: 'overtime', label: 'שעות נוספות', icon: '⏱' },
                    { key: 'oncall', label: 'כוננויות', icon: '📟' },
                    { key: 'personalGrade', label: 'דרגה אישית', icon: '⭐' },
                    { key: 'choiceOption', label: 'אפשרות בחירה', icon: '🔀' },
                  ].map(({ key, label, icon }) => (
                    <span key={key} className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border ${
                      entitlements[key]
                        ? 'bg-green-50 border-green-200 text-green-700'
                        : 'bg-red-50 border-red-200 text-red-500 line-through opacity-60'
                    }`}>
                      {icon} {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Overtime */}
              {entitlements.overtime ? (
                <div>
                  <label className="text-sm font-semibold text-slate-700 mb-1 block">שעות נוספות בחודש</label>
                  {result && (
                    <p className="text-xs text-slate-500 mb-2">
                      שכר שעה: <strong>{result.hourlyRate?.toFixed(2)} ₪</strong>
                      <span className="mr-1 opacity-60">(שכר בסיס ÷ 173.33 שעות/חודש)</span>
                    </p>
                  )}
                  <div className="flex items-center gap-3 mb-2">
                    <input type="range" min="0" max="60" value={overtimeHours}
                      onChange={e => setOT(Number(e.target.value))}
                      className="flex-1 h-3 rounded-full appearance-none cursor-pointer"
                      style={sliderStyle(overtimeHours, 60, '#f59e0b')} />
                    <span className="w-16 text-center font-mono bg-gradient-to-br from-amber-500 to-orange-500 text-white py-2 px-2 rounded-xl font-bold text-lg shadow">
                      {overtimeHours}
                    </span>
                  </div>
                  {overtimeHours > 0 && result && (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm space-y-1">
                      <div className="flex justify-between">
                        <span className="text-slate-600">{result.ot125h?.toFixed(1)} שעות ב-125%:</span>
                        <span className="font-bold text-amber-700">+{Math.round(result.hourlyRate * 1.25 * result.ot125h).toLocaleString('he-IL')} ₪</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">{result.ot150h?.toFixed(1)} שעות ב-150%:</span>
                        <span className="font-bold text-amber-700">+{Math.round(result.hourlyRate * 1.5 * result.ot150h).toLocaleString('he-IL')} ₪</span>
                      </div>
                      <div className="flex justify-between pt-1 border-t border-amber-200 font-semibold">
                        <span>סה״כ תוספת:</span>
                        <span className="text-amber-700">+{Math.round(result.overtimePay).toLocaleString('he-IL')} ₪</span>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl p-4 text-center text-slate-400 text-sm">
                  🚫 דירוג זה אינו זכאי לגמול שעות נוספות
                </div>
              )}
            </Card>

            {/* Oncall & Premium */}
            {entitlements.oncall && (
              <Card className="p-6">
                <SectionTitle icon={Ico.Zap} title="כוננויות ופרמיה" subtitle="תשלומים מיוחדים" />
                <div className="mb-4">
                  <label className="text-sm font-semibold text-slate-700 mb-1 block">מספר כוננויות בחודש</label>
                  <div className="flex items-center gap-3">
                    <input type="range" min="0" max="30" value={oncallCount}
                      onChange={e => setOncall(Number(e.target.value))}
                      className="flex-1 h-3 rounded-full appearance-none cursor-pointer"
                      style={sliderStyle(oncallCount, 30, '#8b5cf6')} />
                    <span className="w-16 text-center font-mono bg-gradient-to-br from-violet-500 to-purple-600 text-white py-2 px-2 rounded-xl font-bold text-lg shadow">
                      {oncallCount}
                    </span>
                  </div>
                  {oncallCount > 0 && result && (
                    <div className="mt-2 bg-violet-50 border border-violet-200 rounded-lg p-2 text-sm flex justify-between">
                      <span className="text-slate-600">תשלום כוננויות:</span>
                      <span className="font-bold text-violet-700">+{Math.round(result.oncallPay).toLocaleString('he-IL')} ₪</span>
                    </div>
                  )}
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-700 mb-2 block">פרמיה</label>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-slate-500 mb-1 block">שעות פרמיה</label>
                      <input type="number" min="0" max="200" value={premiumHours}
                        onChange={e => setPremHours(Number(e.target.value))}
                        className="w-full border-2 border-slate-200 rounded-xl px-3 py-2 text-center font-bold focus:ring-2 focus:ring-purple-500" />
                    </div>
                    <div>
                      <label className="text-xs text-slate-500 mb-1 block">אחוז פרמיה (%)</label>
                      <input type="number" min="0" max="100" value={premiumPct}
                        onChange={e => setPremPct(Number(e.target.value))}
                        className="w-full border-2 border-slate-200 rounded-xl px-3 py-2 text-center font-bold focus:ring-2 focus:ring-purple-500" />
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {/* Seniority */}
            <Card className="p-6">
              <SectionTitle icon={Ico.Coin} title="ותק והבראה" subtitle="חישוב ימי הבראה לפי שנות ותק" />
              <label className="text-sm font-semibold text-slate-700 mb-1 block">שנות ותק</label>
              <div className="flex items-center gap-3 mb-2">
                <input type="range" min="0" max="25" value={recoveryYears}
                  onChange={e => setRecYears(Number(e.target.value))}
                  className="flex-1 h-3 rounded-full appearance-none cursor-pointer"
                  style={sliderStyle(recoveryYears, 25, '#f59e0b')} />
                <span className="w-16 text-center font-mono bg-gradient-to-br from-amber-500 to-orange-500 text-white py-2 px-2 rounded-xl font-bold text-lg shadow">
                  {recoveryYears}
                </span>
              </div>
              {result && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm flex justify-between">
                  <span className="text-slate-600">{result.recoveryDays} ימי הבראה × 374 ₪:</span>
                  <span className="font-bold text-amber-700">{Math.round(result.recoveryPay).toLocaleString()} ₪/חודש</span>
                </div>
              )}
            </Card>
          </div>

          {/* ── RIGHT COLUMN — פרטים נוספים ── */}
          <div className="lg:col-span-7 space-y-5">

            {/* Vehicle */}
            <Card className="p-6">
              <SectionTitle icon={Ico.Car} title="רכב ונסיעות" subtitle="חבילת ניידות ורכב שירות" />
              <label className="text-sm font-semibold text-slate-700 mb-2 block">סוג זכאות לרכב</label>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {Object.entries(CAR_PACKAGES_META).map(([k, p]) => (
                  <button key={k} onClick={() => setCar(k)}
                    className={`p-2.5 rounded-xl border-2 text-right transition-all ${
                      carType === k
                        ? 'bg-gradient-to-br from-amber-500 to-orange-600 text-white border-transparent shadow-md'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-amber-300 hover:bg-amber-50'
                    }`}>
                    <div className={`text-xs font-bold ${carType === k ? 'text-white' : 'text-slate-800'}`}>{p.label}</div>
                    {p.isCar && (
                      <div className={`text-xs mt-0.5 ${carType === k ? 'opacity-80' : 'text-slate-500'}`}>
                        חבילה: {p.value.toLocaleString()} ₪/חודש
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Travel allowance */}
              <div className="mb-4">
                <label className="text-sm font-semibold text-slate-700 mb-2 block">קצובת נסיעה חודשית</label>
                <div className="grid grid-cols-3 gap-2">
                  {[{ val: 684, label: 'מרחוק', sub: '684 ₪' }, { val: 464, label: 'בינוני', sub: '464 ₪' }, { val: 323, label: 'מינימום', sub: '323 ₪' }].map(opt => (
                    <button key={opt.val} onClick={() => setTravel(opt.val)}
                      className={`p-2.5 rounded-xl border-2 text-center transition-all ${
                        travelAllowance === opt.val
                          ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white border-transparent shadow-md'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50'
                      }`}>
                      <div className={`text-xs font-bold ${travelAllowance === opt.val ? 'text-white' : 'text-slate-800'}`}>{opt.label}</div>
                      <div className={`text-xs mt-0.5 font-semibold ${travelAllowance === opt.val ? 'opacity-80' : 'text-slate-500'}`}>{opt.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Company car */}
              <div className="mb-4 border-2 border-slate-200 rounded-xl overflow-hidden">
                <label className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-slate-50 transition-all">
                  <div
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${companyCar ? 'bg-gradient-to-br from-slate-700 to-gray-800 border-slate-700' : 'border-slate-300 bg-white'}`}
                    onClick={() => setCompanyCar(!companyCar)}>
                    {companyCar && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-slate-800">רכב צמוד</div>
                    <div className="text-xs text-slate-500">לבכירים בלבד — זקיפת הטבה נוספת לברוטו</div>
                  </div>
                </label>
                {companyCar && (
                  <div className="px-4 pb-4 bg-slate-50 border-t border-slate-200">
                    <div className="text-xs font-semibold text-slate-600 mb-2 mt-3">קבוצת רכב צמוד:</div>
                    <div className="grid grid-cols-3 gap-2">
                      {[{ g: 3, label: 'קבוצה 3', imputation: 4390 }, { g: 4, label: 'קבוצה 4', imputation: 5260 }, { g: 5, label: 'קבוצה 5', imputation: 7280 }].map(opt => (
                        <button key={opt.g} onClick={() => setCompanyCarGroup(opt.g)}
                          className={`p-2.5 rounded-xl border-2 text-center transition-all ${
                            companyCarGroup === opt.g
                              ? 'bg-gradient-to-br from-slate-700 to-gray-800 text-white border-transparent shadow-md'
                              : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                          }`}>
                          <div className={`text-xs font-bold ${companyCarGroup === opt.g ? 'text-white' : 'text-slate-800'}`}>{opt.label}</div>
                          <div className={`text-xs mt-0.5 ${companyCarGroup === opt.g ? 'opacity-75' : 'text-slate-500'}`}>{opt.imputation.toLocaleString()} ₪</div>
                        </button>
                      ))}
                    </div>
                    {result && (
                      <div className="mt-3 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-xs text-amber-800">
                        <span className="font-semibold">זקיפת הטבה: {result.companyCarImputation?.toLocaleString()} ₪/חודש</span> — נוספת לברוטו לצורך חישוב מס ובטל״א
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Insurance & Registration */}
              {cp.isCar && (
                <div className="space-y-3">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border-2 border-blue-200">
                    <label className="text-sm font-semibold text-slate-700 mb-1 block">עלות ביטוח שנתית</label>
                    <p className="text-xs text-slate-500 mb-2">מקיף + חובה — תקרת החזר: 7,000 ₪</p>
                    <input type="number" min="0" max="7000" value={insuranceCost}
                      onChange={e => setIns(Math.min(Number(e.target.value), 7000))}
                      className="w-full bg-white border-2 border-blue-300 text-slate-800 py-2.5 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold" />
                    {result && (
                      <div className="flex justify-between items-center mt-2 text-xs text-blue-800 bg-blue-100 rounded-lg px-3 py-1.5">
                        <span>החזר חודשי:</span>
                        <span className="font-bold">{Math.round(result.insuranceRefundMonthly).toLocaleString()} ₪</span>
                      </div>
                    )}
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-4 rounded-xl border-2 border-purple-200">
                    <label className="text-sm font-semibold text-slate-700 mb-1 block">אגרת רישוי רכב</label>
                    <p className="text-xs text-slate-500 mb-2">תקרת החזר: 2,326 ₪ לשנה</p>
                    <input type="number" min="0" max="2326" value={vehicleRegFee}
                      onChange={e => setRegFee(Math.min(Number(e.target.value), 2326))}
                      className="w-full bg-white border-2 border-purple-300 text-slate-800 py-2.5 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 font-semibold" />
                    {result && (
                      <div className="flex justify-between items-center mt-2 text-xs text-purple-800 bg-purple-100 rounded-lg px-3 py-1.5">
                        <span>החזר חודשי:</span>
                        <span className="font-bold">{Math.round(result.regFeeRefundMonthly).toLocaleString()} ₪</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </Card>

            {/* Family & Tax Credits */}
            <Card className="p-6">
              <SectionTitle icon={Ico.Baby} title="משפחה ונקודות זיכוי" subtitle="הטבות משפחתיות ומס" />

              {/* Gender */}
              <div className="mb-4">
                <label className="text-sm font-semibold text-slate-700 mb-2 block">מגדר (לצורך נקודות זיכוי)</label>
                <div className="grid grid-cols-2 gap-3">
                  {[{ v: 'male', label: "גבר (2.25 נק׳)", grad: 'from-blue-500 to-indigo-600' },
                    { v: 'female', label: "אישה (2.75 נק׳)", grad: 'from-pink-500 to-rose-600' }
                  ].map(g => (
                    <label key={g.v} className={`flex items-center justify-center p-3 rounded-xl cursor-pointer border-2 transition-all ${
                      gender === g.v ? `bg-gradient-to-br ${g.grad} text-white border-transparent shadow-lg` : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-blue-300'
                    }`}>
                      <input type="radio" name="gender" value={g.v} checked={gender === g.v} onChange={() => setGender(g.v)} className="hidden" />
                      <span className="font-semibold text-sm">{g.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Miluim */}
              <div className="mb-4">
                <label className="text-sm font-semibold text-slate-700 mb-1 block">ימי מילואים בשנה (2025)</label>
                <p className="text-xs text-slate-500 mb-2">נקודות זיכוי מיוחדות ללוחמי מילואים</p>
                <div className="flex items-center gap-3 mb-2">
                  <input type="range" min="0" max="120" step="5" value={miluimDays}
                    onChange={e => setMiluim(Number(e.target.value))}
                    className="flex-1 h-3 rounded-full appearance-none cursor-pointer"
                    style={sliderStyle(miluimDays, 120, '#10b981')} />
                  <span className="w-16 text-center font-mono bg-gradient-to-br from-emerald-600 to-teal-600 text-white py-2 px-2 rounded-xl font-bold text-lg shadow">
                    {miluimDays}
                  </span>
                </div>
                {result && miluimDays >= 30 && (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-700 font-medium">נקודות זיכוי מילואים:</span>
                      <span className="font-bold text-emerald-700">{result.miluimPoints} נק׳</span>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-slate-600 text-xs">הפחתת מס חודשית:</span>
                      <span className="font-bold text-emerald-600">{Math.round(result.miluimPoints * 250).toLocaleString()} ₪</span>
                    </div>
                  </div>
                )}
                {miluimDays > 0 && miluimDays < 30 && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-700">
                    נדרשים לפחות 30 ימי מילואים לזכאות לנקודות זיכוי
                  </div>
                )}
              </div>

              {/* Children */}
              <ChildrenInput childrenAges={childrenAges} setChildrenAges={setChildrenAges} gender={gender} />

              {/* Partner & Degree */}
              <div className="space-y-3 mb-4">
                <label className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer border-2 transition-all ${partnerWorks ? 'bg-gradient-to-l from-blue-50 to-indigo-50 border-blue-300' : 'bg-slate-50 border-slate-200 hover:border-blue-200'}`}>
                  <input type="checkbox" checked={partnerWorks} onChange={e => setPartner(e.target.checked)} className="w-5 h-5 text-blue-600 rounded" />
                  <div className="flex-1">
                    <span className="font-semibold text-slate-800">בן/בת זוג עובד/ת</span>
                    {childrenUnder5Count > 0 && (
                      <div className="mt-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" checked={inclMaonot} onChange={e => setInclMaonot(e.target.checked)} className="w-4 h-4 text-blue-600 rounded" />
                          <span className="text-sm text-slate-700">
                            קצובת מעונות
                            <span className="text-blue-600 font-semibold mr-1">+{Math.min(childrenUnder5Count, 2) * 330} ₪/חודש</span>
                            <span className="text-slate-400 text-xs">(עד 2 ילדים עד גיל 4)</span>
                          </span>
                        </label>
                      </div>
                    )}
                  </div>
                </label>
                <label className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer border-2 transition-all ${hasDegree ? 'bg-gradient-to-l from-purple-50 to-pink-50 border-purple-300' : 'bg-slate-50 border-slate-200 hover:border-purple-200'}`}>
                  <input type="checkbox" checked={hasDegree} onChange={e => setDeg(e.target.checked)} className="w-5 h-5 text-purple-600 rounded" />
                  <span className="font-semibold text-slate-800">תואר אקדמי (נקודת זיכוי נוספת)</span>
                </label>
              </div>

              {/* Points summary */}
              {result && (
                <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border-2 border-emerald-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-slate-700">סה״כ נקודות זיכוי</span>
                    <span className="text-2xl font-bold text-emerald-700">{result.points?.toFixed(2)}</span>
                  </div>
                  <div className="text-xs text-slate-600">
                    ערך: {Math.round(result.taxCreditValue).toLocaleString()} ₪ | חסכון במס חודשי
                  </div>
                </div>
              )}
            </Card>

          </div>
        </div>

        {/* Loading indicator */}
        {loading && (
          <div className="flex justify-center py-8">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* ── Results Section ── */}
        {result && contract && (
          <div className="space-y-5">

            {/* פירוט הכנסה והניכויים */}
            <ResultsPanel
              result={result}
              contract={contract}
              showAnnual={showAnnual}
              setShowAnnual={setShowAnnual}
            />

            {/* שווי כלכלי */}
            <Card className="p-6">
              <SectionTitle icon={Ico.Coin} title="שווי כלכלי כולל" subtitle="בחר אילו הטבות לכלול בחישוב" />
              <BenefitToggles
                result={result}
                toggles={toggles}
                setToggles={setToggles}
                hasCar={cp.isCar}
              />
              <div className="mt-4 p-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl text-white">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">שווי כלכלי חודשי כולל</span>
                  <span className="text-3xl font-extrabold">{Math.round(result.totalEconomicValue).toLocaleString('he-IL')} ₪</span>
                </div>
                <div className="text-sm opacity-80 mt-1">שנתי: {Math.round(result.totalEconomicValue * 12).toLocaleString('he-IL')} ₪</div>
              </div>
            </Card>

            {/* תלוש שכר מדומה */}
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">תלוש שכר מדומה</h3>
                  <p className="text-sm text-slate-500">סימולציה של תלוש שכר מלא לפי נתוני האוצר</p>
                </div>
                <button
                  onClick={() => setShowPayslip(true)}
                  className={`px-5 py-2.5 bg-gradient-to-br ${contract?.color || 'from-blue-600 to-indigo-700'} text-white rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all hover:scale-105`}
                >
                  <Ico.File c="w-4 h-4 inline ml-2" />
                  צפה בתלוש
                </button>
              </div>
            </Card>

          </div>
        )}

        {/* Footer */}
        <footer className="border-t border-slate-200 mt-8 pt-10 pb-8" id="contact-anchor">
          <div className={`bg-gradient-to-br ${contract?.color || 'from-blue-600 to-indigo-700'} rounded-3xl p-8 text-white mb-6 shadow-2xl`}>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-2xl mb-3">
                  <Ico.Calc c="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl font-extrabold mb-1">סימולטור שכר — חוזים אישיים בשירות המדינה</h2>
                <p className="text-sm opacity-80">עדכני לשנת 2025 • מעודכן למדד 2025</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <a href="mailto:yehoda.sadaay@gmail.com"
                  className="flex items-center gap-3 bg-white/15 hover:bg-white/25 rounded-2xl p-4 transition-all">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs opacity-70 font-medium">אימייל</div>
                    <div className="text-sm font-bold">yehoda.sadaay@gmail.com</div>
                  </div>
                </a>
                <a href="tel:0506202972"
                  className="flex items-center gap-3 bg-white/15 hover:bg-white/25 rounded-2xl p-4 transition-all">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs opacity-70 font-medium">טלפון</div>
                    <div className="text-sm font-bold">050-620-2972</div>
                  </div>
                </a>
                <a href="https://linkedin.com/in/יהודה-סעדיה-628161214" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/15 hover:bg-white/25 rounded-2xl p-4 transition-all">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs opacity-70 font-medium">לינקדין</div>
                    <div className="text-sm font-bold">יהודה סעדיה</div>
                  </div>
                </a>
              </div>
              <div className="text-center text-xs opacity-60 border-t border-white/20 pt-4">
                © 2025 יהודה סעדיה — כל הזכויות שמורות | הנתונים מבוססים על נתוני האוצר לשנת 2025
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Sticky contact bar */}
      <StickyContactBar contractColor={contract?.color} />

      {/* Payslip modal */}
      {showPayslip && result && (
        <PayslipModal
          onClose={() => setShowPayslip(false)}
          result={result}
          contract={contract}
          gradeLabel={gradeLabel}
          toggles={toggles}
        />
      )}
    </div>
  );
}

'use client';

import LeadCard from './LeadCard';

const fmt = (n) => Math.round(n).toLocaleString('he-IL');
const fmtF = (n) => n.toFixed(2);

const ResultRow = ({ label, value, isNeg = false, highlight = false, subValue = null }) => (
  <div className={`flex justify-between items-center py-2.5 px-3 rounded-lg transition-all ${
    highlight
      ? 'bg-gradient-to-l from-blue-50 to-transparent border-r-4 border-blue-500 font-semibold'
      : 'hover:bg-slate-50'
  }`}>
    <div>
      <span className={`${highlight ? 'font-bold text-slate-800' : 'text-slate-600'} text-sm`}>{label}</span>
      {subValue && <div className="text-xs text-slate-400 mt-0.5">{subValue}</div>}
    </div>
    <span className={`font-bold font-mono text-base ${isNeg ? 'text-red-600' : highlight ? 'text-blue-700' : 'text-slate-800'}`}>
      {isNeg ? '−' : ''}{Math.round(Math.abs(value)).toLocaleString('he-IL')} ₪
    </span>
  </div>
);

export default function ResultsPanel({ result, contract, showAnnual, setShowAnnual, leadType, leadMeta }) {
  if (!result) return null;

  const R = result;

  return (
    <div className="space-y-4">
      {/* Top stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className={`bg-gradient-to-br ${contract.color} rounded-2xl p-5 text-white shadow-lg relative overflow-hidden`}>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span className="text-sm opacity-90">נטו חודשי</span>
            </div>
            <div className="text-4xl font-extrabold">{Math.round(R.netSalary).toLocaleString('he-IL')} ₪</div>
            <div className="text-xs opacity-70 mt-1 bg-white/20 inline-block px-2 py-1 rounded-lg">נכנס לחשבון ב-1 לחודש</div>
          </div>
        </div>

        <div
          className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-5 text-white shadow-lg cursor-pointer hover:scale-105 transition-transform"
          onClick={() => setShowAnnual(!showAnnual)}
        >
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-sm opacity-90">{showAnnual ? 'נטו שנתי' : 'שווי כלכלי כולל'}</span>
            </div>
            <div className="text-4xl font-extrabold">
              {Math.round(showAnnual ? R.netSalary * 12 : R.totalEconomicValue).toLocaleString('he-IL')} ₪
            </div>
            <div className="text-xs opacity-70 mt-1 bg-white/20 inline-block px-2 py-1 rounded-lg">
              {showAnnual ? '12 חודשים' : 'לחץ לסיכום שנתי'}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-5 text-white shadow-lg">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm opacity-90">ברוטו חודשי</span>
            </div>
            <div className="text-4xl font-extrabold">{Math.round(R.totalGross).toLocaleString('he-IL')} ₪</div>
            <div className="text-xs opacity-70 mt-1 bg-white/20 inline-block px-2 py-1 rounded-lg">לפני ניכויים ומסים</div>
          </div>
        </div>
      </div>

      {/* Detailed breakdown */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          פירוט הכנסה והניכויים
        </h3>

        <div className="space-y-1">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wide px-3 mb-1">הכנסות</div>
          <ResultRow label="שכר יסוד" value={R.baseSalary} highlight />
          {R.overtimePay > 0 && (
            <ResultRow label="שעות נוספות" value={R.overtimePay}
              subValue={`${R.ot125h.toFixed(1)} שע׳ ב-125% + ${R.ot150h.toFixed(1)} שע׳ ב-150%`} />
          )}
          {R.oncallPay > 0 && <ResultRow label="כוננויות" value={R.oncallPay} />}
          {R.premiumPay > 0 && <ResultRow label="פרמיה" value={R.premiumPay} />}
          {R.carGross > 0 && <ResultRow label="רכב ונסיעות" value={R.carGross} subValue={`קצובת נסיעה: ${R.travelAllowance} ₪`} />}
          {R.maonotPay > 0 && <ResultRow label="קצובת מעונות" value={R.maonotPay} />}
          {R.companyCarImputation > 0 && <ResultRow label="זקיפת הטבת רכב צמוד" value={R.companyCarImputation} />}

          <div className="border-t border-slate-200 mt-2 pt-2">
            <ResultRow label="ברוטו לחישוב" value={R.totalGross} highlight />
          </div>

          <div className="text-xs font-bold text-slate-500 uppercase tracking-wide px-3 mt-4 mb-1">ניכויים</div>
          <ResultRow label="מס הכנסה" value={R.incomeTax} isNeg
            subValue={`${R.points.toFixed(2)} נקודות זיכוי × 250 ₪ = ${Math.round(R.taxCreditValue).toLocaleString()} ₪`} />
          {leadType === 'tax_refund' && <LeadCard offerType="tax_refund" leadMeta={leadMeta} />}
          <ResultRow label="ביטוח לאומי + בריאות" value={R.socialSecurity} isNeg />
          <ResultRow label={`פנסיה עובד (${(contract.pensionEmployee * 100).toFixed(0)}%)`} value={R.pensionDed} isNeg />
          {leadType === 'pension_review' && <LeadCard offerType="pension_review" leadMeta={leadMeta} />}
          <ResultRow label={`קרן השתלמות (${(contract.studyFundEmployee * 100).toFixed(1)}%)`} value={R.studyFundDed} isNeg />
          {leadType === 'study_fund' && <LeadCard offerType="study_fund" leadMeta={leadMeta} />}
          <ResultRow label="דמי ארגון" value={R.unionDues} isNeg />

          <div className="border-t border-slate-200 mt-2 pt-2">
            <ResultRow label="סה״כ ניכויים" value={R.totalDeductions} isNeg highlight />
          </div>

          <div className="border-t-2 border-emerald-300 mt-3 pt-3">
            <ResultRow label="שכר נטו לתשלום" value={R.netSalary} highlight />
          </div>
        </div>

        {/* Employer contributions */}
        <div className="mt-6 pt-4 border-t border-slate-100">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">הפרשות מעסיק (אינן מנוכות)</div>
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-blue-50 rounded-lg p-2.5 text-center">
              <div className="text-xs text-blue-600 font-semibold mb-1">פנסיה מעסיק</div>
              <div className="text-base font-bold text-blue-800">{fmt(R.pensionEmployer)} ₪</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-2.5 text-center">
              <div className="text-xs text-purple-600 font-semibold mb-1">קה״ש מעסיק</div>
              <div className="text-base font-bold text-purple-800">{fmt(R.studyFundEmployer)} ₪</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-2.5 text-center">
              <div className="text-xs text-orange-600 font-semibold mb-1">פיצויים (8.33%)</div>
              <div className="text-base font-bold text-orange-800">{fmt(R.pensionableSalary * 0.0833)} ₪</div>
            </div>
          </div>
          {R.pensionEmployer > 0 && <LeadCard offerType="pension_review" leadMeta={leadMeta} />}
        </div>
      </div>

      {/* ── Annual Summary ── */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
        <h3 className="text-lg font-bold text-slate-800 mb-5 flex items-center gap-2">
          <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          סיכום שנתי
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Income */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">הכנסות שנתיות</div>
            <div className="flex justify-between items-center bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3">
              <span className="text-sm font-semibold text-slate-700">שכר נטו שנתי</span>
              <span className="font-extrabold text-emerald-700 text-base">{fmt(R.netSalary * 12)} ₪</span>
            </div>
            <div className="flex justify-between items-center bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
              <span className="text-sm font-semibold text-slate-700">שכר ברוטו שנתי</span>
              <span className="font-bold text-slate-800 text-base">{fmt(R.totalGross * 12)} ₪</span>
            </div>
            <div className="flex justify-between items-center bg-blue-50 border border-blue-200 rounded-xl px-4 py-3">
              <span className="text-sm font-semibold text-slate-700">ערך כלכלי שנתי</span>
              <span className="font-bold text-blue-700 text-base">{fmt(R.totalEconomicValue * 12)} ₪</span>
            </div>
          </div>

          {/* Deductions */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">ניכויים והפקדות שנתיות</div>
            <div className="flex justify-between items-center bg-red-50 border border-red-200 rounded-xl px-4 py-3">
              <span className="text-sm font-semibold text-slate-700">מס הכנסה שנתי</span>
              <span className="font-bold text-red-600 text-base">−{fmt(R.incomeTax * 12)} ₪</span>
            </div>
            <div className="flex justify-between items-center bg-red-50 border border-red-200 rounded-xl px-4 py-3">
              <span className="text-sm font-semibold text-slate-700">ביטוח לאומי שנתי</span>
              <span className="font-bold text-red-600 text-base">−{fmt(R.socialSecurity * 12)} ₪</span>
            </div>
            <div className="flex justify-between items-center bg-blue-50 border border-blue-200 rounded-xl px-4 py-3">
              <span className="text-sm font-semibold text-slate-700">הפקדה לפנסיה (עובד)</span>
              <span className="font-bold text-blue-700 text-base">{fmt(R.pensionDed * 12)} ₪</span>
            </div>
            <div className="flex justify-between items-center bg-purple-50 border border-purple-200 rounded-xl px-4 py-3">
              <span className="text-sm font-semibold text-slate-700">הפקדה לקרן השתלמות (עובד)</span>
              <span className="font-bold text-purple-700 text-base">{fmt(R.studyFundDed * 12)} ₪</span>
            </div>
          </div>
        </div>

        {/* Employer annual */}
        <div className="mt-4 pt-4 border-t border-slate-100">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-3">הפרשות מעסיק שנתיות</div>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-center">
              <div className="text-xs text-blue-600 font-semibold mb-1">פנסיה מעסיק</div>
              <div className="font-extrabold text-blue-800 text-sm">{fmt(R.pensionEmployer * 12)} ₪</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 text-center">
              <div className="text-xs text-purple-600 font-semibold mb-1">קה״ש מעסיק</div>
              <div className="font-extrabold text-purple-800 text-sm">{fmt(R.studyFundEmployer * 12)} ₪</div>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-3 text-center">
              <div className="text-xs text-orange-600 font-semibold mb-1">פיצויים (8.33%)</div>
              <div className="font-extrabold text-orange-800 text-sm">{fmt(R.pensionableSalary * 0.0833 * 12)} ₪</div>
            </div>
          </div>
        </div>

        {/* Total cost to employer */}
        <div className="mt-4 p-4 bg-gradient-to-l from-slate-700 to-slate-900 rounded-xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold opacity-80">עלות מעסיק שנתית כוללת</div>
              <div className="text-xs opacity-60 mt-0.5">ברוטו + כל הפרשות מעסיק</div>
            </div>
            <div className="text-2xl font-extrabold">
              {fmt((R.totalGross + R.pensionEmployer + R.studyFundEmployer + R.pensionableSalary * 0.0833) * 12)} ₪
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

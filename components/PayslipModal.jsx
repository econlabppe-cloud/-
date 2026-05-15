'use client';

import { useRef } from 'react';

const fmt = (n) => Math.round(n || 0).toLocaleString('he-IL');
const fmtF = (n) => (n || 0).toFixed(2);

const PR = ({ code, name, qty, rate, total }) => (
  <tr className="border-b border-gray-100 text-xs">
    <td className="py-1 px-2 text-gray-500 font-mono w-12">{code}</td>
    <td className="py-1 px-2 text-gray-700 flex-1">{name}</td>
    <td className="py-1 px-2 text-center text-gray-600 w-16">{qty}</td>
    <td className="py-1 px-2 text-center text-gray-600 w-16">{rate}</td>
    <td className="py-1 px-2 text-left font-bold text-gray-800 w-20">{total}</td>
  </tr>
);

const DR = ({ name, pct, base, total }) => (
  <tr className="border-b border-gray-100 text-xs">
    <td className="py-1 px-2 text-gray-500 w-12" />
    <td className="py-1 px-2 text-gray-700 flex-1">{name}</td>
    <td className="py-1 px-2 text-center text-gray-600 w-14">{pct}%</td>
    <td className="py-1 px-2 text-center text-gray-600 w-20">{base}</td>
    <td className="py-1 px-2 text-left font-bold text-red-700 w-20">−{total}</td>
  </tr>
);

const TH = ({ ch, cls = '' }) => (
  <th className={`py-1 px-2 text-right text-xs font-bold text-gray-500 border-b border-gray-300 ${cls}`}>{ch}</th>
);

const TR = ({ children }) => <tr>{children}</tr>;

export default function PayslipModal({ onClose, result, contract, gradeLabel, toggles }) {
  const psRef = useRef(null);

  if (!result) return null;
  const R = result;

  const hr = R.hourlyRate;
  const MONTHLY_HOURS = 173.33;
  const insRefund = toggles?.includeInsuranceRefund ? R.insuranceRefundMonthly : 0;
  const regRefund = toggles?.includeInsuranceRefund ? R.regFeeRefundMonthly : 0;
  const otTotal = R.overtimePay || 0;

  const handlePrint = () => {
    const style = document.createElement('style');
    style.id = 'print-override';
    style.innerHTML = `
      body > * { display: none !important; }
      #ps-root { display: block !important; position: static !important; overflow: visible !important; background: white !important; height: auto !important; }
      #ps-root .fixed { position: static !important; }
      #ps-root .bg-black\\/70 { background: none !important; position: static !important; }
      .no-print { display: none !important; }
    `;
    document.head.appendChild(style);
    window.print();
    setTimeout(() => {
      const el = document.getElementById('print-override');
      if (el) el.remove();
    }, 1000);
  };

  return (
    <div id="ps-root" className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-2 sm:p-4" onClick={onClose}>
      <div
        className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-y-auto max-h-[95vh]"
        onClick={e => e.stopPropagation()}
        ref={psRef}
      >
        {/* Header */}
        <div className="bg-gradient-to-l from-blue-700 to-indigo-800 text-white px-4 py-3 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-black">תלוש שכר — סימולציה</div>
              <div className="text-xs opacity-80">מחשבון שכר שירות המדינה | עדכני 2025</div>
            </div>
            <button onClick={onClose} className="no-print w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 text-white text-sm flex items-center justify-center">✕</button>
          </div>
        </div>

        {/* Employee info */}
        <div className="px-4 py-2 bg-gray-50 border-b border-gray-200 grid grid-cols-2 gap-2 text-xs">
          <div><span className="text-gray-400">דירוג: </span><span className="font-bold text-gray-700">{contract?.name}</span></div>
          <div><span className="text-gray-400">דרגה: </span><span className="font-bold text-gray-700">{gradeLabel}</span></div>
          <div><span className="text-gray-400">חוזה: </span><span className="font-bold text-gray-700">#{contract?.number}</span></div>
          <div><span className="text-gray-400">חודש: </span><span className="font-bold text-gray-700">מרץ 2025</span></div>
        </div>

        {/* Earnings table */}
        <div className="px-4 pt-3 pb-1">
          <div className="text-xs font-black text-gray-700 border-b-2 border-gray-400 pb-1 mb-1">רכיבי שכר</div>
        </div>
        <table className="w-full mb-3">
          <thead>
            <TR>
              <TH ch="קוד" />
              <TH ch="רכיב" />
              <TH ch="כמות" cls="w-16 text-center" />
              <TH ch="תעריף" cls="w-16 text-center" />
              <TH ch="סכום" cls="w-20 text-left" />
            </TR>
          </thead>
          <tbody>
            <PR code="0200" name="שכר יסוד משולב" qty={fmtF(MONTHLY_HOURS)} rate={fmtF(hr)} total={fmt(R.baseSalary)} />
            {R.overtimePay > 0 && (
              <>
                <PR code="0210" name={`שעות נוספות 125%`} qty={fmtF(R.ot125h)} rate={fmtF(hr * 1.25)} total={fmt(hr * 1.25 * R.ot125h)} />
                <PR code="0211" name={`שעות נוספות 150%`} qty={fmtF(R.ot150h)} rate={fmtF(hr * 1.5)} total={fmt(hr * 1.5 * R.ot150h)} />
              </>
            )}
            {R.oncallPay > 0 && (
              <PR code="0220" name="כוננויות" qty="—" rate="—" total={fmt(R.oncallPay)} />
            )}
            {R.premiumPay > 0 && (
              <PR code="0230" name="פרמיה" qty="—" rate="—" total={fmt(R.premiumPay)} />
            )}
            {R.effectiveTravelPay > 0 && (
              <PR code="0560" name="קצובת נסיעה" qty="—" rate="—" total={fmt(R.effectiveTravelPay)} />
            )}
            {R.carGrossedUp > 0 && (
              <PR code="0565" name={`החזר רכב שירות (מגולם ${Math.round(R.carMarginalRate * 100)}%) — נטו ${fmt(R.carNetValue)} ₪`} qty="—" rate="—" total={fmt(R.carGrossedUp)} />
            )}
            {R.ashalPay > 0 && (
              <PR code="0570" name='אש"ל (ימי עבודה מעל 10 שעות)' qty="—" rate="—" total={fmt(R.ashalPay)} />
            )}
            {R.maonotPay > 0 && (
              <PR code="0580" name="קצובת מעונות" qty="—" rate="—" total={fmt(R.maonotPay)} />
            )}
            {R.mealAllowance > 0 && (
              <PR code="0590" name="דמי כלכלה" qty="—" rate="—" total={fmt(R.mealAllowance)} />
            )}
            {R.companyCarImputationNet > 0 && (
              <PR code="1800"
                name={`זקיפת שווי שימוש ברכב${R.carEcoDiscount > 0 ? ` (הנחה ירוקה ${fmt(R.carEcoDiscount)} ₪)` : ''}`}
                qty="—" rate="—" total={fmt(R.companyCarImputationNet)} />
            )}
          </tbody>
        </table>

        {/* Gross total */}
        <div className="mx-4 mb-3 grid grid-cols-2 gap-2">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-center">
            <div className="text-xs text-blue-700 mb-1 font-bold">
              {R.companyCarImputationNet > 0 ? `ברוטו שכר (מס על ${fmt(R.taxableGross)} ₪)` : 'ברוטו לחישוב'}
            </div>
            <div className="text-2xl font-black text-blue-800">{fmt(R.totalGross)} ₪</div>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-center">
            <div className="text-xs text-red-700 mb-1 font-bold">סה״כ ניכויים</div>
            <div className="text-2xl font-black text-red-700">{fmt(R.totalDeductions)} ₪</div>
          </div>
        </div>
        <div className="mx-4 mb-3">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-center">
            <div className="text-xs text-emerald-700 mb-1 font-bold">נטו לתשלום</div>
            <div className="text-2xl font-black text-emerald-700">{fmt(R.netSalary)} ₪</div>
          </div>
        </div>

        {/* Deductions table */}
        <div className="px-4 pb-1"><div className="text-xs font-black text-gray-700 border-b-2 border-gray-400 pb-1">ניכויים</div></div>
        <table className="w-full mb-3">
          <thead><TR><TH ch="" /><TH ch="רכיב" /><TH ch="%" cls="w-14 text-center" /><TH ch="בסיס" cls="w-20 text-center" /><TH ch="סכום" cls="w-20 text-left" /></TR></thead>
          <tbody>
            <DR name="מס הכנסה" pct="—" base="—" total={fmt(R.incomeTax)} />
            <DR name="ביטוח לאומי + בריאות" pct="—" base="—" total={fmt(R.socialSecurity)} />
            <DR name={`פנסיה עובד (${(contract?.pensionEmployee * 100).toFixed(0)}%)`} pct={(contract?.pensionEmployee * 100).toFixed(0)} base={`${fmt(R.pensionableSalary)} ₪`} total={fmt(R.pensionDed)} />
            <DR name={`קה״ש עובד (${(contract?.studyFundEmployee * 100).toFixed(1)}%)`} pct={(contract?.studyFundEmployee * 100).toFixed(1)} base={`${fmt(R.pensionableSalary)} ₪`} total={fmt(R.studyFundDed)} />
            <DR name="דמי ארגון" pct="—" base="—" total={fmt(R.unionDues)} />
          </tbody>
        </table>

        {/* Employer contributions */}
        <div className="px-4 pb-1"><div className="text-xs font-black text-gray-700 border-b-2 border-gray-400 pb-1">הפרשות מעסיק (אינן מנוכות)</div></div>
        <table className="w-full mb-3">
          <thead><TR><TH ch="" /><TH ch="רכיב" /><TH ch="%" cls="w-14 text-center" /><TH ch="בסיס" cls="w-20 text-center" /><TH ch="סכום" cls="w-20 text-left" /></TR></thead>
          <tbody>
            <DR name={`פנסיה מעסיק (${(contract?.pensionEmployer * 100).toFixed(0)}%)`} pct={(contract?.pensionEmployer * 100).toFixed(0)} base={`${fmt(R.pensionableSalary)} ₪`} total={fmt(R.pensionEmployer)} />
            <DR name="פיצויים (8.33%)" pct="8.33" base={`${fmt(R.pensionableSalary)} ₪`} total={fmt(Math.round(R.pensionableSalary * 0.0833))} />
            <DR name={`קה״ש מעסיק (${(contract?.studyFundEmployer * 100).toFixed(1)}%)`} pct={(contract?.studyFundEmployer * 100).toFixed(1)} base={`${fmt(R.pensionableSalary)} ₪`} total={fmt(R.studyFundEmployer)} />
          </tbody>
        </table>

        {(insRefund > 0 || regRefund > 0) && (
          <div className="mx-4 mb-4">
            <div className="text-xs font-black text-gray-700 border-b border-gray-300 pb-1 mb-2">החזרי הוצאות נוספים</div>
            <div className="grid grid-cols-2 gap-2">
              {insRefund > 0 && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 text-xs">
                  <div className="text-blue-600 font-semibold">החזר ביטוח רכב</div>
                  <div className="text-blue-800 font-black text-base">{fmt(insRefund)} ₪/חודש</div>
                  <div className="text-blue-400">מקס׳ 7,000 ₪/שנה</div>
                </div>
              )}
              {regRefund > 0 && (
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-2 text-xs">
                  <div className="text-purple-600 font-semibold">החזר אגרת רישוי</div>
                  <div className="text-purple-800 font-black text-base">{fmt(regRefund)} ₪/חודש</div>
                  <div className="text-purple-400">מקס׳ 2,326 ₪/שנה</div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mx-4 mb-3 text-center text-xs text-gray-400 border-t border-gray-200 pt-2">
          * תלוש זה הוא <strong>סימולציה בלבד</strong> לצרכי תכנון | מבוסס על נתוני 2024–2025
        </div>

        {/* Actions */}
        <div className="no-print px-4 pb-4 flex gap-3 justify-center border-t border-gray-100 pt-3">
          <button
            onClick={handlePrint}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm transition-all shadow-md"
          >
            🖨 הדפס / שמור PDF
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-sm transition-all"
          >
            ✕ סגור
          </button>
        </div>
      </div>
    </div>
  );
}

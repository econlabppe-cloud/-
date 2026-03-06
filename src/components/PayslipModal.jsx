import { useEffect } from 'react';
import { Icons } from './icons';
import { MONTHLY_HOURS } from '../utils/calculator';

// ── Formatting helpers ────────────────────────────────────────────────────────
const fmt  = n => Math.abs(Math.round(n)).toLocaleString('he-IL');
const fmtF = (n, d = 2) => Math.abs(n).toFixed(d);
const MONTHS_HE = ['ינואר','פברואר','מרץ','אפריל','מאי','יוני','יולי','אוגוסט','ספטמבר','אוקטובר','נובמבר','דצמבר'];

// ── Table primitives ─────────────────────────────────────────────────────────
const TH = ({ children, cls = '' }) => (
  <th className={`py-1 px-2 text-right text-xs font-bold text-gray-500 border-b border-gray-300 bg-gray-100 ${cls}`}>
    {children}
  </th>
);

const TD = ({ children, cls = '' }) => (
  <td className={`py-1.5 px-2 text-xs border-b border-gray-100 ${cls}`}>{children}</td>
);

/** A coloured sub-section header row that spans all columns. */
const SectionRow = ({ title, total, totalLabel = 'סה"כ', cols = 5, color = 'gray' }) => {
  const bg = {
    gray:   'bg-gray-100  text-gray-700',
    green:  'bg-green-50  text-green-800',
    red:    'bg-red-50    text-red-800',
    blue:   'bg-blue-50   text-blue-800',
    amber:  'bg-amber-50  text-amber-800',
  }[color] ?? 'bg-gray-100 text-gray-700';

  return (
    <tr>
      <td colSpan={cols} className={`py-1 px-3 ${bg}`}>
        <div className="flex justify-between items-center">
          <span className="text-xs font-bold">{title}</span>
          {total !== undefined && (
            <span className="text-xs font-bold">
              {totalLabel}: {total} ₪
            </span>
          )}
        </div>
      </td>
    </tr>
  );
};

/** A single income / expense line. */
const PayRow = ({ code, name, qty, rate, total, neg = false, bold = false }) => (
  <tr className={bold ? 'bg-blue-50' : 'hover:bg-gray-50'}>
    <TD cls="text-gray-400 font-mono w-12">{code ?? ''}</TD>
    <TD cls={bold ? 'font-bold text-gray-800' : 'text-gray-800'}>{name}</TD>
    <TD cls="text-center text-gray-500 w-20">{qty ?? ''}</TD>
    <TD cls="text-center text-gray-500 w-20">{rate ?? ''}</TD>
    <TD cls={`text-left font-semibold w-24 ${neg ? 'text-red-600' : bold ? 'text-blue-800' : 'text-gray-800'}`}>
      {neg && total !== '0' ? '−' : ''}{total} ₪
    </TD>
  </tr>
);

/** A single deduction line. */
const DedRow = ({ code, name, pct, base, total, neg = false }) => (
  <tr className="hover:bg-gray-50">
    <TD cls="text-gray-400 font-mono w-12">{code ?? ''}</TD>
    <TD cls="text-gray-800">{name}</TD>
    <TD cls="text-center text-gray-500 w-16">{pct ? `${pct}%` : ''}</TD>
    <TD cls="text-center text-gray-500 w-24">{base ?? ''}</TD>
    <TD cls={`text-left font-semibold w-24 ${neg ? 'text-red-600' : 'text-gray-800'}`}>
      {neg ? '−' : ''}{total} ₪
    </TD>
  </tr>
);

// ─────────────────────────────────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────────────────────────────────

/**
 * PayslipModal — redesigned to closely match the Malam Schar (מלם שכר) PDF layout.
 *
 * Props:
 *   R             – result object from calcAll()
 *   contract      – selected contract object
 *   grade         – selected grade object
 *   contractId    – string
 *   params        – raw params object (for labels)
 *   recoveryYears – number
 *   onClose       – () => void
 */
export default function PayslipModal({ R, contract, grade, contractId, params, recoveryYears, onClose }) {
  const now = new Date();
  const monthLabel = `${MONTHS_HE[now.getMonth()]} ${now.getFullYear()}`;

  const hr = R.hourlyRate;
  const pensionEmpPct = (contract.pensionEmployee  * 100).toFixed(0);
  const pensionErPct  = (contract.pensionEmployer  * 100).toFixed(0);
  const sfEmpPct      = (contract.studyFundEmployee * 100).toFixed(1);
  const sfErPct       = (contract.studyFundEmployer * 100).toFixed(1);
  const travel        = params.travelAllowance ?? 323;

  // Section totals
  const baseSectionTotal  = R.baseSalary;
  const additionsTotal    = R.maonotPay;
  const otTotal           = R.overtimePay + R.eveningShiftPay + R.oncallPay + R.premiumPay;
  const expensesTotal     = R.clothing + travel;
  const miscTotal         = R.recoveryPay;
  const grossTotal        = R.totalGross;

  const mandatoryDed      = R.incomeTax + R.socialSecurity;
  const pensionDed        = R.pensionDed + R.studyFundDed;
  const personalDed       = R.unionDues;
  const totalDed          = R.totalDeductions;

  // ── inject print CSS once ──────────────────────────────────────────────────
  useEffect(() => {
    const el = document.createElement('style');
    el.id = 'payslip-print-css';
    el.textContent = `
      @media print {
        body > *:not(#payslip-print-root) { display: none !important; }
        #payslip-print-root { position: static !important; background: white !important; overflow: visible !important; }
        .no-print { display: none !important; }
        @page { size: A4 portrait; margin: 10mm; }
      }
    `;
    document.head.appendChild(el);
    return () => document.getElementById('payslip-print-css')?.remove();
  }, []);

  return (
    <div
      id="payslip-print-root"
      className="fixed inset-0 bg-black/70 z-50 flex items-start justify-center overflow-y-auto p-2 sm:p-4"
      onClick={onClose}
      dir="rtl"
    >
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-3xl my-4 overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* ════════════════════════════════════════════════
            HEADER — employee / employer details
            ════════════════════════════════════════════════ */}
        <div className="bg-gradient-to-l from-blue-900 to-indigo-900 text-white px-5 py-4 print:bg-white print:text-black">
          {/* Top row */}
          <div className="flex justify-between items-start mb-3">
            <div>
              <div className="text-base font-black tracking-wide">תלוש שכר — סימולציה</div>
              <div className="text-blue-300 text-xs mt-0.5">ממשלת ישראל — שירות המדינה</div>
            </div>
            <div className="text-left text-sm">
              <div className="text-xs text-blue-300">תקופת שכר</div>
              <div className="font-bold">{monthLabel}</div>
            </div>
          </div>

          {/* Employee info grid — mimics Malam Schar header table */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-2 text-xs border-t border-white/20 pt-3">
            {[
              { label: 'דירוג',       val: `${contract.name} (${contractId})` },
              { label: 'דרגה',        val: grade?.label ?? '—' },
              { label: 'ערך שעה',     val: `${fmtF(hr)} ₪` },
              { label: 'היקף משרה',   val: '100%' },
              { label: 'ותק הבראה',   val: `${recoveryYears ?? 0} שנים (${R.recoveryDays} ימים)` },
              { label: 'ברוטו קובע',  val: `${fmt(R.pensionableSalary)} ₪` },
              { label: 'חודש שכר',    val: monthLabel },
              { label: 'תאריך הפקה',  val: new Date().toLocaleDateString('he-IL') },
            ].map(({ label, val }) => (
              <div key={label}>
                <div className="text-blue-300 leading-none mb-0.5">{label}</div>
                <div className="font-semibold leading-tight">{val}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ════════════════════════════════════════════════
            PAYMENTS TABLE
            ════════════════════════════════════════════════ */}
        <div className="px-4 pt-4">
          <div className="text-xs font-black text-gray-700 border-b-2 border-gray-400 pb-1 mb-0 uppercase tracking-wider">
            תשלומים
          </div>
        </div>

        {/* Responsive scroll wrapper for narrow screens */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px]">
            <thead>
              <tr>
                <TH cls="w-12">קוד</TH>
                <TH>שם נתון</TH>
                <TH cls="w-20 text-center">כמות</TH>
                <TH cls="w-20 text-center">ערך</TH>
                <TH cls="w-24 text-left">סכום</TH>
              </tr>
            </thead>
            <tbody>
              {/* ── 1. שכר בסיסי ── */}
              <SectionRow title="שכר בסיסי" total={fmt(baseSectionTotal)} color="green" />
              <PayRow
                code="0200"
                name="שכר יסוד משולב"
                qty={fmtF(MONTHLY_HOURS)}
                rate={`${fmtF(hr)} ₪`}
                total={fmt(R.baseSalary)}
              />

              {/* ── 2. תוספות ── */}
              {additionsTotal > 0 && (
                <>
                  <SectionRow title="תוספות" total={fmt(additionsTotal)} color="blue" />
                  {R.maonotPay > 0 && (
                    <PayRow code="0277" name={`תוספת מעונות (${Math.min(params.childrenUnder5 ?? 0, 2)} ילד/ים)`} total={fmt(R.maonotPay)} />
                  )}
                </>
              )}

              {/* ── 3. עבודה נוספת ── */}
              {otTotal > 0 && (
                <>
                  <SectionRow title="עבודה נוספת" total={fmt(otTotal)} color="amber" />
                  {R.overtimePay > 0 && (
                    <>
                      <PayRow
                        code="1125"
                        name="שעות נוספות 125%"
                        qty={fmtF(R.ot125h)}
                        rate={`${fmtF(hr * 1.25)} ₪`}
                        total={fmt(hr * 1.25 * R.ot125h)}
                      />
                      <PayRow
                        code="1150"
                        name="שעות נוספות 150%"
                        qty={fmtF(R.ot150h)}
                        rate={`${fmtF(hr * 1.50)} ₪`}
                        total={fmt(hr * 1.50 * R.ot150h)}
                      />
                    </>
                  )}
                  {R.eveningShiftPay > 0 && (
                    <PayRow
                      code="1120"
                      name="תוספת משמרת ערב/לילה 120%"
                      qty={fmtF(R.eveningShiftHours)}
                      rate={`${fmtF(hr * 1.20)} ₪`}
                      total={fmt(R.eveningShiftPay)}
                    />
                  )}
                  {R.oncallPay > 0 && (
                    <PayRow
                      code="4322"
                      name={`כוננויות (${params.oncallCount} × 5.33 ש׳)`}
                      qty={String(params.oncallCount)}
                      rate={`${fmtF(5.33 * hr)} ₪`}
                      total={fmt(R.oncallPay)}
                    />
                  )}
                  {R.premiumPay > 0 && (
                    <PayRow
                      code="4350"
                      name={`פרמיה (${params.premiumHours} ש׳ × ${params.premiumPct}%)`}
                      total={fmt(R.premiumPay)}
                    />
                  )}
                </>
              )}

              {/* ── 4. החזרי הוצאות ── */}
              <SectionRow title="החזרי הוצאות" total={fmt(expensesTotal)} color="gray" />
              <PayRow code="5255" name="קצובת ביגוד"  total={fmt(R.clothing)} />
              <PayRow code="0561" name="קצובת נסיעה"  total={fmt(travel)} />

              {/* ── 5. שונות ── */}
              <SectionRow title="שונות" total={fmt(miscTotal)} color="gray" />
              <PayRow
                code="1260"
                name={`דמי הבראה (${R.recoveryDays} ימים × 350 ₪ ÷ 12)`}
                total={fmt(R.recoveryPay)}
              />

              {/* ── Gross total ── */}
              <tr><td colSpan={5} className="pb-1" /></tr>
              <PayRow name='סה"כ ברוטו לתשלום' total={fmt(grossTotal)} bold />
            </tbody>
          </table>
        </div>

        {/* ════════════════════════════════════════════════
            DEDUCTIONS TABLE
            ════════════════════════════════════════════════ */}
        <div className="px-4 pt-4">
          <div className="text-xs font-black text-gray-700 border-b-2 border-gray-400 pb-1 uppercase tracking-wider">
            ניכויים
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px]">
            <thead>
              <tr>
                <TH cls="w-12">קוד</TH>
                <TH>שם נתון</TH>
                <TH cls="w-16 text-center">%</TH>
                <TH cls="w-28 text-center">בסיס חישוב</TH>
                <TH cls="w-24 text-left">סכום</TH>
              </tr>
            </thead>
            <tbody>
              {/* ── 1. ניכויי חובה ── */}
              <SectionRow title="ניכויי חובה" total={fmt(mandatoryDed)} totalLabel="סה״כ" color="red" cols={5} />
              {R.incomeTax > 0 && (
                <DedRow code="450/" name="מס הכנסה" base={`${fmt(grossTotal)} ₪`} total={fmt(R.incomeTax)} neg />
              )}
              <DedRow code="351/" name="ביטוח לאומי" base={`${fmt(grossTotal)} ₪`} total={fmt(R.socialSecurity * 0.4)} neg />
              <DedRow code="352/" name="ביטוח בריאות" base={`${fmt(grossTotal)} ₪`} total={fmt(R.socialSecurity * 0.6)} neg />

              {/* ── 2. ניכויי קופות ── */}
              <SectionRow title="ניכויי קופות וביטוחים" total={fmt(pensionDed)} totalLabel="סה״כ" color="blue" cols={5} />
              <DedRow
                code="82A6"
                name={`פנסיה עובד (${pensionEmpPct}%)`}
                pct={pensionEmpPct}
                base={`${fmt(R.pensionableSalary)} ₪`}
                total={fmt(R.pensionDed)}
                neg
              />
              <DedRow
                code="22V6"
                name={`קרן השתלמות עובד (${sfEmpPct}%)`}
                pct={sfEmpPct}
                base={`${fmt(R.studyFundBase)} ₪`}
                total={fmt(R.studyFundDed)}
                neg
              />
              {/* Note if a ceiling was applied */}
              {(R.ceilingApplied || R.studyCeilingApplied) && (
                <tr>
                  <td colSpan={5}>
                    <div className="mx-3 my-1 px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800 flex items-center gap-2">
                      <Icons.Info c="w-3.5 h-3.5 flex-shrink-0 text-amber-500" />
                      {R.ceilingApplied && <span>תקרת פנסיה 24,000 ₪ הוחלה. </span>}
                      {R.studyCeilingApplied && <span>תקרת קה״ש 15,712 ₪ הוחלה.</span>}
                    </div>
                  </td>
                </tr>
              )}

              {/* ── 3. ניכויים אישיים ── */}
              <SectionRow title="ניכויים אישיים" total={fmt(personalDed)} totalLabel="סה״כ" color="gray" cols={5} />
              <DedRow code="7675" name='דמי טיפול ארגוני (ועד)' total={fmt(R.unionDues)} neg />

              {/* ── Total deductions ── */}
              <tr><td colSpan={5} className="pb-1" /></tr>
              <tr className="bg-red-50">
                <TD cls="font-bold text-red-800" />
                <TD cls="font-bold text-red-800 text-sm">סה"כ ניכויים</TD>
                <TD /><TD />
                <TD cls="text-left font-black text-red-800 text-base">−{fmt(totalDed)} ₪</TD>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ════════════════════════════════════════════════
            NET PAY SUMMARY
            ════════════════════════════════════════════════ */}
        <div className="mx-4 mt-4 mb-4 grid grid-cols-2 gap-3">
          <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-center">
            <div className="text-xs text-red-500 mb-1 font-medium">סה"כ ניכויים</div>
            <div className="text-2xl font-black text-red-700">−{fmt(totalDed)} ₪</div>
          </div>
          <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-3 text-center">
            <div className="text-xs text-emerald-700 mb-1 font-bold uppercase tracking-wide">סה"כ לתשלום (נטו)</div>
            <div className="text-3xl font-black text-emerald-700">{fmt(R.netSalary)} ₪</div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════
            EMPLOYER CONTRIBUTIONS TABLE
            ════════════════════════════════════════════════ */}
        <div className="px-4">
          <div className="text-xs font-black text-gray-700 border-b-2 border-gray-400 pb-1 uppercase tracking-wider">
            הפרשות מעסיק לקופות (אינן מנוכות מהשכר)
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px] mb-1">
            <thead>
              <tr>
                <TH>רכיב</TH>
                <TH cls="w-16 text-center">%</TH>
                <TH cls="w-28 text-center">בסיס</TH>
                <TH cls="w-24 text-left">סכום</TH>
              </tr>
            </thead>
            <tbody>
              <DedRow
                name={`הפרשת מעסיק לפנסיה (${pensionErPct}%)`}
                pct={pensionErPct}
                base={`${fmt(R.pensionableSalary)} ₪`}
                total={fmt(R.pensionEmployer)}
              />
              <DedRow
                name="פיצויים (8.33%)"
                pct="8.33"
                base={`${fmt(R.pensionableSalary)} ₪`}
                total={fmt(R.severancePay)}
              />
              <DedRow
                name={`קרן השתלמות מעסיק (${sfErPct}%)`}
                pct={sfErPct}
                base={`${fmt(R.studyFundBase)} ₪`}
                total={fmt(R.studyFundEmployer)}
              />
            </tbody>
          </table>
        </div>

        {/* ════════════════════════════════════════════════
            REIMBURSEMENTS (outside payslip)
            ════════════════════════════════════════════════ */}
        {(R.insuranceRefundMonthly > 0 || R.regFeeRefundMonthly > 0) && (
          <div className="mx-4 mb-4">
            <div className="text-xs font-bold text-gray-600 border-b border-gray-200 pb-1 mb-2">
              החזרי הוצאות נוספים (מחוץ לתלוש — מועברים לחשבון)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {R.insuranceRefundMonthly > 0 && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 text-xs">
                  <div className="text-blue-600 font-semibold">החזר ביטוח רכב</div>
                  <div className="text-blue-800 font-black text-base">{fmt(R.insuranceRefundMonthly)} ₪/חודש</div>
                  <div className="text-blue-400">(מקסימום 7,000 ₪/שנה)</div>
                </div>
              )}
              {R.regFeeRefundMonthly > 0 && (
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-2 text-xs">
                  <div className="text-purple-600 font-semibold">החזר אגרת רישוי</div>
                  <div className="text-purple-800 font-black text-base">{fmt(R.regFeeRefundMonthly)} ₪/חודש</div>
                  <div className="text-purple-400">(מקסימום 2,326 ₪/שנה)</div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════
            AUXILIARY DATA (helper figures)
            ════════════════════════════════════════════════ */}
        <div className="mx-4 mb-4 bg-gray-50 rounded-xl border border-gray-200 p-3">
          <div className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">נתוני עזר לתלוש</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-1 text-xs text-gray-600">
            {[
              ['ערך שעה',              `${fmtF(hr)} ₪`],
              ['ברוטו פנסיוני (קובע)', `${fmt(R.pensionableSalary)} ₪`],
              ['ברוטו בסיס קה״ש',      `${fmt(R.studyFundBase)} ₪`],
              ['ברוטו כולל',           `${fmt(grossTotal)} ₪`],
              ['נקודות זיכוי',         R.points?.toFixed(2)],
              ['שווי נקודות',          `${fmt(R.taxCreditValue)} ₪`],
            ].map(([label, val]) => (
              <div key={label}>
                <span className="text-gray-400">{label}: </span>
                <span className="font-semibold text-gray-700">{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ════════════════════════════════════════════════
            LEGAL DISCLAIMER (footer)
            ════════════════════════════════════════════════ */}
        <div className="mx-4 mb-3 text-center text-xs text-gray-400 border-t border-gray-100 pt-2">
          ⚠ תלוש זה הוא <strong>סימולציה בלבד</strong> לצרכי תכנון — אינו מחליף תלוש שכר רשמי ואין לו תוקף משפטי.
          מבוסס על נתוני 2024–2025.
        </div>

        {/* ════════════════════════════════════════════════
            ACTION BUTTONS (hidden on print)
            ════════════════════════════════════════════════ */}
        <div className="no-print px-4 pb-4 flex gap-3 justify-center border-t border-gray-100 pt-3">
          <button
            onClick={() => window.print()}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm transition-all shadow-md flex items-center gap-2"
          >
            <Icons.Print c="w-4 h-4" />
            הדפס / שמור PDF
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-sm transition-all flex items-center gap-2"
          >
            <Icons.X c="w-4 h-4" />
            סגור
          </button>
        </div>
      </div>
    </div>
  );
}

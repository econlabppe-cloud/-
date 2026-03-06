import { Icons, ResultRow, Card, SectionTitle } from './icons';

const fmt = n => Math.round(n).toLocaleString('he-IL');

/**
 * Full payslip breakdown card — income section + deductions section + net total.
 * Also shows the "next grade" promotion comparison if available.
 */
export default function SalaryBreakdown({
  R, NR,
  contract,
  grade, nextGrade,
  overtimeHours,
  params,
  onShowPayslip,
}) {
  const cp = params._carPackages?.[params.carType] ?? { label: 'ללא רכב' };

  return (
    <Card className="p-6">
      <SectionTitle icon={Icons.File} title="פירוט תלוש שכר" subtitle="ניתוח מלא של השכר החודשי" />

      {/* ── Income ──────────────────────────────────────────────────────── */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-200 mb-4">
        <h4 className="font-bold text-emerald-800 mb-3 flex items-center gap-2">
          <Icons.Trend c="w-5 h-5" />
          הכנסות (ברוטו)
        </h4>
        <div className="space-y-1">
          <ResultRow label="שכר יסוד משולב" value={R.baseSalary} icon={Icons.Coin} />

          {R.overtimePay > 0 && (
            <ResultRow
              label={`שעות נוספות (${overtimeHours}h: ${R.ot125h.toFixed(1)}×125% + ${R.ot150h.toFixed(1)}×150%)`}
              value={R.overtimePay}
            />
          )}
          {R.eveningShiftPay > 0 && (
            <ResultRow
              label={`משמרת ערב/לילה 120% (${R.eveningShiftHours} שעות)`}
              value={R.eveningShiftPay}
            />
          )}
          {R.oncallPay > 0 && (
            <ResultRow
              label={`כוננויות (${params.oncallCount} × 5.33ש׳ × ${R.hourlyRate.toFixed(2)}₪)`}
              value={R.oncallPay}
            />
          )}
          {R.premiumPay > 0 && (
            <ResultRow
              label={`פרמיה (${params.premiumHours}ש׳ × ${params.premiumPct}% × ${R.hourlyRate.toFixed(2)}₪)`}
              value={R.premiumPay}
            />
          )}

          <ResultRow label="רכב / נסיעות" value={R.carGross} subValue={cp.label} icon={Icons.Car} />

          {R.maonotPay > 0 && (
            <ResultRow
              label={`תוספת מעונות (${Math.min(params.childrenUnder5 ?? 0, 2)} ילד/ים עד גיל 4)`}
              value={R.maonotPay}
              icon={Icons.Baby}
            />
          )}

          <div className="pt-2 mt-2 border-t-2 border-emerald-300">
            <ResultRow label='סה"כ ברוטו' value={R.totalGross} highlight />
          </div>
        </div>
      </div>

      {/* ── Deductions ──────────────────────────────────────────────────── */}
      <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-4 border border-red-200 mb-4">
        <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
          <Icons.Card c="w-5 h-5" />
          ניכויים
        </h4>

        {/* Ceiling notices */}
        {R.isGlobalContract && (
          <div className="text-xs text-blue-700 bg-blue-50 border border-blue-200 rounded-lg px-3 py-1.5 mb-2">
            ✓ חוזה גלובלי — שעות נוספות כלולות בשכר הבסיס ופנסיוניות
          </div>
        )}
        {R.ceilingApplied && (
          <div className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-1.5 mb-2 flex items-center gap-1">
            <Icons.Info c="w-3.5 h-3.5 flex-shrink-0" />
            תקרת פנסיה 24,000 ₪ הוחלה — בסיס בפועל: {fmt(R.pensionableSalary)} ₪
          </div>
        )}
        {R.studyCeilingApplied && (
          <div className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-1.5 mb-2 flex items-center gap-1">
            <Icons.Info c="w-3.5 h-3.5 flex-shrink-0" />
            תקרת קה״ש 15,712 ₪ הוחלה — בסיס בפועל: {fmt(R.studyFundBase)} ₪
          </div>
        )}

        <div className="space-y-1">
          <ResultRow
            label="מס הכנסה"
            value={R.incomeTax}
            isNeg
            subValue={`לאחר ${R.points.toFixed(2)} נקודות זיכוי${R.miluimPoints > 0 ? ` (כולל ${R.miluimPoints} מילואים)` : ''}`}
          />
          <ResultRow label="ביטוח לאומי + בריאות" value={R.socialSecurity} isNeg />
          <ResultRow
            label={`פנסיה (${(contract.pensionEmployee * 100).toFixed(0)}%)`}
            value={R.pensionDed}
            isNeg
            subValue={`מ-${fmt(R.pensionableSalary)} ₪ (שכר קובע)`}
            icon={Icons.Pig}
          />
          <ResultRow
            label={`קרן השתלמות (${(contract.studyFundEmployee * 100).toFixed(1)}%)`}
            value={R.studyFundDed}
            isNeg
            subValue={`מ-${fmt(R.studyFundBase)} ₪ (בסיס קה״ש)`}
          />
          <ResultRow label="דמי ועד" value={R.unionDues} isNeg />

          <div className="pt-2 mt-2 border-t-2 border-red-300">
            <ResultRow label='סה"כ ניכויים' value={R.totalDeductions} isNeg highlight />
          </div>
        </div>
      </div>

      {/* ── Net total ────────────────────────────────────────────────────── */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-5 text-white shadow-xl mb-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-blue-100 text-sm mb-1 font-medium">נטו לתשלום</div>
            <div className="text-5xl font-bold tracking-tight">{fmt(R.netSalary)} ₪</div>
            <div className="text-blue-200 text-sm mt-2">מועבר לחשבון ב-1 לחודש</div>
          </div>
          <Icons.Card c="w-20 h-20 text-blue-300 opacity-40" />
        </div>
      </div>

      {/* ── Payslip button ───────────────────────────────────────────────── */}
      <button
        onClick={onShowPayslip}
        className="w-full py-3 bg-gradient-to-l from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white rounded-xl font-bold text-sm transition-all shadow flex items-center justify-center gap-2"
      >
        <Icons.File c="w-4 h-4" />
        הצג תלוש שכר סימולציה
      </button>

      {/* ── Next grade comparison ────────────────────────────────────────── */}
      {nextGrade && NR && (
        <div className="mt-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-200">
          <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Icons.Trend c="w-5 h-5 text-amber-600" />
            מה קורה בקידום לדרגה הבאה?
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-slate-600">דרגה נוכחית ({grade.label})</span>
              <span className="font-bold">{fmt(R.netSalary)} ₪</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">דרגה הבאה ({nextGrade.label})</span>
              <span className="font-bold text-emerald-600">{fmt(NR.netSalary)} ₪</span>
            </div>
            <div className="pt-3 border-t border-amber-200 flex justify-between items-center">
              <span className="font-semibold text-amber-700">עלייה צפויה</span>
              <div className="text-left">
                <div className="font-bold text-emerald-600">
                  +{fmt(NR.netSalary - R.netSalary)} ₪
                </div>
                <div className="text-xs text-slate-500">
                  +{(((NR.netSalary - R.netSalary) / R.netSalary) * 100).toFixed(1)}% |
                  שנתי: +{fmt((NR.netSalary - R.netSalary) * 12)} ₪
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}

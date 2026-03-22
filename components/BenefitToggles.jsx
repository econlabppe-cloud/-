'use client';

const BenefitToggle = ({ label, sub, value, checked, onChange }) => (
  <label className={`flex items-center justify-between p-3 bg-white rounded-lg border-2 transition-all cursor-pointer ${
    checked ? 'border-amber-400 bg-amber-50' : 'border-slate-200 hover:border-amber-300'
  }`}>
    <div className="flex items-center gap-3 flex-1">
      <input
        type="checkbox"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        className="w-5 h-5 text-amber-600 rounded border-slate-300 cursor-pointer"
      />
      <div>
        <span className="font-medium text-slate-700">{label}</span>
        {sub && <div className="text-xs text-slate-500 mt-0.5">{sub}</div>}
      </div>
    </div>
    <span className={`font-bold font-mono text-lg ${checked ? 'text-emerald-600' : 'text-slate-400'}`}>
      {Math.round(value).toLocaleString('he-IL')} ₪
    </span>
  </label>
);

export default function BenefitToggles({ result, toggles, setToggles, hasCar }) {
  if (!result) return null;

  const {
    insuranceRefundMonthly, regFeeRefundMonthly,
    studyFundEmployer, pensionEmployer,
    recoveryPay, clothing, gifts, cibus, phone, maonotPay,
  } = result;

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-bold text-slate-600 uppercase tracking-wide mb-3">שווי כלכלי — הטבות נוספות</h3>

      {hasCar && (
        <BenefitToggle
          label="החזר ביטוח ואגרת רכב"
          sub={`ביטוח: ${Math.round(insuranceRefundMonthly)} ₪ | אגרה: ${Math.round(regFeeRefundMonthly)} ₪`}
          value={insuranceRefundMonthly + regFeeRefundMonthly}
          checked={toggles.includeInsuranceRefund}
          onChange={v => setToggles(prev => ({ ...prev, includeInsuranceRefund: v }))}
        />
      )}

      <BenefitToggle
        label="קרן השתלמות מעסיק"
        sub={`${(7.5).toFixed(1)}% מהשכר הקובע`}
        value={studyFundEmployer}
        checked={toggles.includeStudyFund}
        onChange={v => setToggles(prev => ({ ...prev, includeStudyFund: v }))}
      />

      <BenefitToggle
        label="פנסיה מעסיק"
        sub="13.5% מהשכר הקובע"
        value={pensionEmployer}
        checked={toggles.includePension}
        onChange={v => setToggles(prev => ({ ...prev, includePension: v }))}
      />

      <BenefitToggle
        label="דמי הבראה"
        sub={`${result.recoveryDays} ימים × 374 ₪ ÷ 12`}
        value={recoveryPay}
        checked={toggles.includeRecovery}
        onChange={v => setToggles(prev => ({ ...prev, includeRecovery: v }))}
      />

      <BenefitToggle
        label="קצובת ביגוד"
        sub="206 ₪/חודש"
        value={clothing}
        checked={toggles.includeClothing}
        onChange={v => setToggles(prev => ({ ...prev, includeClothing: v }))}
      />

      <BenefitToggle
        label="מתנות (ראש השנה / פסח)"
        sub="100 ₪/חודש ממוצע"
        value={gifts}
        checked={toggles.includeGifts}
        onChange={v => setToggles(prev => ({ ...prev, includeGifts: v }))}
      />

      <BenefitToggle
        label="סיבוס / ארוחות"
        sub="22 ₪ × 20 ימי עבודה"
        value={cibus}
        checked={toggles.inclCibus}
        onChange={v => setToggles(prev => ({ ...prev, inclCibus: v }))}
      />

      <BenefitToggle
        label="קו סלולר + מכשיר"
        sub="130 ₪/חודש"
        value={phone}
        checked={toggles.inclPhone}
        onChange={v => setToggles(prev => ({ ...prev, inclPhone: v }))}
      />

    </div>
  );
}

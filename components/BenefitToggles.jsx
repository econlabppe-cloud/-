'use client';
import InfoTooltip from './InfoTooltip';

const BenefitToggle = ({ label, sub, value, checked, onChange, info }) => (
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
        <span className="font-medium text-slate-700 inline-flex items-center gap-1.5">
          {label}
          {info && <InfoTooltip title={info.title} content={info.content} />}
        </span>
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
          info={{
            title: 'החזר ביטוח ואגרת רכב',
            content: 'החזר הוצאות אחזקת רכב פרטי המשמש לעבודה.\n\n• ביטוח: עד 7,000 ₪/שנה (583 ₪/חודש)\n• אגרת רישוי: עד 2,326 ₪/שנה (194 ₪/חודש)\n\nניתן רק לעובדים עם זכאות לרכב שירות שמביאים רכב פרטי.'
          }}
        />
      )}

      <BenefitToggle
        label="קרן השתלמות מעסיק"
        sub={`${(7.5).toFixed(1)}% מהשכר הקובע`}
        value={studyFundEmployer}
        checked={toggles.includeStudyFund}
        onChange={v => setToggles(prev => ({ ...prev, includeStudyFund: v }))}
        info={{
          title: 'קרן השתלמות — הפרשת מעסיק',
          content: 'המעסיק מפריש 7.5% מהשכר הפנסיוני לקרן השתלמות.\nהעובד מפריש 2.5% (מנוכה מהשכר).\n\nיתרונות הקרן:\n• פטורה ממס אחרי 6 שנות חיסכון\n• ניתן למשיכה לצרכי לימודים אחרי 3 שנים\n• מושקעת בשוק ההון ומניבה תשואה\n\nשכר קובע = שכר יסוד + שעות נוספות.'
        }}
      />

      <BenefitToggle
        label="פנסיה מעסיק"
        sub="13.5% מהשכר הקובע"
        value={pensionEmployer}
        checked={toggles.includePension}
        onChange={v => setToggles(prev => ({ ...prev, includePension: v }))}
        info={{
          title: 'פנסיה — הפרשת מעסיק',
          content: 'המעסיק מפריש 13.5% לקרן הפנסיה (מעבר לניכוי מהעובד).\n\nבשירות המדינה הפנסיה היא תקציבית (צוברת) — מובטחת לאחר 10+ שנות עבודה.\n\nשכר קובע = שכר יסוד + שעות נוספות.\n\nאינה מנוכה מהשכר — הפרשה נוספת של המעסיק.'
        }}
      />

      <BenefitToggle
        label="דמי הבראה"
        sub={`${result.recoveryDays} ימים × 374 ₪ ÷ 12`}
        value={recoveryPay}
        checked={toggles.includeRecovery}
        onChange={v => setToggles(prev => ({ ...prev, includeRecovery: v }))}
        info={{
          title: 'דמי הבראה',
          content: `תשלום שנתי לפי שנות ותק (מחולק ל-12 חודשים):\n• שנה 1–2: 5 ימים\n• שנה 3: 6 ימים\n• שנה 4–10: 7 ימים\n• שנה 11–15: 8 ימים\n• שנה 16–19: 9 ימים\n• שנה 20+: 12 ימים\n\nשיעור יומי: 374 ₪ (2025).`
        }}
      />

      <BenefitToggle
        label="קצובת ביגוד"
        sub="206 ₪/חודש"
        value={clothing}
        checked={toggles.includeClothing}
        onChange={v => setToggles(prev => ({ ...prev, includeClothing: v }))}
        info={{
          title: 'קצובת ביגוד',
          content: '206 ₪/חודש — פיצוי על הוצאות ביגוד מקצועי/אחיד.\n\nניתן לכל עובדי המדינה ואינו ממוסה.'
        }}
      />

      <BenefitToggle
        label="מתנות (ראש השנה / פסח)"
        sub="100 ₪/חודש ממוצע"
        value={gifts}
        checked={toggles.includeGifts}
        onChange={v => setToggles(prev => ({ ...prev, includeGifts: v }))}
        info={{
          title: 'מתנות חג',
          content: '200 ₪ לחג (ראש השנה ופסח) = 400 ₪/שנה ≈ 100 ₪/חודש ממוצע.\n\nמוגבל בתקרה הפטורה ממס.'
        }}
      />

      <BenefitToggle
        label="סיבוס / ארוחות"
        sub="30 ₪ × 20 ימי עבודה"
        value={cibus}
        checked={toggles.inclCibus}
        onChange={v => setToggles(prev => ({ ...prev, inclCibus: v }))}
        info={{
          title: 'סיבוס / ארוחות בעבודה',
          content: '30 ₪ ליום עבודה × 20 ימים = 600 ₪/חודש.\n\nמימון ארוחות דרך כרטיס סיבוס/מידנס.\nפטור ממס עד התקרה הקבועה.'
        }}
      />

      <BenefitToggle
        label="קו סלולר + מכשיר"
        sub="130 ₪/חודש"
        value={phone}
        checked={toggles.inclPhone}
        onChange={v => setToggles(prev => ({ ...prev, inclPhone: v }))}
        info={{
          title: 'קצובת טלפון',
          content: '130 ₪/חודש — החזר הוצאות שימוש בטלפון נייד לצרכי עבודה.\n\nניתן לפי נהלי המשרד.'
        }}
      />

    </div>
  );
}

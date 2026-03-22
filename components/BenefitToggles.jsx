'use client';

// נתוני יישובים מזכים (client-side — לתצוגה בלבד, חישוב נעשה בשרת)
const LOCALITY_GROUPS_CLIENT = {
  "1":{"rate":0.07,"maxMonthlyBenefit":855},"2":{"rate":0.10,"maxMonthlyBenefit":1500},
  "3":{"rate":0.12,"maxMonthlyBenefit":1860},"4":{"rate":0.12,"maxMonthlyBenefit":1866},
  "5":{"rate":0.12,"maxMonthlyBenefit":2132},"6":{"rate":0.12,"maxMonthlyBenefit":2265},
  "7":{"rate":0.14,"maxMonthlyBenefit":2566},"8":{"rate":0.14,"maxMonthlyBenefit":3032},
  "9":{"rate":0.16,"maxMonthlyBenefit":3020},"10":{"rate":0.18,"maxMonthlyBenefit":3681},
  "11":{"rate":0.18,"maxMonthlyBenefit":3898},"12":{"rate":0.20,"maxMonthlyBenefit":4332},
  "13":{"rate":0.20,"maxMonthlyBenefit":4464},
};
const LOCALITY_NAMES_CLIENT = [
  "אבו סנאן","אבו קורינאת (יישוב)","אבו תלול","אביבים","אביגיל","אבירים","אבן מנחם","אבן שמואל","אבני איתן","אבנת",
  "אבשלום","אדורה","אדמית","אודם","אוהד","אום בטין","אופקים","אור הגנוז","אור הנר","אורטל","אורים","אחוזם",
  "אחיהוד","איבים","איילת השחר","אילון","אילות","איתן","אל-רום","אל סייד","אלומות","אלוני הבשן","אלי-עד","אליאב",
  "אליפז","אליפלט","אלמגור","אלקוש","אמירים","אמנון","אמציה","אניעם","אספר","אפיק","אפיקים","ארגמן",
  "ארז","אשבול","אשבל","אשדות יעקב (איחוד)","אשדות יעקב (מאוחד)","אשחר","אשכולות","אשל הנשיא","אשלים","אשרת",
  "באר אורה","באר מילכה","בארי","בוסתן הגליל","בוקעאתא","בטחה","ביר הדאג'","בירייה","בית ג'ן","בית הגדי","בית הלל",
  "בית העמק","בית הערבה","בית זרע","בית חוגלה","בית יוסף","בית קמה","בית שאן","בן עמי","בני דקלים","בני יהודה",
  "בני נצרים","בענה","בצת","בר יוחאי","ברור חיל","ברוש","ברעם",
  "ג'דיידה-מכר","ג'ולס","ג'ש (גוש חלב)","גבולות","גבים","גבעולים","גבעות בר","גבעת יואב","גברעם","גדות",
  "גונן","גורן","גורנות הגליל","גילון","גילת","גינוסר","גיתה","געתון","גרופית","גשור","גשר","גשר הזיו",
  "דביר","דגניה א'","דגניה ב'","דוב\"ב","דורות","דייר אל-אסד","דייר חנא","דימונה","דישון","דלתון","דן","דפנה","דקל",
  "דריג'את","האון","הגושרים","הילה","הר עמשא","הררית",
  "זיקים","זמרת","זרועה","חגי","חד-נס","חולית","חולתה","חוסן","חוסנייה","חוקוק","חורה","חורפיש","חזון","חלוץ",
  "חלץ","חמדיה","חמדת","חניתה","חספין","חצבה","חצור הגלילית","חצרים","חרשים",
  "טבריה","טובא-זנגרייה","טירת צבי","טל-אל","טללים","טמרה","טנא","טפחות",
  "יאנוח-ג'ת","יבול","יד מרדכי","יהל","יובל","יובלים","יונתן","יושיביה","יחיעם","יטבתה","יכיני","יסוד המעלה","יסעור","יעד",
  "יערה","יפית","יפתח","יראון","ירדנה","ירוחם","ירכא","ישע","יתד",
  "כאבול","כברי","כדיתה","כורזים","כחל","כחלה","כיסופים","כישור","כליל","כלנית","כמאנה","כמהין","כמון","כנף",
  "כנרת (מושבה)","כנרת (קבוצה)","כסיפה","כסרא-סמיע","כפר בלום","כפר גלעדי","כפר הנשיא","כפר חושן","כפר חנניה","כפר חרוב",
  "כפר יאסיף","כפר מימון","כפר מסריק","כפר סאלד","כפר עזה","כפר ראש הנקרה","כפר רוזנואלד (זרעית)","כפר רופין","כפר שמאי",
  "כרכום","כרם בן זמרה","כרם שלום","כרמי קטיף","כרמיאל","כרמייה","כרמים","כרמל",
  "לבון","לבנים","להב","להבות הבשן","לוחמי הגיטאות","לוטם","לוטן","לימן","לפידות","לקיה",
  "מבוא חמה","מבועים","מבטחים","מבקיעים","מג'ד אל-כרום","מג'דל שמס","מגאר","מגדל","מגן","מדרשת בן גוריון","מולדה","מורן",
  "מזרעה","מחולה","מחנה טלי","מחנה יוכבד","מחנה יפה","מחנה יתיר","מחניים","מטולה","מיצר","מירון","מכחול","מכמנים","מלילות",
  "מלכייה","מנוף","מנות","מנחמיה","מנרה","מסדה","מסלול","מסעדה","מעגלים","מעגן","מעוז חיים","מעון","מעונה","מעיין ברוך",
  "מעיליא","מעלה גמלא","מעלות-תרשיחא","מפלסים","מצדות יהודה","מצובה","מצפה רמון","מצפה שלם","מרגליות","מרום גולן",
  "מרחב עם","משאבי שדה","משגב עם","משואה","משכיות","משמר הירדן","משמר הנגב","מתת",
  "נאות גולן","נאות הכיכר","נאות מרדכי","נאות סמדר","נבטים","נגוהות","נהרייה","נוב","נווה","נווה אור","נווה אטי\"ב",
  "נווה איתן","נווה זוהר","נווה זיו","נווה חריף","נועם","נחל עוז","נחף","נטועה","נטור","נטע","ניצנה (קהילת חינוך)",
  "ניצני סיני","ניר יצחק","ניר משה","ניר עוז","ניר עם","ניר עקיבא","נירים","נמרוד","נס עמים","נעמה","נתיב העשרה",
  "נתיב השיירה","נתיבות",
  "סאג'ור","סאסא","סוסיה","סופה","סח'נין","סלמה","סמר","סנסנה","סעד","סער","ספיר",
  "ע'ג'ר","עבדון","עברון","עזוז","עידן","עין אל-אסד","עין גב","עין גדי","עין הבשור","עין המפרץ","עין הנציב",
  "עין השלושה","עין זיוון","עין חצבה","עין יהב","עין יעקב","עין קנייא","עין תמר","עיר אובות","עכו","עלומים","עלמה",
  "עמוקה","עמיעד","עמיעוז","עמיר","עמקה","עצמון שגב","עראבה","עראמשה","ערב אל נעים","ערד","ערערה-בנגב","עשהאל","עתניאל",
  "פארן","פדויים","פורייה – כפר עבודה","פורייה – נווה עובד","פורייה עילית","פטיש","פלך","פני חבר","פסוטה","פעמי תשז","פצאל",
  "פקיעין (בוקייעה)","פקיעין חדשה","פרוד","פרי גן",
  "צאלים","צביה","צבעון","צוחר","צופר","צוקים","צוריאל","צורית","צפת",
  "קדמת צבי","קדרים","קורנית","קטורה","קלחים","קליה","קלע","קצר א-סר","קצרין","קריית ארבע","קריית שמונה","קשת",
  "ראמה","ראס אל-עין","ראש פינה","רביבים","רביד","רגבה","רהט","רוח מדבר","רוחמה","רועי","רותם","רחוב","ריחאנייה",
  "רמות","רמות נפתלי","רמת טראמפ","רמת מגשימים","רנן","רעים","רקפת","רתמים",
  "שאר ישוב","שבי דרום","שבי ציון","שגב-שלום","שדה אליהו","שדה אליעזר","שדה בוקר","שדה דוד","שדה נחום","שדה נחמיה",
  "שדה ניצן","שדה צבי","שדי אברהם","שדי תרומות","שדמות מחולה","שדרות","שובה","שובל","שומרה","שומרייה","שוקדה",
  "שורשים","שזור","שחרות","שיבולים","שיזף","שיטים","שייח' דנון","שכניה","שלווה","שלווה במדבר","שלומי","שלומית",
  "שמיר","שמעה","שמרת","שני (ליבנה)","שניר","שעב","שעל","שער הגולן","שפר","שקף","שרשרת","שתולה",
  "תאשור","תדהר","תובל","תושייה","תל קציר","תל שבע","תל תאומים","תלם","תלמי אליהו","תלמי ביל\"ו","תלמי יוסף",
  "תלמים","תפרח","תקומה","תרבין א-צאנע (יישוב)",
].sort((a,b)=>a.localeCompare(b,'he'));

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

export default function BenefitToggles({ result, toggles, setToggles, hasCar,
  inclLocality, setInclLocality, localityName, setLocalityName, localitySearch, setLocalitySearch }) {
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

      {/* הנחת יישובים מזכים */}
      <div className={`rounded-xl border-2 transition-all ${inclLocality ? 'border-violet-400 bg-violet-50' : 'border-slate-200 bg-white'}`}>
        <div className="flex items-center justify-between p-3 cursor-pointer select-none"
          onClick={() => { setInclLocality(v => !v); if (inclLocality) { setLocalityName(''); setLocalitySearch(''); } }}>
          <div className="flex items-center gap-3">
            <div className={`w-11 h-6 rounded-full relative transition-colors ${inclLocality ? 'bg-violet-500' : 'bg-slate-300'}`}>
              <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${inclLocality ? 'right-0.5' : 'left-0.5'}`} />
            </div>
            <div>
              <div className="font-medium text-slate-700">הנחת יישובים מזכים</div>
              <div className="text-xs text-slate-500">הפחתת מס — סעיף 11 לפקודה</div>
            </div>
          </div>
          {inclLocality && result?.localityBenefit > 0 && (
            <span className="font-bold font-mono text-lg text-emerald-600">
              {Math.round(result.localityBenefit).toLocaleString('he-IL')} ₪
            </span>
          )}
        </div>

        {inclLocality && (
          <div className="px-3 pb-3 space-y-2 border-t border-violet-200 pt-2" onClick={e => e.stopPropagation()}>
            <input
              type="text"
              value={localitySearch}
              onChange={e => setLocalitySearch(e.target.value)}
              placeholder="🔍 חפש יישוב..."
              className="w-full border-2 border-violet-200 rounded-xl py-2 px-3 text-sm focus:outline-none focus:border-violet-400 bg-white"
            />
            <div className="max-h-48 overflow-y-auto rounded-xl border border-violet-200 bg-white">
              {(() => {
                const q = localitySearch.trim();
                const filtered = q ? LOCALITY_NAMES_CLIENT.filter(n => n.includes(q)) : LOCALITY_NAMES_CLIENT;
                if (!filtered.length) return <div className="p-3 text-sm text-slate-400 text-center">לא נמצא יישוב</div>;
                return filtered.map(name => (
                  <button key={name} onClick={() => setLocalityName(name)}
                    className={`w-full text-right px-3 py-2 text-sm flex justify-between items-center border-b border-slate-100 last:border-0 transition-colors
                      ${localityName === name ? 'bg-violet-100 text-violet-800 font-bold' : 'hover:bg-slate-50 text-slate-700'}`}>
                    <span className="text-xs text-slate-400">
                      {name === localityName && result?.localityBenefit > 0
                        ? `${Math.round(result.localityBenefit).toLocaleString()} ₪/חודש`
                        : ''}
                    </span>
                    <span>{name}</span>
                  </button>
                ));
              })()}
            </div>
            {localityName && (
              <div className="bg-violet-100 rounded-xl px-3 py-2 text-xs text-violet-800 font-medium text-right">
                ✓ {localityName} — הנחה מחושבת בשרת ומופחתת ממס ההכנסה
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

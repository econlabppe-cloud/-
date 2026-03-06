import { useState, useEffect } from 'react';
import { Icons } from './icons';

const STORAGE_KEY = 'salary_calc_disclaimer_v1';

/**
 * Legal disclaimer modal shown on first visit (or whenever localStorage is cleared).
 * The user must click "הבנתי ואני מסכים/ה" before the calculator becomes visible.
 */
export default function DisclaimerModal({ onAccept }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(STORAGE_KEY);
    if (!accepted) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, '1');
    setVisible(false);
    onAccept?.();
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
      dir="rtl"
    >
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="bg-gradient-to-l from-amber-500 to-orange-500 px-6 py-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
            <Icons.Shield c="w-7 h-7 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-white">הצהרת אחריות</h2>
            <p className="text-amber-100 text-sm">מחשבון שכר — שירות המדינה</p>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-6 space-y-4">
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4">
            <p className="text-slate-800 text-sm leading-relaxed font-medium">
              המחשבון הוא <strong>כלי עזר בלבד</strong> לסימולציה כללית של השכר בשירות המדינה.
            </p>
          </div>

          <ul className="space-y-3 text-sm text-slate-700">
            {[
              'החישובים מבוססים על נתוני 2024–2025 ועשויים שלא לשקף שינויים עדכניים.',
              'המחשבון אינו מחליף ייעוץ מקצועי ממחלקת משאבי אנוש, רואה חשבון או יועץ שכר.',
              'היוצר אינו נושא באחריות על כל החלטה פיננסית, מקצועית או אחרת שתילקח על בסיס תוצאות המחשבון.',
              'אין לראות בפלטי המחשבון כתלוש שכר רשמי, אישור שכר, או מסמך בעל תוקף משפטי.',
              'לקבלת תמונה מדויקת יש לפנות לגורמים רשמיים כגון מנהל השכר במשרד הממשלתי הרלוונטי.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-amber-600 font-bold text-xs">{i + 1}</span>
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-xs text-slate-500 border-t border-slate-100 pt-4">
            על ידי לחיצה על הכפתור למטה, אני מאשר/ת שקראתי את האמור לעיל והבנתי
            את מגבלות הכלי.
          </p>
        </div>

        {/* Actions */}
        <div className="px-6 pb-6">
          <button
            onClick={handleAccept}
            className="w-full py-4 bg-gradient-to-l from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-2xl font-extrabold text-base transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            הבנתי ואני מסכים/ה — המשך לחישוב
          </button>
        </div>
      </div>
    </div>
  );
}

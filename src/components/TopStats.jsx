import { Icons } from './icons';

/**
 * Three large KPI cards at the top of the page:
 * Net pay | Economic value (toggleable to annual) | Gross pay
 */
export default function TopStats({ R, contract, showAnnual, setShowAnnual }) {
  const fmt = n => Math.round(n).toLocaleString('he-IL');

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Net pay */}
      <div className={`bg-gradient-to-br ${contract.color} rounded-2xl p-5 text-white shadow-lg relative overflow-hidden`}>
        <div className="absolute -bottom-4 -left-4 opacity-10">
          <Icons.Card c="w-32 h-32" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <Icons.Card c="w-5 h-5 opacity-80" />
            <span className="text-sm opacity-90">נטו חודשי</span>
          </div>
          <div className="text-4xl font-extrabold">{fmt(R.netSalary)} ₪</div>
          <div className="text-xs opacity-70 mt-1 bg-white/20 inline-block px-2 py-1 rounded-lg">
            נכנס לחשבון ב-1 לחודש
          </div>
        </div>
      </div>

      {/* Economic value / annual toggle */}
      <div
        className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-5 text-white shadow-lg relative overflow-hidden cursor-pointer hover:scale-105 transition-transform"
        onClick={() => setShowAnnual(!showAnnual)}
        title="לחץ להחלפה בין שווי כלכלי לנטו שנתי"
      >
        <div className="absolute -bottom-4 -left-4 opacity-10">
          <Icons.Trend c="w-32 h-32" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <Icons.Trend c="w-5 h-5 opacity-80" />
            <span className="text-sm opacity-90">
              {showAnnual ? 'נטו שנתי' : 'שווי כלכלי כולל'}
            </span>
          </div>
          <div className="text-4xl font-extrabold">
            {fmt(showAnnual ? R.netSalary * 12 : R.totalEconomicValue)} ₪
          </div>
          <div className="text-xs opacity-70 mt-1 bg-white/20 inline-block px-2 py-1 rounded-lg">
            {showAnnual ? '12 חודשים' : 'לחץ לסיכום שנתי'}
          </div>
        </div>
      </div>

      {/* Gross pay */}
      <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-5 text-white shadow-lg relative overflow-hidden">
        <div className="absolute -bottom-4 -left-4 opacity-10">
          <Icons.Cal c="w-32 h-32" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <Icons.Cal c="w-5 h-5 opacity-80" />
            <span className="text-sm opacity-90">ברוטו חודשי</span>
          </div>
          <div className="text-4xl font-extrabold">{fmt(R.totalGross)} ₪</div>
          <div className="text-xs opacity-70 mt-1 bg-white/20 inline-block px-2 py-1 rounded-lg">
            לפני ניכויים ומסים
          </div>
        </div>
      </div>
    </div>
  );
}

// Shared SVG icon set — all icons accept a `className` prop aliased as `c`.

const path = (d) => <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d} />;

export const Icons = {
  Calc:    ({ c }) => <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">{path('M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z')}</svg>,
  Brief:   ({ c }) => <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">{path('M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z')}</svg>,
  Trend:   ({ c }) => <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">{path('M13 7h8m0 0v8m0-8l-8 8-4-4-6 6')}</svg>,
  Card:    ({ c }) => <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">{path('M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z')}</svg>,
  Cal:     ({ c }) => <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">{path('M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z')}</svg>,
  Chevron: ({ c }) => <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">{path('M19 9l-7 7-7-7')}</svg>,
  Car:     ({ c }) => <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"/>{path('M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l1 1h1m8-1h1l1-1v-2.586a1 1 0 00-.293-.707l-3.414-3.414A1 1 0 0010 7H9M17 16h1l1-1V9')}</svg>,
  Baby:    ({ c }) => <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">{path('M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z')}</svg>,
  Coin:    ({ c }) => <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">{path('M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z')}</svg>,
  Pig:     ({ c }) => <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">{path('M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z')}</svg>,
  File:    ({ c }) => <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">{path('M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z')}</svg>,
  Zap:     ({ c }) => <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">{path('M13 10V3L4 14h7v7l9-11h-7z')}</svg>,
  Check:   ({ c }) => <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">{path('M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z')}</svg>,
  Info:    ({ c }) => <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">{path('M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z')}</svg>,
  Shield:  ({ c }) => <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">{path('M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z')}</svg>,
  Search:  ({ c }) => <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">{path('M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z')}</svg>,
  Share:   ({ c }) => <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">{path('M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z')}</svg>,
  X:       ({ c }) => <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">{path('M6 18L18 6M6 6l12 12')}</svg>,
  Moon:    ({ c }) => <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">{path('M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z')}</svg>,
  Print:   ({ c }) => <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">{path('M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z')}</svg>,
  Email:   ({ c }) => <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">{path('M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z')}</svg>,
  Phone:   ({ c }) => <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">{path('M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z')}</svg>,
  LinkedIn:({ c }) => <svg className={c} fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  Warning: ({ c }) => <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24">{path('M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z')}</svg>,
};

// ── Small reusable layout primitives ──────────────────────────────────────────

export const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-2xl shadow-lg border border-slate-200 ${className}`}>
    {children}
  </div>
);

export const SectionTitle = ({ icon: Icon, title, subtitle }) => (
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

export const ResultRow = ({ label, value, isNeg = false, highlight = false, subValue = null, icon: Icon = null }) => (
  <div className={`flex justify-between items-center py-2.5 px-3 rounded-lg transition-all ${
    highlight
      ? 'bg-gradient-to-l from-blue-50 to-transparent border-r-4 border-blue-500 font-semibold'
      : 'hover:bg-slate-50'
  }`}>
    <div className="flex items-center gap-2">
      {Icon && <Icon c="w-4 h-4 text-slate-400" />}
      <div>
        <span className={`${highlight ? 'font-bold text-slate-800' : 'text-slate-600'} text-sm`}>{label}</span>
        {subValue && <div className="text-xs text-slate-400 mt-0.5">{subValue}</div>}
      </div>
    </div>
    <span className={`font-bold font-mono text-base ${isNeg ? 'text-red-600' : highlight ? 'text-blue-700' : 'text-slate-800'}`}>
      {isNeg ? '−' : ''}{Math.round(Math.abs(value)).toLocaleString('he-IL')} ₪
    </span>
  </div>
);

export const BenefitToggle = ({ label, sub, value, checked, onChange, icon: Icon = null }) => (
  <label className={`flex items-center justify-between p-3 bg-white rounded-lg border-2 transition-all cursor-pointer ${
    checked ? 'border-amber-400 bg-amber-50' : 'border-slate-200 hover:border-amber-300'
  }`}>
    <div className="flex items-center gap-3 flex-1">
      <input type="checkbox" checked={checked} onChange={e => onChange(e.target.checked)}
        className="w-5 h-5 text-amber-600 rounded border-slate-300 cursor-pointer" />
      <div>
        {Icon
          ? <div className="flex items-center gap-2"><Icon c="w-4 h-4 text-slate-400" /><span className="font-medium text-slate-700">{label}</span></div>
          : <span className="font-medium text-slate-700">{label}</span>}
        {sub && <div className="text-xs text-slate-500 mt-0.5">{sub}</div>}
      </div>
    </div>
    <span className={`font-bold font-mono text-lg ${checked ? 'text-emerald-600' : 'text-slate-400'}`}>
      {Math.round(value).toLocaleString()} ₪
    </span>
  </label>
);

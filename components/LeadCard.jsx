'use client';

import { useState, useEffect } from 'react';

const COPY = {
  tax_refund: {
    title: 'ייתכן שמגיעה לך בדיקת החזר מס',
    text: 'לפי הנתונים שהוזנו בסימולטור, ייתכן שיש טעם בבדיקה ראשונית של החזר מס.',
    cta: 'בדיקה ראשונית ללא עלות',
  },
  study_fund: {
    title: 'שווה לבדוק את קרן ההשתלמות',
    text: 'בתלוש שלך יש הפרשה לקרן השתלמות. אפשר לבדוק מסלול קיים, דמי ניהול והתאמה.',
    cta: 'בדיקה מהירה',
  },
  pension_review: {
    title: 'כדאי לבדוק את רכיב הפנסיה',
    text: 'מדובר ברכיב משמעותי בתלוש. ניתן לבצע בדיקה מקצועית של מבנה ההפקדות וההתאמה.',
    cta: 'בקש בדיקה',
  },
};

function trackEvent(eventName, params) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

export default function LeadCard({ offerType, leadMeta }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const copy = COPY[offerType];
  const netSalaryBucket = Math.round((leadMeta?.netSalary || 0) / 1000) * 1000;
  const gaParams = { offer_type: offerType, contract_id: leadMeta?.contractId, net_salary_bucket: netSalaryBucket };

  useEffect(() => {
    trackEvent('lead_card_view', gaParams);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleToggleDrawer() {
    if (!drawerOpen) {
      setDrawerOpen(true);
      trackEvent('lead_card_expand', gaParams);
    } else {
      setDrawerOpen(false);
      if (!submitted) trackEvent('lead_dismiss', gaParams);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    const payload = {
      name, phone, offerType,
      contractId: leadMeta.contractId,
      contractName: leadMeta.contractName,
      gradeId: leadMeta.gradeId,
      gradeLabel: leadMeta.gradeLabel,
      baseSalary: leadMeta.baseSalary,
      totalGross: leadMeta.totalGross,
      incomeTax: leadMeta.incomeTax,
      netSalary: leadMeta.netSalary,
      pensionDed: leadMeta.pensionDed,
      studyFundDed: leadMeta.studyFundDed,
      miluimDays: leadMeta.miluimDays,
      localityName: leadMeta.localityName,
      gender: leadMeta.gender,
      hasDegree: leadMeta.hasDegree,
      partnerWorks: leadMeta.partnerWorks,
      childrenAges: leadMeta.childrenAges,
      inclMaonot: leadMeta.inclMaonot,
      overtimeHours: leadMeta.overtimeHours,
      travelAllowance: leadMeta.travelAllowance,
      recoveryYears: leadMeta.recoveryYears,
      carType: leadMeta.carType,
      companyCar: leadMeta.companyCar,
      companyCarGroup: leadMeta.companyCarGroup,
      oncallCount: leadMeta.oncallCount,
      premiumHours: leadMeta.premiumHours,
      premiumPct: leadMeta.premiumPct,
      timestamp: new Date().toISOString(),
      source: 'salary_simulator',
    };

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setSubmitted(true);
        trackEvent('lead_submit', gaParams);
      } else {
        alert('שגיאה בשליחה, נסה שנית.');
      }
    } catch {
      alert('שגיאת רשת, נסה שנית.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mt-1 mb-1 rounded-xl border border-violet-200 bg-violet-50 overflow-hidden">
      {/* Hint row */}
      <div className="flex items-center justify-between gap-3 px-3 py-2.5">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <span className="text-violet-500 flex-shrink-0">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <span className="text-sm font-medium text-violet-900 leading-tight">{copy.title}</span>
        </div>
        <button
          onClick={handleToggleDrawer}
          className="flex-shrink-0 text-xs font-semibold bg-violet-600 hover:bg-violet-700 text-white px-3 py-1.5 rounded-lg transition-colors"
        >
          {drawerOpen ? 'סגור' : copy.cta}
        </button>
      </div>

      {/* Drawer */}
      {drawerOpen && (
        <div className="border-t border-violet-200 bg-white px-4 py-4">
          {submitted ? (
            <div className="text-center py-3">
              <div className="text-emerald-600 font-bold text-base mb-1">נשלח בהצלחה ✓</div>
              <div className="text-sm text-slate-500">ניצור איתך קשר בהקדם לבדיקה ראשונית.</div>
            </div>
          ) : (
            <>
              <p className="text-sm text-slate-600 mb-3 text-right">{copy.text}</p>
              <form onSubmit={handleSubmit} className="space-y-2">
                <input
                  type="text"
                  required
                  placeholder="שם מלא"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm text-right focus:outline-none focus:border-violet-400"
                />
                <input
                  type="tel"
                  required
                  placeholder="טלפון"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm text-right focus:outline-none focus:border-violet-400"
                />
                <p className="text-xs text-slate-400 text-right">
                  בלחיצה על שלח אתה מאשר/ת ליצור איתך קשר
                </p>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-violet-600 hover:bg-violet-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-2 rounded-lg text-sm transition-colors"
                >
                  {submitting ? 'שולח...' : 'שלח'}
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
}

import { useState } from 'react';
import { Icons } from './icons';
import { recoveryDaysByYears } from '../utils/calculator';

/**
 * Benefit toggles card — lets the user choose which employer-side benefits
 * to include in the "total economic value" figure.
 * Also contains the recovery-pay seniority input.
 */
export default function BenefitToggles({
  R, contract,
  inclIns,   setInclIns,
  inclSF,    setInclSF,
  inclPens,  setInclPens,
  inclRec,   setInclRec,
  inclCloth, setInclCloth,
  inclGifts, setInclGifts,
  recoveryYears, setRecYears,
}) {
  const fmt = n => Math.round(n).toLocaleString('he-IL');

  const Toggle = ({ label, sub, value, checked, onChange, icon: Icon = null }) => (
    <label className={`flex items-center justify-between p-3 bg-white rounded-lg border-2 transition-all cursor-pointer ${
      checked ? 'border-amber-400 bg-amber-50' : 'border-slate-200 hover:border-amber-300'
    }`}>
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox" checked={checked}
          onChange={e => onChange(e.target.checked)}
          className="w-5 h-5 text-amber-600 rounded border-slate-300 cursor-pointer"
        />
        <div>
          {Icon
            ? <div className="flex items-center gap-2"><Icon c="w-4 h-4 text-slate-400" /><span className="font-medium text-slate-700">{label}</span></div>
            : <span className="font-medium text-slate-700">{label}</span>}
          {sub && <div className="text-xs text-slate-500 mt-0.5">{sub}</div>}
        </div>
      </div>
      <span className={`font-bold font-mono text-lg ${checked ? 'text-emerald-600' : 'text-slate-400'}`}>
        +{fmt(value)} ₪
      </span>
    </label>
  );

  return (
    <div className="space-y-3">
      {/* Insurance + reg-fee refund (single toggle, two values) */}
      <Toggle
        label="החזרי רכב — ביטוח + אגרת רישוי"
        sub={`ביטוח: ${fmt(R.insuranceRefundMonthly)} ₪ | אגרה: ${fmt(R.regFeeRefundMonthly)} ₪`}
        value={R.insuranceRefundMonthly + R.regFeeRefundMonthly}
        checked={inclIns}
        onChange={setInclIns}
        icon={Icons.Car}
      />

      <Toggle
        label={`קרן השתלמות מעסיק (${(contract.studyFundEmployer * 100).toFixed(1)}%)`}
        sub="נצבר בחיסכון לטווח ארוך"
        value={R.studyFundEmployer}
        checked={inclSF}
        onChange={setInclSF}
        icon={Icons.Pig}
      />

      <Toggle
        label={`הפרשת מעסיק לפנסיה (${(contract.pensionEmployer * 100).toFixed(0)}%)`}
        sub="כולל פיצויים (8.33%)"
        value={R.pensionEmployer}
        checked={inclPens}
        onChange={setInclPens}
        icon={Icons.Pig}
      />

      {/* Recovery pay with seniority input */}
      <div className={`p-3 rounded-xl border-2 transition-all ${
        inclRec ? 'bg-white border-amber-400 bg-amber-50' : 'bg-slate-50 border-slate-200 opacity-70'
      }`}>
        <div className="flex items-center justify-between mb-2">
          <label className="flex items-center gap-3 cursor-pointer flex-1">
            <input
              type="checkbox" checked={inclRec}
              onChange={e => setInclRec(e.target.checked)}
              className="w-5 h-5 text-amber-600 rounded border-slate-300"
            />
            <div>
              <div className="font-medium text-slate-700">דמי הבראה</div>
              <div className="text-xs text-slate-500">
                {R.recoveryDays} ימים × 350 ₪ ÷ 12 = <strong>{fmt(R.recoveryPay)} ₪/חודש</strong>
              </div>
            </div>
          </label>
          <span className={`font-bold font-mono text-lg ${inclRec ? 'text-emerald-600' : 'text-slate-400'}`}>
            +{fmt(R.recoveryPay)} ₪
          </span>
        </div>
        <div className="flex items-center gap-2 pr-8">
          <label className="text-xs text-slate-500 shrink-0">ותק בשירות:</label>
          <input
            type="number" min="0" max="40" value={recoveryYears}
            onChange={e => setRecYears(Math.max(0, Number(e.target.value)))}
            className="w-16 text-center border border-slate-300 rounded-lg py-1 text-sm font-bold focus:ring-2 focus:ring-amber-400 focus:border-amber-400 bg-white"
          />
          <span className="text-xs text-slate-500">שנים</span>
          <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-semibold mr-auto">
            {R.recoveryDays} ימי הבראה
          </span>
        </div>
      </div>

      <Toggle
        label="דמי ביגוד (206 ₪/חודש)"
        sub="עדכון 2024"
        value={R.clothing}
        checked={inclCloth}
        onChange={setInclCloth}
      />

      <Toggle
        label="מתנות לחגים"
        value={R.gifts}
        checked={inclGifts}
        onChange={setInclGifts}
      />

      {/* Total economic value summary */}
      <div className="mt-4 p-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl text-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-emerald-100 text-sm mb-1">שווי כלכלי כולל</div>
            <div className="text-3xl font-bold">{fmt(R.totalEconomicValue)} ₪</div>
            <div className="text-emerald-100 text-xs mt-1">לחודש (לפי הבחירה שלך)</div>
          </div>
          <Icons.Trend c="w-16 h-16 text-emerald-200 opacity-40" />
        </div>
      </div>
    </div>
  );
}

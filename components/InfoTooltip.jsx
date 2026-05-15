'use client';
import { useState, useRef, useEffect } from 'react';

export default function InfoTooltip({ content, title }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => { document.removeEventListener('mousedown', handler); document.removeEventListener('touchstart', handler); };
  }, [open]);

  return (
    <span ref={ref} className="relative inline-flex items-center">
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className="w-4 h-4 rounded-full bg-slate-200 hover:bg-blue-500 text-slate-500 hover:text-white flex items-center justify-center transition-all flex-shrink-0 text-[10px] font-black leading-none"
        aria-label="מידע"
      >
        i
      </button>
      {open && (
        <div className="absolute z-50 bottom-full right-0 mb-2 w-72 bg-white border border-slate-200 rounded-2xl shadow-xl p-4 text-right" style={{minWidth:'240px',maxWidth:'320px'}}>
          {title && <div className="text-sm font-bold text-slate-800 mb-2 border-b border-slate-100 pb-2">{title}</div>}
          <div className="text-xs text-slate-600 leading-relaxed whitespace-pre-line">{content}</div>
          <button onClick={() => setOpen(false)} className="absolute top-2 left-2 text-slate-400 hover:text-slate-700 text-xs">✕</button>
        </div>
      )}
    </span>
  );
}

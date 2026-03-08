'use client';

import { useState, useEffect } from 'react';

export default function StickyContactBar({ contractColor }) {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const anchor = document.getElementById('contact-anchor');
      if (anchor) {
        const rect = anchor.getBoundingClientRect();
        setAtBottom(rect.top < window.innerHeight);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const color = contractColor || 'from-blue-600 to-indigo-700';

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${atBottom ? 'opacity-0 pointer-events-none translate-y-2' : 'opacity-100'}`}>
      <div className={`bg-gradient-to-l ${color} shadow-2xl border-t border-white/10`}>
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-white">
              <div className="text-xs font-bold leading-tight">מחשבון שכר — שירות המדינה</div>
              <div className="text-xs opacity-70 leading-tight">עדכני לשנת 2025</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a href="mailto:yehoda.sadaay@gmail.com" title="מייל"
              className="w-8 h-8 rounded-lg bg-white/15 hover:bg-white/30 flex items-center justify-center transition-all relative group">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">yehoda.sadaay@gmail.com</span>
            </a>
            <a href="tel:0506202972" title="טלפון"
              className="w-8 h-8 rounded-lg bg-white/15 hover:bg-white/30 flex items-center justify-center transition-all relative group">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">050-620-2972</span>
            </a>
            <a href="https://linkedin.com/in/יהודה-סעדיה-628161214" target="_blank" rel="noopener noreferrer" title="לינקדין"
              className="w-8 h-8 rounded-lg bg-white/15 hover:bg-white/30 flex items-center justify-center transition-all relative group">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">יהודה סעדיה</span>
            </a>
            <div className="h-5 w-px bg-white/20 mx-1" />
            <div className="text-white/80 text-xs">© <span className="font-semibold text-white">יהודה סעדיה</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

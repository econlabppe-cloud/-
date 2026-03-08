'use client';

import { useState, useMemo } from 'react';

export default function ContractSelector({ contracts, groups, contractId, setContractId }) {
  const [openGroups, setOpenGroups] = useState(() => {
    const active = {};
    Object.entries(groups).forEach(([g, ids]) => {
      active[g] = ids.includes(contractId);
    });
    return active;
  });
  const [search, setSearch] = useState('');

  const toggleGroup = (g) => setOpenGroups(prev => ({ ...prev, [g]: !prev[g] }));

  const searchResults = useMemo(() => {
    if (!search.trim()) return null;
    const q = search.trim().toLowerCase();
    return Object.entries(contracts)
      .filter(([id, ct]) =>
        id.includes(q) ||
        ct.name.toLowerCase().includes(q) ||
        ct.shortName.toLowerCase().includes(q)
      )
      .slice(0, 20);
  }, [search, contracts]);

  const handleSelect = (id) => { setContractId(id); setSearch(''); };

  const contract = contracts[contractId];

  return (
    <div>
      {/* Search bar */}
      <div className="relative mb-3">
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="חפש לפי מספר דירוג או שם..."
          className="w-full pr-9 pl-4 py-2.5 bg-white border-2 border-slate-200 rounded-xl text-sm text-right focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all"
        />
        {search && (
          <button onClick={() => setSearch('')} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">✕</button>
        )}
      </div>

      {/* Search results */}
      {searchResults && (
        <div className="mb-3">
          {searchResults.length === 0 ? (
            <div className="text-center py-3 text-slate-400 text-sm bg-slate-50 rounded-xl border border-slate-200">לא נמצאו תוצאות</div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1.5 max-h-60 overflow-y-auto">
              {searchResults.map(([id, ct]) => (
                <button key={id} onClick={() => handleSelect(id)}
                  className={`p-2.5 rounded-xl border-2 text-right transition-all contract-btn ${
                    contractId === id
                      ? `${ct.btnActive} text-white border-transparent shadow-md`
                      : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50'
                  }`}>
                  <div className={`text-xs font-mono mb-0.5 ${contractId === id ? 'opacity-75' : 'text-blue-500 font-bold'}`}>{id}</div>
                  <div className="text-xs font-semibold leading-tight">{ct.shortName}</div>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Group accordions */}
      {!searchResults && Object.entries(groups).map(([groupName, ids]) => {
        const isOpen = openGroups[groupName];
        const hasActive = ids.includes(contractId);
        const availableIds = ids.filter(id => contracts[id]);
        if (availableIds.length === 0) return null;
        return (
          <div key={groupName} className="mb-1.5 border border-slate-200 rounded-xl overflow-hidden">
            <button
              onClick={() => toggleGroup(groupName)}
              className={`w-full flex items-center justify-between px-3 py-2.5 text-right transition-all ${
                hasActive
                  ? `bg-gradient-to-l ${contract?.color || 'from-blue-600 to-indigo-700'} text-white`
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
              }`}>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm">{groupName}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${hasActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'}`}>
                  {availableIds.length}
                </span>
                {hasActive && contract && (
                  <span className="text-xs bg-white/25 px-2 py-0.5 rounded-full font-semibold">✓ {contract.shortName}</span>
                )}
              </div>
              <span className={`text-base transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} ${hasActive ? 'text-white/80' : 'text-slate-400'}`}>▾</span>
            </button>
            {isOpen && (
              <div className="p-2 bg-white grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-1.5">
                {availableIds.map(id => {
                  const ct = contracts[id];
                  if (!ct) return null;
                  return (
                    <button key={id} onClick={() => setContractId(id)}
                      className={`contract-btn p-2 rounded-lg border-2 text-right transition-all ${
                        contractId === id
                          ? `${ct.btnActive} text-white border-transparent shadow-md`
                          : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50'
                      }`}>
                      <div className={`text-xs font-mono mb-0.5 ${contractId === id ? 'opacity-75' : 'text-blue-500 font-bold'}`}>{id}</div>
                      <div className="text-xs font-semibold leading-tight">{ct.shortName}</div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

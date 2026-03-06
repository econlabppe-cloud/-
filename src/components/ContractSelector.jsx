import { useState, useMemo } from 'react';
import { CONTRACTS } from '../data/contracts';
import { CONTRACT_GROUPS } from '../data/contractGroups';
import { Icons } from './icons';

/**
 * Accordion-style contract selector with a live search bar.
 * Matching is done against `shortName`, `name`, and `number`.
 */
export default function ContractSelector({ contractId, setContractId }) {
  const contract = CONTRACTS[contractId];

  // Track which accordion groups are expanded
  const [openGroups, setOpenGroups] = useState(() => {
    const initial = {};
    Object.entries(CONTRACT_GROUPS).forEach(([g, ids]) => {
      initial[g] = ids.includes(contractId);
    });
    return initial;
  });

  const [search, setSearch] = useState('');

  // Filtered view when search is active
  const filteredContracts = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return null; // null means "no filter"
    return Object.values(CONTRACTS).filter(c =>
      c.number.includes(q) ||
      c.shortName.toLowerCase().includes(q) ||
      c.name.toLowerCase().includes(q)
    );
  }, [search]);

  const toggleGroup = (g) =>
    setOpenGroups(prev => ({ ...prev, [g]: !prev[g] }));

  // Auto-expand groups that contain the active contract when search clears
  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearch(val);
    if (!val) {
      // Re-open the group of the currently selected contract
      setOpenGroups(prev => {
        const next = { ...prev };
        Object.entries(CONTRACT_GROUPS).forEach(([g, ids]) => {
          if (ids.includes(contractId)) next[g] = true;
        });
        return next;
      });
    }
  };

  const handleSelect = (id) => {
    setContractId(id);
    setSearch('');
    // Expand the group that contains this id
    setOpenGroups(prev => {
      const next = { ...prev };
      Object.entries(CONTRACT_GROUPS).forEach(([g, ids]) => {
        if (ids.includes(id)) next[g] = true;
      });
      return next;
    });
  };

  const ContractButton = ({ id }) => {
    const ct = CONTRACTS[id];
    if (!ct) return null;
    const isActive = contractId === id;
    return (
      <button
        key={id}
        onClick={() => handleSelect(id)}
        className={`p-2 rounded-lg border-2 text-right transition-all hover:-translate-y-0.5 ${
          isActive
            ? `${ct.btnActive} text-white border-transparent shadow-md`
            : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-white'
        }`}
      >
        <div className={`text-xs mb-0.5 font-mono ${isActive ? 'opacity-70' : 'text-slate-400'}`}>{id}</div>
        <div className="text-xs font-bold leading-tight">{ct.shortName}</div>
      </button>
    );
  };

  return (
    <div>
      {/* ── Active contract banner ── */}
      <div className={`mb-4 p-3 bg-gradient-to-l ${contract.color} rounded-xl text-white flex items-center justify-between`}>
        <div>
          <div className="text-xs opacity-80">נבחר כעת</div>
          <div className="font-bold text-sm">{contract.name}</div>
        </div>
        <div className="text-xl font-extrabold opacity-70">#{contract.number}</div>
      </div>

      {/* ── Search bar ── */}
      <div className="relative mb-4">
        <Icons.Search c="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="חפש דירוג לפי שם או מספר..."
          className="w-full bg-slate-50 border-2 border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 rounded-xl py-2.5 pr-9 pl-4 text-sm placeholder-slate-400 transition-all outline-none"
          dir="rtl"
        />
        {search && (
          <button
            onClick={() => handleSearchChange({ target: { value: '' } })}
            className="absolute left-3 top-2.5 text-slate-400 hover:text-red-400 transition-colors"
          >
            <Icons.X c="w-4 h-4" />
          </button>
        )}
      </div>

      {/* ── Search results ── */}
      {filteredContracts !== null ? (
        <div>
          {filteredContracts.length === 0 ? (
            <div className="text-center py-8 text-slate-400 text-sm">
              לא נמצאו דירוגים תואמים לחיפוש &ldquo;{search}&rdquo;
            </div>
          ) : (
            <div>
              <div className="text-xs text-slate-500 mb-2">
                נמצאו {filteredContracts.length} דירוגים
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-1.5">
                {filteredContracts.map(ct => (
                  <ContractButton key={ct.number} id={ct.number} />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        /* ── Accordion groups ── */
        Object.entries(CONTRACT_GROUPS).map(([groupName, ids]) => {
          const isOpen    = openGroups[groupName];
          const hasActive = ids.includes(contractId);
          const available = ids.filter(id => CONTRACTS[id]);

          return (
            <div key={groupName} className="mb-2 border border-slate-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleGroup(groupName)}
                className={`w-full flex items-center justify-between px-3 py-2.5 text-right transition-all ${
                  hasActive
                    ? `bg-gradient-to-l ${contract.color} text-white`
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm">{groupName}</span>
                  <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                    hasActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-500'
                  }`}>
                    {available.length}
                  </span>
                  {hasActive && (
                    <span className="text-xs bg-white/25 px-2 py-0.5 rounded-full">
                      ✓ {contract.shortName}
                    </span>
                  )}
                </div>
                <span className={`text-lg transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                } ${hasActive ? 'text-white' : 'text-slate-400'}`}>
                  ▾
                </span>
              </button>

              {isOpen && (
                <div className="p-2 bg-white grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-1.5">
                  {ids.map(id => <ContractButton key={id} id={id} />)}
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}

import { useEffect, useCallback } from 'react';

/**
 * Bidirectional sync between React state and URL query parameters.
 *
 * Usage:
 *   const { readParam, writeParams } = useUrlSync();
 *
 * On mount, callers should call readParam() to hydrate state from the URL.
 * Whenever state changes, call writeParams(stateMap) to push to the URL.
 *
 * Primitive types supported: string, number, boolean, and JSON arrays/objects.
 */
export function useUrlSync() {
  /**
   * Read a single value from the current URL search params.
   * @param {string} key
   * @param {*}      defaultValue  Used to infer the expected type.
   */
  const readParam = useCallback((key, defaultValue) => {
    const sp = new URLSearchParams(window.location.search);
    if (!sp.has(key)) return defaultValue;

    const raw = sp.get(key);
    try {
      const type = typeof defaultValue;
      if (type === 'number')  return Number(raw);
      if (type === 'boolean') return raw === 'true';
      if (Array.isArray(defaultValue) || (type === 'object' && defaultValue !== null)) {
        return JSON.parse(raw);
      }
      return raw;
    } catch {
      return defaultValue;
    }
  }, []);

  /**
   * Write a flat key→value map to the URL (replaces only those keys).
   * Complex values (arrays/objects) are JSON-serialised.
   * @param {Record<string, *>} stateMap
   */
  const writeParams = useCallback((stateMap) => {
    const sp = new URLSearchParams(window.location.search);

    for (const [key, value] of Object.entries(stateMap)) {
      if (value === null || value === undefined) {
        sp.delete(key);
        continue;
      }
      const serialised =
        typeof value === 'object' ? JSON.stringify(value) : String(value);
      sp.set(key, serialised);
    }

    const newUrl = `${window.location.pathname}?${sp.toString()}`;
    window.history.replaceState(null, '', newUrl);
  }, []);

  return { readParam, writeParams };
}

// ─────────────────────────────────────────────────────────────────────────────
// Serialisation helpers for the calculator's full state object
// ─────────────────────────────────────────────────────────────────────────────

/** Keys that map directly to URL params (primitives). */
const PRIMITIVE_KEYS = [
  'contractId', 'gradeId',
  'overtimeHours', 'eveningShiftHours',
  'carType',
  'insuranceCost', 'vehicleRegFee', 'travelAllowance',
  'childrenUnder5', 'children6to18',
  'gender',
  'hasDegree', 'partnerWorks',
  'miluimDays',
  'companyCar', 'companyCarGroup',
  'oncallCount', 'premiumHours', 'premiumPct',
  'recoveryYears',
  'inclMaonot',
  'inclIns', 'inclSF', 'inclPens', 'inclRec', 'inclCloth', 'inclGifts',
];

/** Keys that hold objects/arrays and must be JSON-serialised. */
const COMPLEX_KEYS = ['childrenAges'];

/**
 * Build a complete URL-serialisable snapshot of the calculator state.
 * @param {object} state  The full state object from App.
 */
export function stateToParams(state) {
  const out = {};
  for (const k of PRIMITIVE_KEYS) {
    if (k in state) out[k] = state[k];
  }
  for (const k of COMPLEX_KEYS) {
    if (k in state && state[k] !== undefined) out[k] = state[k];
  }
  return out;
}

/**
 * Hydrate a partial state from URL params.
 * @param {object} defaults  The default state values (used for type inference).
 */
export function paramsToState(defaults) {
  const sp = new URLSearchParams(window.location.search);
  if (!sp.size) return {};

  const out = {};
  for (const k of PRIMITIVE_KEYS) {
    if (!sp.has(k)) continue;
    const raw = sp.get(k);
    const def = defaults[k];
    const type = typeof def;
    if (type === 'number')  { out[k] = Number(raw);          continue; }
    if (type === 'boolean') { out[k] = raw === 'true';        continue; }
    out[k] = raw;
  }
  for (const k of COMPLEX_KEYS) {
    if (!sp.has(k)) continue;
    try { out[k] = JSON.parse(sp.get(k)); } catch { /* ignore */ }
  }
  return out;
}

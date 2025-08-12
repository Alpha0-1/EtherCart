/**
 * Minimal IndexedDB wrapper (stub).
 */
export const idb = {
  async put(store, key, value) { return { ok: true, store, key, value }; },
  async get(store, key) { return null; }
};


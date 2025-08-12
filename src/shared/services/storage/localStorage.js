const NS = 'ethercart:';
export const lsGet = (k, d = null) => {
  try { return JSON.parse(localStorage.getItem(NS + k)) ?? d; } catch { return d; }
};
export const lsSet = (k, v) => localStorage.setItem(NS + k, JSON.stringify(v));
export const lsDel = (k) => localStorage.removeItem(NS + k);


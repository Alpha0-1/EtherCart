export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
export const invariant = (cond, msg = 'Invariant violation') => { if (!cond) throw new Error(msg); };


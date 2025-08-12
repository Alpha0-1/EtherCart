export function safeAsync(fn) {
  return async (...args) => {
    try { return [await fn(...args), null]; }
    catch (e) { console.error(e); return [null, e]; }
  };
}


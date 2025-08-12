/**
 * Naive encryption placeholders (replace with robust crypto).
 */
export const encode = (s) => btoa(unescape(encodeURIComponent(s)));
export const decode = (s) => decodeURIComponent(escape(atob(s)));


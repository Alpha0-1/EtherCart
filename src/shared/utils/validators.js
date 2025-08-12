export const isAddress = (a) => /^0x[a-fA-F0-9]{40}$/.test(a);
export const isPositive = (n) => Number(n) > 0;


import { lsGet, lsSet, lsDel } from './localStorage.js';
import { idb } from './indexedDB.js';

export const storage = {
  get: lsGet,
  set: lsSet,
  del: lsDel,
  idb
};


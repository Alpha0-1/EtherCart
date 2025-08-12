/**
 * Simple API client with base URL and auth header support.
 */
const BASE = '/api'; // Replace with your backend URL
export async function api(path, opts = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(opts.headers || {}) },
    ...opts
  });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}


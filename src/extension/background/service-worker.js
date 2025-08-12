/**
 * @file service-worker.js
 * @brief MV3 service worker: routes wallet actions, price fetches, and messaging.
 */

const PRICE_CACHE_TTL_MS = 30_000;
let lastPrice = null;
let lastPriceAt = 0;

/**
 * Fetch ETH-USD price with basic caching.
 */
async function fetchEthUsd() {
  const now = Date.now();
  if (lastPrice && now - lastPriceAt < PRICE_CACHE_TTL_MS) return lastPrice;
  try {
    const res = await fetch('https://api.coinbase.com/v2/prices/ETH-USD/spot');
    const json = await res.json();
    lastPrice = Number(json?.data?.amount || 0);
    lastPriceAt = now;
  } catch (e) {
    console.error('Price fetch failed', e);
  }
  return lastPrice ?? 0;
}

/**
 * Message router for content scripts and popup.
 */
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  (async () => {
    if (message?.type === 'GET_ETH_USD') {
      const price = await fetchEthUsd();
      sendResponse({ ok: true, price });
    } else if (message?.type === 'PING') {
      sendResponse({ ok: true, ts: Date.now() });
    } else {
      sendResponse({ ok: false, error: 'Unknown message type' });
    }
  })();
  // Return true to indicate async response
  return true;
});


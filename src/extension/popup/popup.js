/**
 * @file popup.js
 * @brief Popup UI enabling quick wallet connect and diagnostics.
 */
const btn = document.getElementById('connect');
const status = document.getElementById('status');

btn?.addEventListener('click', async () => {
  status.textContent = 'Status: Connecting…';
  try {
    // Here you would trigger injected provider (MetaMask) or relay via background
    const resp = await chrome.runtime.sendMessage({ type: 'PING' });
    if (resp?.ok) status.textContent = 'Status: Connected';
    else status.textContent = 'Status: Error';
  } catch (e) {
    status.textContent = 'Status: Failed';
    console.error(e);
  }
});


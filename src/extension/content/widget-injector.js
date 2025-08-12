/**
 * @file widget-injector.js
 * @brief Creates a floating container and bootstraps a minimal UI (no framework dependency).
 */

/* Create container */
const ID = 'ethercart-floating-widget';
if (!document.getElementById(ID)) {
  const container = document.createElement('div');
  container.id = ID;
  container.style.position = 'fixed';
  container.style.bottom = '24px';
  container.style.right = '24px';
  container.style.zIndex = '2147483647';
  container.style.fontFamily = 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif';
  container.style.background = 'linear-gradient(135deg, #111827, #1f2937)';
  container.style.color = '#F9FAFB';
  container.style.borderRadius = '14px';
  container.style.boxShadow = '0 12px 32px rgba(0,0,0,0.35)';
  container.style.width = '340px';
  container.style.maxWidth = 'calc(100vw - 32px)';
  container.style.overflow = 'hidden';
  container.style.border = '1px solid rgba(255,255,255,0.08)';

  container.innerHTML = `
    <div style="padding: 12px 14px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08);">
      <strong>EtherCart</strong>
      <button id="ethercart-close" aria-label="Close"
        style="background:transparent;border:none;color:#9CA3AF;cursor:pointer;font-size:14px;">✕</button>
    </div>
    <div style="padding: 14px;">
      <div id="ethercart-price" style="font-size:13px;color:#9CA3AF;margin-bottom:8px;">Loading price…</div>
      <div style="display:flex; gap:8px;">
        <button id="ethercart-buy" style="flex:1;padding:10px 12px;border-radius:10px;border:1px solid rgba(255,255,255,0.1);background:#10B981;color:#062; background:linear-gradient(135deg,#10B981,#22C55E);color:#042; font-weight:600; cursor:pointer;">Buy</button>
        <button id="ethercart-sell" style="flex:1;padding:10px 12px;border-radius:10px;border:1px solid rgba(255,255,255,0.1);background:linear-gradient(135deg,#6366F1,#8B5CF6);color:#0B032B; font-weight:600; cursor:pointer;">Sell</button>
        <button id="ethercart-wallet" style="padding:10px 12px;border-radius:10px;border:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.04);color:#E5E7EB; cursor:pointer;">Wallet</button>
      </div>
    </div>
  `;
  document.body.appendChild(container);

  /* Events */
  document.getElementById('ethercart-close')?.addEventListener('click', () => container.remove());
  window.addEventListener('ethercart:price', (e) => {
    const price = e.detail;
    const el = document.getElementById('ethercart-price');
    if (el) el.textContent = `ETH ≈ $${Number(price).toFixed(2)} USD`;
  });
  document.getElementById('ethercart-wallet')?.addEventListener('click', () => {
    alert('Connect wallet (MetaMask / WalletConnect) – stub');
  });
  document.getElementById('ethercart-buy')?.addEventListener('click', () => {
    alert('Open checkout (Crypto / Stripe) – stub');
  });
  document.getElementById('ethercart-sell')?.addEventListener('click', () => {
    alert('List product – stub');
  });
}


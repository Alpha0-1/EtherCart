/**
 * Initialize and expose a lazy web3 provider (ethers.js placeholder).
 */
export async function getProvider() {
  if (!window.ethereum) throw new Error('No injected provider found (MetaMask).');
  // In real impl: return new ethers.BrowserProvider(window.ethereum)
  return window.ethereum;
}


/**
 * Ethereum utility helpers (connect, sign, send).
 */
export async function connectWallet() {
  const { ethereum } = window;
  if (!ethereum) throw new Error('No wallet found');
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  return accounts[0];
}
export async function signMessage(message) {
  const { ethereum } = window;
  return ethereum.request({ method: 'personal_sign', params: [message, (await connectWallet())] });
}


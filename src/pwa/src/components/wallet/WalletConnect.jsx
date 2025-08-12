import React, { useState } from 'react';

export default function WalletConnect() {
  const [addr, setAddr] = useState(null);
  async function connect() {
    try {
      const { ethereum } = window;
      if (!ethereum) return alert('MetaMask not found.');
      const [account] = await ethereum.request({ method: 'eth_requestAccounts' });
      setAddr(account);
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <div>
      <button onClick={connect}>{addr ? 'Connected' : 'Connect Wallet'}</button>
      {addr && <div>Address: {addr}</div>}
    </div>
  );
}


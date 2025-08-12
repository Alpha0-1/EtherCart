import { useEffect, useState } from 'react';

export function useWeb3() {
  const [account, setAccount] = useState(null);
  useEffect(() => {
    const { ethereum } = window;
    if (!ethereum) return;
    ethereum.on?.('accountsChanged', (accs) => setAccount(accs[0] || null));
  }, []);
  return { account, setAccount };
}


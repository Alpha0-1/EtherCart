import { useWeb3 } from './useWeb3.js';

export function useWallet() {
  const { account, setAccount } = useWeb3();
  const connect = async () => {
    const { ethereum } = window;
    const [acc] = await ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(acc);
  };
  return { account, connect };
}


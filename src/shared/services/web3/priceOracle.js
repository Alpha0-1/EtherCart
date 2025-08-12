/**
 * Fetch ETH/USD price.
 */
export async function getEthUsd() {
  const res = await fetch('https://api.coinbase.com/v2/prices/ETH-USD/spot');
  const json = await res.json();
  return Number(json?.data?.amount || 0);
}


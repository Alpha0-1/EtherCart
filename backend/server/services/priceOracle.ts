import axios from 'axios';
import { getRedis } from '../config/redis';

const COINGECKO_API = 'https://api.coingecko.com/api/v3/simple/price';
const CACHE_KEY = 'eth_price_usd';
const TTL = 60; // 1 minute

export const fetchEthPrice = async (): Promise<number> => {
  try {
    const response = await axios.get(COINGECKO_API, {
      params: { ids: 'ethereum', vs_currencies: 'usd' }
    });
    return response.data.ethereum.usd;
  } catch (err) {
    console.error('Failed to fetch ETH price');
    return 0;
  }
};

export const getCachedEthPrice = async (): Promise<number> => {
  const redis = getRedis();
  const cached = await redis.get(CACHE_KEY);
  if (cached) return parseFloat(cached);

  const price = await fetchEthPrice();
  if (price > 0) await redis.setex(CACHE_KEY, TTL, price.toString());
  return price;
};

export const startPriceUpdater = () => {
  setInterval(async () => {
    const price = await fetchEthPrice();
    if (price > 0) {
      const redis = getRedis();
      await redis.setex(CACHE_KEY, TTL, price.toString());
      console.log(`📊 ETH/USD updated: $${price}`);
    }
  }, 60000); // Every 60s
};

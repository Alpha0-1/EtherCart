import Redis from 'ioredis';

let redis: Redis;

export const connectRedis = () => {
  redis = new Redis({
    host: process.env.REDIS_HOST || '127.0.0.1',
    port: parseInt(process.env.REDIS_PORT || '6379'),
    password: process.env.REDIS_PASSWORD
  });

  redis.on('connect', () => console.log('✅ Redis connected'));
  redis.on('error', (err) => console.error('❌ Redis error:', err));

  return redis;
};

export const getRedis = () => {
  if (!redis) throw new Error('Redis not initialized');
  return redis;
};

const Redis = require('ioredis');
require('dotenv').config();

const env = process.env;

/**
 * ### Redis factory
 *
 * Return a new `Redis` isntance
 * @param {string} url - If this value is no passed configs will take from envs.
 * @returns {Redis}
 */
const getRedisInstance = (url = null) => {
  if (url) return new Redis(url);
  return new Redis({
    db: env.REDIS_DATABASE || 0,
    port: env.REDIS_PORT || 6379,
    password: env.REDIS_PASSWORD || '',
    host: env.REDIS_HOST || '127.0.0.1',
    username: env.REDIS_USER || 'default',
  });
};

module.exports = {
  getRedisInstance,
};

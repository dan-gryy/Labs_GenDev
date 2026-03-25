function memoize(fn, { maxSize = Infinity, ttl = null } = {}) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    const now = Date.now();

    if (cache.has(key)) {
      const entry = cache.get(key);

      if (!ttl || now - entry.time < ttl) {
        cache.delete(key);
        cache.set(key, entry);
        return entry.value;
      }

      cache.delete(key);
    }

    const value = fn(...args);

    if (cache.size >= maxSize) {
      const oldestKey = cache.keys().next().value;
      cache.delete(oldestKey);
    }

    cache.set(key, {
      value,
      time: now,
    });

    return value;
  };
}

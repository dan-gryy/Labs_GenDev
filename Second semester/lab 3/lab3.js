function memoize(
  fn,
  { maxSize = Infinity, ttl = null, strategy = "lru", evict = null } = {},
) {
  const cache = new Map();

  function removeOne() {
    if (strategy === "custom" && typeof evict === "function") {
      const key = evict(cache);
      if (key !== undefined) cache.delete(key);
      return;
    }

    if (strategy === "lfu") {
      let minKey;
      let minHits = Infinity;

      for (const [key, entry] of cache) {
        if (entry.hits < minHits) {
          minHits = entry.hits;
          minKey = key;
        }
      }

      if (minKey !== undefined) cache.delete(minKey);
      return;
    }

    const oldestKey = cache.keys().next().value;
    cache.delete(oldestKey);
  }

  return function (...args) {
    const key = JSON.stringify(args);
    const now = Date.now();

    if (cache.has(key)) {
      const entry = cache.get(key);

      if (ttl && now - entry.time >= ttl) {
        cache.delete(key);
      } else {
        entry.hits = (entry.hits || 1) + 1;

        if (strategy === "lru") {
          cache.delete(key);
          cache.set(key, entry);
        }

        return entry.value;
      }
    }

    const value = fn(...args);

    if (cache.size >= maxSize) {
      removeOne();
    }

    cache.set(key, {
      value,
      time: now,
      hits: 1,
    });

    return value;
  };
}

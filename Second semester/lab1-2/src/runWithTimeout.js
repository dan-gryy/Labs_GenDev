export function runWithTimeout(iterator, seconds) {
  const end = Date.now() + seconds * 1000;
  let i = 1;

  while (Date.now() < end) {
    const value = iterator.next().value;

    if (typeof value === "string") {
      const now = new Date().toLocaleTimeString();
      console.log(`[${now}] Iter ${i}:`, `color: ${value}`);
    } else {
      console.log(i, value);
    }

    i++;
  }
}
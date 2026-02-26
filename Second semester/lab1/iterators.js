function* colorCycle(colors) {
  let i = 0;
  while (true) {
    yield colors[i];
    i = (i + 1) % colors.length;
  }
}

const gen = colorCycle(["red", "green", "blue"]);
runWithTimeout(gen, 3);
function runWithTimeout(iterator, seconds) {
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

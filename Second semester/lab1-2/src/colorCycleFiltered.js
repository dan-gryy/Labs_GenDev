export function* colorCycleFiltered(colors, predicate) {
  let i = 0;
  while (true) {
    const color = colors[i];
    if (predicate(color)) {
      yield color;
    }
    i = (i + 1) % colors.length;
  }
}
export function* colorCycle(colors) {
  let i = 0;
  while (true) {
    yield colors[i];
    i = (i + 1) % colors.length;
  }
}
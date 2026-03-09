import {
  colorCycle,
  colorCycleFiltered,
  runWithTimeout
} from "lab1-library";

// === Завдання 1 ===
console.log("=== Basic color cycle ===");
const gen1 = colorCycle(["red", "green", "blue"]);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);

// === Завдання 2 ===
console.log("\n=== Filtered color cycle (only colors with 'e') ===");
const gen2 = colorCycleFiltered(["red", "green", "blue"], c => c.includes("e"));
runWithTimeout(gen2, 3);
import { log } from "./logger.js";

class MathService {
  constructor() {
    this.sum = log("INFO", "console")(this.sum, "sum");
    this.divide = log("ERROR", "file")(this.divide, "divide");
  }

  sum(a, b) {
    return a + b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
}

const service = new MathService();

console.log(service.sum(5, 7));

try {
  service.divide(10, 0);
} catch (e) {
  console.log("Error caught in main");
}

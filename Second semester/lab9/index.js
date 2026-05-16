import { log } from "./logger.js";

class UserService {
  constructor() {
    this.getUser = log({
      level: "INFO",
      output: "console",
      formatter: (data) => `CUSTOM LOG -> ${data.name} is executing!`,
    })(this.getUser, "getUser");

    this.loadData = log({
      level: "INFO",
      output: "file",
      json: true,
    })(this.loadData, "loadData");

    this.makeError = log({
      level: "ERROR",
      output: "service",
      onlyErrors: true,
    })(this.makeError, "makeError");
  }

  getUser(name) {
    return { name, age: 18 };
  }

  async loadData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data loaded");
      }, 500);
    });
  }

  makeError() {
    throw new Error("Test error");
  }
}

const service = new UserService();

async function run() {
  console.log(service.getUser("Ilya"));

  await service.loadData();

  try {
    service.makeError();
  } catch (e) {
    console.log("Error saved to service.txt");
  }
}

run();

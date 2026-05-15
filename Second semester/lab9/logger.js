import fs from "fs";

function getTime() {
  return new Date().toISOString();
}

function writeLog(message, output) {
  if (output === "console") {
    console.log(message);
  } else if (output === "file") {
    fs.appendFileSync("logs.txt", message + "\n");
  }
}

export function log(level = "INFO", output = "console") {
  return function (fn, name) {
    return function (...args) {
      const start = Date.now();
      const text = `[${getTime()}] [${level}] Call ${name} with args: ${JSON.stringify(args)}`;

      if (level !== "ERROR") {
        writeLog(text, output);
      }

      try {
        const result = fn.apply(this, args);
        const end = Date.now();
        const resultText = `[${getTime()}] [${level}] ${name} returned: ${JSON.stringify(result)} | Time: ${end - start}ms`;

        if (level !== "ERROR") {
          writeLog(resultText, output);
        }

        return result;
      } catch (error) {
        writeLog(`[${getTime()}] [ERROR] ${name}: ${error.message}`, output);
        throw error;
      }
    };
  };
}

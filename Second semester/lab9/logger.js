import fs from "fs";

function getTime() {
  return new Date().toISOString();
}

function writeLog(message, output) {
  if (output === "console") {
    console.log(message);
  } else if (output === "file") {
    fs.appendFileSync("logs.txt", message + "\n");
  } else if (output === "service") {
    fs.appendFileSync("service.txt", message + "\n");
  }
}

export function log(options = {}) {
  const level = options.level || "INFO";
  const output = options.output || "console";
  const json = options.json || false;
  const onlyErrors = options.onlyErrors || false;

  return function (fn, name) {
    return function (...args) {
      const start = Date.now();

      const logData = (type, data) => {
        const baseData = { time: getTime(), level: type, name, args, ...data };

        if (options.formatter) {
          return options.formatter(baseData);
        }

        if (json) {
          return JSON.stringify(baseData);
        }

        if (type === "ERROR") {
          return `[${baseData.time}] [ERROR] ${name}: ${baseData.error}`;
        }

        if (baseData.result !== undefined) {
          return `[${baseData.time}] [${type}] ${name} finished: ${JSON.stringify(baseData.result)} | Time: ${baseData.time}ms`;
        }

        return `[${baseData.time}] [${type}] ${name} called with: ${JSON.stringify(args)}`;
      };

      if (!onlyErrors && level !== "ERROR") {
        writeLog(logData(level, {}), output);
      }

      try {
        const result = fn.apply(this, args);

        if (result instanceof Promise) {
          return result
            .then((res) => {
              const end = Date.now();
              if (!onlyErrors && level !== "ERROR") {
                writeLog(
                  logData(level, { result: res, time: end - start }),
                  output,
                );
              }
              return res;
            })
            .catch((err) => {
              writeLog(logData("ERROR", { error: err.message }), output);
              throw err;
            });
        }

        const end = Date.now();
        if (!onlyErrors && level !== "ERROR") {
          writeLog(logData(level, { result, time: end - start }), output);
        }

        return result;
      } catch (error) {
        writeLog(logData("ERROR", { error: error.message }), output);
        throw error;
      }
    };
  };
}

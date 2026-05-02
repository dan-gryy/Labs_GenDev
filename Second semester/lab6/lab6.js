const fs = require("fs");
const readline = require("readline");

async function processFile(pathToFile) {
  const stream = fs.createReadStream(pathToFile, { encoding: "utf-8" });

  const rl = readline.createInterface({
    input: stream,
    crlfDelay: Infinity,
  });

  let totalLines = 0;
  let totalWords = 0;
  let longLines = 0;

  for await (let line of rl) {
    totalLines++;

    if (line.length > 20) {
      longLines++;
    }

    const words = line.trim().split(/\s+/);
    totalWords += words.filter((w) => w.length > 0).length;
  }

  console.log("Lines:", totalLines);
  console.log("Words:", totalWords);
  console.log("Long lines:", longLines);
}

processFile(__dirname + '/data.txt');

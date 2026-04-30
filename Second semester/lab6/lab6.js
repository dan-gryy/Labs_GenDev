const fs = require('fs');
const readline = require('readline');

async function processFile(pathToFile) {
    const stream = fs.createReadStream(pathToFile, { encoding: 'utf-8' });

    const rl = readline.createInterface({
        input: stream,
        crlfDelay: Infinity
    });

    for await (let line of rl) {
        console.log(line);
    }
}

processFile('./data.txt');
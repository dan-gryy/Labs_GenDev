// Callback version

function asyncMapCallback(arr, callback, done) {
  let result = [];
  let completed = 0;

  if (arr.length === 0) {
    return done(result);
  }

  arr.forEach((item, index) => {
    setTimeout(() => {
      callback(item, (value) => {
        result[index] = value;
        completed++;

        if (completed === arr.length) {
          done(result);
        }
      });
    }, 300);
  });
}

// Promise version

function asyncMapPromise(arr, callback, signal) {
  return Promise.all(
    arr.map(
      (item) =>
        new Promise((resolve, reject) => {
          if (signal?.aborted) {
            return reject("Aborted");
          }

          setTimeout(() => {
            if (signal?.aborted) {
              return reject("Aborted");
            }

            resolve(callback(item));
          }, 300);
        }),
    ),
  );
}

// Callback demo

asyncMapCallback(
  [1, 2, 3],
  (num, cb) => {
    cb(num * 2);
  },
  (result) => {
    console.log("Callback:", result);
  },
);

// Promise demo

asyncMapPromise([1, 2, 3], (num) => num * 3).then((result) =>
  console.log("Promise:", result),
);

// Async/Await demo

async function runExample() {
  const result = await asyncMapPromise([10, 20, 30], (num) => num + 5);

  console.log("Async/Await:", result);
}

runExample();

// AbortController demo

const controller = new AbortController();

asyncMapPromise([1, 2, 3, 4, 5], (num) => num * 10, controller.signal)
  .then((result) => console.log("Abort demo:", result))
  .catch((error) => console.log("Cancelled:", error));

setTimeout(() => {
  controller.abort();
}, 400);

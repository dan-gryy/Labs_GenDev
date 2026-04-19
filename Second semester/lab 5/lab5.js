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

// Demo 1
asyncMapCallback(
  [1, 2, 3],
  (num, cb) => {
    cb(num * 2);
  },
  (result) => {
    console.log("Demo 1:", result);
  },
);

// Demo 2
asyncMapCallback(
  [5, 10, 15],
  (num, cb) => {
    cb(num + 1);
  },
  (result) => {
    console.log("Demo 2:", result);
  },
);

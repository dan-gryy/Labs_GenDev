const obj = { a: 1, b: 2, c: 3 };
function iterate(obj, callback) {
  for (let key in obj) {
    callback(key, obj[key]);
  }
  return obj;
}
iterate(obj, (key, value) => {
  console.log({ key, value });
});

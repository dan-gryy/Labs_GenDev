//Функція iterate приймає об'єкт і функцію зворотного виклику (callback). Вона ітерує ключі об'єкта і викликає callback для кожної пари ключ-значення.

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

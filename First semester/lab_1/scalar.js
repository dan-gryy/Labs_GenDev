//Функція збільшує число на 10

function inc(n) {
  return n + 10;
}
const x = 42;
const y = inc(x);
console.dir({ x, y });

//Функція збільшує поле об'єкту на 100

function incObject(obj) {
  obj.n += 100;
  console.dir(obj);
}
obj = {
  n: 10,
  y: 990,
};
incObject(obj);

//Функція, яка приймає будь-яку кількість чисел і повертає їх суму, використовуючи метод reduce

const a = sum(1, 2, 3);
const b = sum(0);
const c = sum();
const d = sum(1, -1, 1);
const e = sum(10, -1, -1, -1);

function sum(...args) {
  return args.reduce((result, value) => result + value, 0);
}
console.log(a, b, c, d, e);

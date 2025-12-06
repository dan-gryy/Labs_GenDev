//Функція, яка приймає будь-яку кількість чисел і повертає їх суму, використовуючи цикл for

const a = sum(1, 2, 3);
const b = sum(0);
const c = sum();
const d = sum(1, -1, 1);
const e = sum(10, -1, -1, -1);

function sum(...args) {
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
}
console.log(a, b, c, d, e);

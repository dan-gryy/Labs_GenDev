//Функція, яка приймає двовимірний масив чисел і повертає найбільше число серед усіх елементів масиву

const m = max([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

function max(array) {
  return array.flat().reduce((a, b) => Math.max(a, b));
}
console.log(m);

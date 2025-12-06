//Функція store приймає значення і повертає функцію, яка при виклику повертає це значення.

const read = store(5);
const value = read();
function store(value) {
  return function () {
    return value;
  };
}
console.log(value);

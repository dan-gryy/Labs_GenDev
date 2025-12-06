//Функція, яка приймає функцію та типи аргументів і результату, якщо типи не збігаються з очікуваними (наприклад, Number, String), викидається TypeError

const contract =
  (fn, ...types) =>
  (...args) => {
    for (let i = 0; i < types.length; i++) {
      const arg = args[i];
      const type = types[i];
      const name = type.name.toLowerCase();
      if (typeof arg !== name) {
        throw new TypeError(`Argument ${i} must be of type ${name}`);
      }
      const result = fn(...args);
      if (typeof result !== name) {
        throw new TypeError(`Result must be of type ${name}`);
      }
      return result;
    }
  };
const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.dir(res);

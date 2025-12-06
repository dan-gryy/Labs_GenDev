//Функція, яка приймає масив і рахує кількість елементів кожного типу (number, string, boolean).

const Array = [
  1,
  "two",
  3,
  "four",
  true,
  "hello",
  5,
  12,
  -200,
  false,
  "word",
  -199,
  "apple",
  42,
  "river",
  7,
  "sun",
  "cloud",
  0,
];
const Types = { number: 0, string: 0, boolean: 0 };
function countTypes(array) {
  for (const item of array) {
    const type = typeof item;
    if (type in Types) {
      Types[type]++;
    }
  }
}
countTypes(Array);
console.dir(Types);

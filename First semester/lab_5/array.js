//Функція array, яка повертає функцію для доступу до елементів масиву за індексом, а також має методи push та pop для додавання та видалення елементів з кінця масиву.

const array = () => {
  const arr = [];
  const get = (index) => arr[index];
  get.pop = () => arr.pop();
  get.push = (x) => arr.push(x);
  return get;
};
const arr = array();

arr.push("first");
arr.push("second");
arr.push("third");

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

console.log(arr.pop());

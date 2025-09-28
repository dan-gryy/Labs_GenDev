//Функція видаляє обраний елемент в масиві

let array = [
  "Kiev",
  "Beijing",
  "Lima",
  "Saratov",
  "Lviv",
  "New York",
  "barcelona",
  "London",
];
const removeElement = (arr, item) => {
  return arr.filter((element) => element !== item);
};
array = removeElement(array, "Saratov"); // Видаляє місто Саратов
array = removeElement(array, "Paris"); // Не видаляє Париж, адже його немає в масиві
console.log(array);

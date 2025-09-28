//Функція видаляє обраний елемент в масиві

let array = [
  "Kiev",
  "Beijing",
  "Lima",
  "Saratov",
  "Lviv",
  "New York",
  "Barcelona",
  "London",
];
const removeElement = (arr, items) => {
  return arr.filter((element) => !items.includes(element));
};
array = removeElement(array, ["Saratov", "London", "Lviv", "Barcelona"]); // Видаляє місто Саратов, Лондон, Львів та Барселону
array = removeElement(array, "Paris"); // Не видаляє Париж, адже його немає в масиві
console.log(array);

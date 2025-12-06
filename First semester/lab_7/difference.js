//Функція difference приймає два масиви і повертає новий масив, який містить елементи, що є в першому масиві, але відсутні у другому.

const array1 = ["Beijing", "Kiev", "Lima", "Lviv", "Berlin", "New York"];
const array2 = ["Kiev", "London", "Baghdad", "Madrid", "Tokyo"];
const result = difference(array1, array2);
function difference(arr1, arr2) {
  return arr1.filter((element) => !arr2.includes(element));
}
console.log(result);

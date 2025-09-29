//Функція unique приймає масив і повертає новий масив, який містить лише унікальні значення з вхідного масиву.

const result = unique([2, 1, 1, 3, 2, 1, 3, 5]);
function unique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}
console.log(result);

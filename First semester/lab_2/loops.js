//функція, яка приймає два числа (початок і кінець діапазону) і повертає масив усіх чисел у цьому діапазоні включно

function range(start, end) {
  let array = [];
  for (let beginning = start; beginning <= end; beginning++) {
    array.push(beginning);
  }
  return array;
}
console.log(range(15, 30));

//функція, яка приймає два числа (початок і кінець діапазону) і повертає масив усіх непарних чисел у цьому діапазоні включно

function rangeOdd(start, end) {
  let array = [];
  for (let beginning = start; beginning <= end; beginning++) {
    if (beginning % 2) {
      array.push(beginning);
    }
  }
  return array;
}
console.log(rangeOdd(15, 30));

//Функція, яка приймає два числа і повертає їх середнє арифметичне.

function average(a, b) {
  return (a + b) / 2;
}
console.log(average(74, 36));

//Функція, яка приймає число і повертає його квадрат.

function square(x) {
  return x * x;
}
console.log(square(13));

//Функція, яка приймає число і повертає його куб.

function cube(x) {
  return x * x * x;
}
console.log(cube(6));

//Функція, яка приймає два числа (початок і кінець діапазону) і повертає масив, у якому кожен елемент є середнім арифметичним квадрата і куба відповідного числа з діапазону.

function calculate(start, end) {
  let array = [];
  for (let beginning = start; beginning <= end; beginning++) {
    function square(beginning) {
      return beginning * beginning;
    }
    function cube(beginning) {
      return beginning * beginning * beginning;
      function average(square, cube) {
        return (square + cube) / 2;
      }
    }
    array.push(average(square(beginning), cube(beginning)));
  }
  return array;
}
console.log(calculate(0, 9));

//Фукція, яка генерує випадкове ціле число в діапазоні від min до max (включно)

function randomInt(min, max) {
  return Math.floor(Math.random() * max);
}
console.log(randomInt(0, 100));

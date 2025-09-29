//Функція seq приймає дві функції f і g і повертає нову функцію, яка застосовує f до свого аргументу, а потім застосовує g до результату f. Якщо g є рядком "Number", то вона перетворює результат f у число перед застосуванням g. Інакше вона просто застосовує g до результату f.

function seq(...args) {
  const functions = [...args];

  const a = (...newArgs) => {
    if (typeof newArgs[0] === "function") {
      functions.push(...newArgs);
      return a;
    } else {
      return functions.reduceRight((result, fn) => fn(result), newArgs[0]);
    }
  };
  return a;
}
console.log(seq((x) => x + 7)((x) => x * 2)(5));
console.log(seq((x) => x + 2)((x) => x * 7)(5));
console.log(seq((x) => x + 1)((x) => x * 2)((x) => x / 3)((x) => x - 4)(7));

//Додаткові приклади
console.log(seq((x) => x + 10)((x) => x * 3)((x) => x - 5)((x) => x / 2)(8));
console.log(seq((x) => x ** 2)((x) => x + 6)((x) => x / 2)((x) => x - 2)(10));

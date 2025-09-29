//Функція, яка приймає об'єкт інтерфейсу і повертає масив з іменами методів та кількістю їх параметрів

const methods = (iface) => {
  const names = [];
  for (const name in iface) {
    const fn = iface[name];
    if (typeof fn === "function") {
      names.push([name, fn.length]);
    }
  }
  return names;
};
const iface = {
  m1: (x) => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  },
};
console.table(methods(iface));

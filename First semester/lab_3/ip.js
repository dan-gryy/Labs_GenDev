//функція, яка приймає IP адресу у вигляді рядка і повертає її числове представлення.

const fn = (ip = "192.168.43.27") => {
  const num = ip.split(".");
  let solution = 0;
  for (let i = 0; i < num.length; i++) {
    solution = solution << 8;
    solution += Number(num[i]);
  }
  return solution;
};
console.log(fn());

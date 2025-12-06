//функція, яка приймає ім'я та номер телефону і повертає номер телефону за ім'ям

const phonebook = [
  { name: "Dima Verkeeno", phone: +380631234567 },
  { name: "Ivan Petrenko", phone: +380631234568 },
  { name: "Petro Ivanenko", phone: +380631234569 },
  { name: "Vasyl Vasylenko", phone: +380631234570 },
  { name: "Stepan Stepanenko", phone: +380631234571 },
];
let findPhoneByName = (name) => {
  for (const object of phonebook) {
    if (object.name === name) {
      return object.phone;
    }
  }
  return "Контакт не знайдено";
};
phonebook.forEach((contact) => console.log(`${contact.phone}`));
console.log(findPhoneByName("Oleg Olegov")); //шукаємо неіснуючий контакт, щоб побачити повідомлення "Контакт не знайдено"

//те саме, але через об'єкт

const hash = {
  Ivan: "380631234568",
  Petro: "380631234569",
  Vasyl: "380631234570",
  Stepan: "380631234571",
  Dima: "380631234567",
};
const bookhash = (name) => hash[name];

console.log(bookhash("Ivan"));

console.log(bookhash("Petro"));
console.log(bookhash("Vasyl"));
console.log(bookhash("Stepan"));
console.log(bookhash("Dima"));

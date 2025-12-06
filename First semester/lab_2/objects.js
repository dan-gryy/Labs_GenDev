//функція, яка демонструє поведінку об'єктів у JavaScript

const fn = () => {
  const object1 = { name: "Illia" };
  let object2 = { name: "Robert" };

  object1.name = "Michael";
  object2.name = "Ivan";

  object2.name = { name: "Vova" };
  console.dir({ object1, object2 });
};
fn();

//функція, яка створює об'єкт користувача з властивостями name та city

function createUser(name, city) {
  return { name, city };
}

console.log(createUser("Illia", "Kyiv"));

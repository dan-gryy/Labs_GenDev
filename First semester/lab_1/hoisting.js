//Функція з "var" підлягає підйому, тому перший console.log виведе "undefined", а другий - 111

function hoistVar() {
  console.log(a);
  var a = 111;
  console.log(a);
}
hoistVar();

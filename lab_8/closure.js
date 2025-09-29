const read = store(5);
const value = read();
function store(value) {
  return function() {
    return value;
  }};    
console.log(value)
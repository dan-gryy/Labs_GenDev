//Функція видаляє обраний елемент в масиві

let array = ['Kiev', 'Beijing', 'Lima', 'Saratov', 'Lviv', 'New York', 'barcelona', 'London' ];
const removeElements = (arr, item) => {
    return arr.filter(element => element !== item)
}
array = removeElements(array, 'Saratov') // Видаляє місто Саратов
array = removeElements(array, 'Paris') // Не видаляє Париж, адже його немає в масиві 
console.log(array);


//У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы
// с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.
// Сделайте набор «готовых к употреблению» фильтров:
// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
// Они должны использоваться таким образом:
// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function inBetween(a, b) {
    return function (value) {
        return a <= value && value <= b;
    }
}
function inArray(arr) {
    return function (value) {
        return arr.indexOf(value) !== -1;
    }
}

console.log(arr.filter(inBetween(2,5)));
console.log(arr.filter(inArray([1,3,11])));
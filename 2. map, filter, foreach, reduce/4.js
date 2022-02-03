//Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля
let arr = [10, 20, 15, -1];
let result = '';
let i = 0;

arr.forEach(item => {
    if (item > 0) {
        i++;
    }
    if (i === arr.length) {
        result = 'Все элементы массива больше нуля';
    } else {
        result = 'Не все эелементы массива больше нуля';
    }
})

console.log(result);
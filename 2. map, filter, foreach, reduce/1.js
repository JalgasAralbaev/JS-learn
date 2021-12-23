//Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел

let arr = [2, 4, 5, 3, 12, 9];

const newArr = arr.map(arr => arr * arr);

console.log(newArr);


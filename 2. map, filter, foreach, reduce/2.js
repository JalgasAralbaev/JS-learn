//Дан массив с числами. Найдите сумму этих чисел.

let arr = [10, 20, 30, 40, 50, 60];
let summ = arr.reduce((count, element) => count + element, 0);

console.log(summ);
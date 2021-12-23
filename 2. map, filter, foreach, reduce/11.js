//Дан массив с числами. Найдите сумму этих чисел

const arr = [10, 2, 3, 5, 11, 6];
let summ = 0;

arr.forEach(element => summ += element);

console.log(summ);
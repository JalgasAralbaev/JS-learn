//В одномерном массиве найти минимальный и максимальный элементы. Вычислить их разность. Например, дан массив [3, 5,20 9, 4, 2, 6]. Максимальным числом является 9, минимальным является 2. Разность составляет 9-2=7.

let arr = [3, 5, 20, 4, 2, 6];


console.log('минимальный число: ' + minNumber(arr));
console.log('максимальный число: ' + maxNumber(arr));
console.log('Разница минимального и максимального числа: ' + (maxNumber(arr) - minNumber(arr)));

function maxNumber(arr) {
   let max = 0;

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
         max = arr[i];
      }
   }
   return max;
}


function minNumber(arr) {
   let min = arr[0];

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
         min = arr[i];
      }
   }
   return min;
}

//В массиве найти минимальное значение среди элементов с нечетными индексами.

let arr = [3, 5, 9, 1, 2, 6];

console.log('минимальный число: ' + minNumber(arr));

function minNumber(arr) {
   let min = arr[0];

   for (let i = 0; i < arr.length; i++) {
      if (i % 2 == 1) {
         if (arr[i] < min) {
            min = arr[i];
         }
      }
   }
   return min;
}

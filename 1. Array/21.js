//Найти сумму тех элементов массива, которые одновременно имеют четные и отрицательные значения. Например, в массиве [3, -5, -2, 4, -8, 0] отрицательными четными элементами являются числа -2 и -8. Их сумма равна -10.

let arr = [3, -5, -2, 4, -8, 0];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
   if (arr[i] < 0 && (arr[i] % 2 == 0)) {
      sum += arr[i];
   }
}

console.log('Сумма отрицательных элементов: ' + sum);
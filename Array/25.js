//Получить среднее арифметическое всех чётных элементов массива, стоящих на нечётных местах.

let arr = [3, 5, 20, 9, 4, 2, 6, 3, 5, 20, 9, 4, 2, 6];
let sum = 0;
let count = 0;

for (let i = 0; i < arr.length; i++) {
   if (arr[i] % 2 == 0 && i % 2 == 1) {
      console.log(arr[i]);
      sum += arr[i];
      count++;
   }
}

console.log('среднее арифметическое: ' + (sum / count));
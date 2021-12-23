//В одномерном массиве (заполнение массива случайными числами от -50 до 49) найти сумму отрицательных элементов. Если эта сумма меньше -100, то необходимо прибавить к ней минимальный положительный элемент.

let arrRandom = [];
let sum = 0;

for (let i = 0; i < 50; i++) {
   arrRandom[i] = random(-50, 49);
}

let min = getMin(arrRandom);
let summ = getSum(arrRandom);

console.log(summ);

if (summ < -100) {
   summ += min;
}
console.log( 'Минимальный положительный элемент: ' + min);
console.log('summ + ' + min + ' = ' + summ);


function getMin(arr) {
   let array = [];

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
         array.push(arr[i]);
      }
   }

   let min = array[0];
   
   for (let i = 1; i < array.length; i++) {
      if (min > array[i]) {
         min = array[i];
      }
   }

   return min;
}

function getSum(arr) {
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
         sum += arr[i];
      }
   }
   return sum;
}

function random(min, max) {
   let rand = min + Math.random() * (max - min);
   return Math.round(rand);
}
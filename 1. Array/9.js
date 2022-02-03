//Дан массив из 50 элементов и лежат в диапазоне от -50 до 49 включительно.  Требуется из одного массива скопировать в другой массив значения в диапазоне от -5 до 5 включительно и подсчитать их количество.

let arr = [];
let arr2 = [];
let sum = 0;
let sum = a + b;


for (let i = 0; i < 50; i++) {
   arr[i] = random(-50, 49);
}

for (let i = 0; i < arr.length; i++) {
   if (arr[i] >= -5 && arr[i] <= 5) {
      arr2.push(arr[i]);
   }
}


console.log(arr);
console.log(arr2);
console.log(getSum(arr2));


function getSum(arr) {
   for (let i = 0; i < arr.length; i++) {
      sum += arr2[i];
   }

   return sum;
}

function random(min, max) {
   let rand = min + Math.random() * (max - min);
   return Math.round(rand);
}
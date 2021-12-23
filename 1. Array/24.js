//Дан массив A вещественного типа, содержащий 20 положительных и отрицательных элементов. Сформировать массив B из положительных элементов массива A, имеющих четный индекс. Найти сумму квадратов элементов нового массива.

let arr = [];
let arr2 = [];
let sum = 0;

for (let i = 0; i < 20; i++) {
   arr[i] = random(-10, 10);
}

for (let i = 0; i < arr.length; i++) {
   if (arr[i] > 0 && (i % 2 == 0)) {
      arr2.push(arr[i]);
   }
}

for (let i = 0; i < arr2.length; i++) {
   sum += arr2[i]**2;
}

console.log(arr);
console.log(arr2);
console.log('сумма квадратов: ' + sum);

function random(min, max) {
   let rand = min + Math.random() * (max - min);
   return Math.round(rand);
}
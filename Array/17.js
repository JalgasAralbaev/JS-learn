//Все элементы массива поделить на значение наибольшего элемента этого массива.

let arr = [2, 5, 6, 7, 10, 9];
let max;

for (let i = 1; i < arr.length; i++) {
   if (arr[i-1] < arr[i]) 
   max = arr[i];
}
console.log(arr);
console.log(`макс элемент: ${max}`);
console.log(Boliw(arr));

function Boliw(arr) {
   for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i] / max;
   }
   return arr;
}
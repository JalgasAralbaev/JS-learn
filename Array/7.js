
//Найти максимальный элемент массива и его индекс (max_num   и   max_index).

let arr = [10, 2, 3, 30];
let max_num = 0;
let max_index;

max_num = arr[0];
for (let i = 1; i < arr.length; i++) {
   if (max_num < arr[i]) {
      max_num = arr[i];
      max_index = i;
   }
}

console.log(max_num);
console.log(max_index);
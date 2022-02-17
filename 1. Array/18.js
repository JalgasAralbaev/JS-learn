//Найти номер и значение первого положительного элемента массива.

let arr = [-10, -5, 8, 12, -3];

console.log(arr);

for (let i = 0; i < arr.length; i++) {
   if (arr[i] > 0) {
      console.log('положительный элемент массива: ' + arr[i]);
      console.log('индекс элемента массива: ' + i);
      break;
   }
}


//Заполнить массив из 10 элементов случайными числами в интервале [0..4] и определить, есть ли в нем одинаковые соседние элементы.

let arr = [1, 0, 2, 3, 1, 2, 3, 4, 4, 1];
let check = false;

for (let i = 1; i < arr.length; i++) {
   if (arr[i - 1] == arr[i]) {
      check = true;
      break;
   } else {
      check = false;
   }
}

if (check) {
   console.log('одинаковые соседние элементы существуют');
} else {
   console.log('одинаковые соседние элементы не существуют');
}
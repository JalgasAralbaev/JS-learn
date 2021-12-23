// Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве

const arr = [-10, 4, 5, -22, -6, -1];

let sumElem = arr.reduce((count, element) => {
   if (element < 0) {
      count++;
   }
   return count;
}, 0)

console.log(sumElem);
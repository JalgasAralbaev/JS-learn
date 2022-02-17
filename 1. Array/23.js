//Дан одномерный массив. Найти среднее арифметическое его элементов. Вывести на экран только те элементы массива, которые больше найденного среднего арифметического.

let arr = [3, 5, 20, 9, 4, 2, 6];
let arif;

arif = getArif(arr);
console.log('среднее арифметическое:' + arif);

for (let i = 0; i < arr.length; i++) {
   if(arr[i] > arif) {
      console.log(arr[i]);
   }
}


function getArif(arr) {
   let sum = 0;

   for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
   }

   return sum / arr.length;
}
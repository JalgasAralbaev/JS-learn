//Дан массив с числами. Оставьте в нем только четные числа

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArr = arr.filter(element => {
   if (element % 2 == 0) {
      return true;
   }
})

console.log(newArr);
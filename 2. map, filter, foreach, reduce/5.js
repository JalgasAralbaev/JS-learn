//Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы
const arr = [-10, 4, 5, -22, -6, 1];

let newArr = arr.filter(element => {
   if (element < 0) {
      return true;
   }
})

console.log(newArr);
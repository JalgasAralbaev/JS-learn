//Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы
const arr = [-10, 4, 5, -22, -6, 1];

let newArr = arr.filter(function (element) {
      return element < 0 ? true : ;
   } )

console.log(newArr);
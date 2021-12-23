//Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля

const arr = [-1, 4, 19, 22, -10, 5, 0];

let newArr = arr.filter(element => {
   if (element > 0) {
      return console.log('все ок');
   }
})

console.log(newArr);
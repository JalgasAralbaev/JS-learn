//Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов

const fruits = ['apple', 'banana', 'apricot', 'avocado', 'pineapple'];

let newFruits = fruits.filter(fruit => {
   if (fruit.length > 5) {
      return true;
   }
})

console.log(newFruits);
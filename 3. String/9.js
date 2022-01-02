//Вводятся строки. Определить самую длинную строку и вывести ее номер на экран.
//Если самых длинных строк несколько, то вывести номера всех таких строк.
let str = 'Вводятся строки Определить самую длинную строку и вывести ее номер на экран';
let strLen = str.split(' ');

function getMaxLength(str) {
   let maxElem = str[0].length;
   let index;
   
   for (let i = 1; i < str.length; i++) {
      if (maxElem < str[i].length) {
         maxElem = str[i].length;
         index = i;
      }
   }
   return `Самая длинная строка: ${maxElem}\nЕе номер: ${index}`;
}

console.log(getMaxLength(strLen));
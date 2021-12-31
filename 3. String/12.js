//Напишите функцию, которая принимает на вход строку, а возвращает эту строку «задом наперед»

let str = 'hello world!!!';

function showReverse(str) {
   return str.split('').reverse().join('');
}

str = showReverse(str);
console.log(str);
//Вводится строка слов, разделенных пробелами. Найти самое длинное слово и вывести его на экран.
//Случай, когда самых длинных слов может быть несколько, не обрабатывать.
let str = 'Вводится строка слов разделенных пробелами';
let strLen = str.split(' ');

function getMaxLength(str) {
   let maxElem = str[0].length;
   
   for (let i = 1; i < str.length; i++) {
      if (maxElem < str[i].length) {
         maxElem = str[i].length;
      }
   }
   return maxElem;
}

console.log(getMaxLength(strLen));

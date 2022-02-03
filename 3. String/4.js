//Вводится строка. Требуется удалить из нее повторяющиеся символы и все пробелы.
//Например, если было введено "aac cde def", то должно быть выведено "abcdef".

let str = "aabc cdae daef";

function getUnique(str) {
   str = str.split(" ").join("");
   str = str.split("");
   let j = 0;
   let check = 0;
   let arr = [];

   for (let i = 1; i < str.length; i++) {
      check++;
      if (check == str.length - 1) {
         j++;
         check = 0;
      }
      if (str[j] == str[i]) {
         //str.splice(i, i);
         arr.push(i);
      }
   }
   console.log(arr);
   for (let i = 0; i < arr.length; i++) {
      str.splice(arr[i], arr[i]);
      console.log(str);
   }
   return str.join("");
}
console.log(getUnique(str));

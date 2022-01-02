//Вводится строка, содержащая буквы, целые неотрицательные числа и иные символы.
//Требуется все числа, которые встречаются в строке, поместить в отдельный целочисленный массив.Например,
//если дана строка "data 48 call 9 read13 blank0a", то в массиве должны оказаться числа 48, 9, 13 и 0.

let str = 'data 48 call 9 read13 blank0a';
let Num = [];
let str1;
str1 = str.split(/[A-Za-z]+/);

str1.forEach(element => {
   if (element == typeof(String)) {
      Num.push(element);
   }
});

console.log(typeof (str[1]))
console.log(Num);
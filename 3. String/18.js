//Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).

let str = 'aaa bbb ccc';
let str1 = '';
str1 = str.substring(4, 7);
console.log(str1);
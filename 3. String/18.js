//Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).

let str = 'aaa bbb ccc';
let str1 = '';
let str2 = '';
let str3 = '';

str1 = str.substring(4, 7);
str2 = str.slice(4, 7);
str3 = str.substr(4, 3);
console.log(str1);
console.log(str2);
console.log(str3);
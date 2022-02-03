//Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.

let str = 'aaa@bbb@ccc';

function stringSubstr(sub, item, string) {
   let str = string.split('');

   for (let i = 0; i < str.length; i++) {
      if (item == str[i]) {str[i] = sub}
   }
   return str.join('');
}

console.log(stringSubstr('!', '@', str));
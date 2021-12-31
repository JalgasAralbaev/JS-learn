//Определить, является ли введенное слово идентификатором, 
//т.е.начинается ли оно с английской буквы в любом регистре или знака подчеркивания
//и не содержит других символов, кроме букв английского алфавита(в любом регистре), цифр и знака подчеркивания.

let str = '?eLLo';

function checkString(str) {
   let id, firstLetter, code;

   str = str.toLowerCase();
   code = str[0].codePointAt(0);
   if (96 < code && code < 123) { firstLetter = true; }

   for (let i = 0; i < str.length; i++) {
      code = str[i].codePointAt(0);
      if (96 < code && code < 123 || 47 < code && code < 58 || code == 39) {
         id = true;
      }
      else {
         id = false;
         break;
      }
   }

   return id && firstLetter;
}

console.log(checkString(str));

console.log('0'.codePointAt());
//Вводится строка, состоящая из букв и пробелов. Составить из входящих
//в нее букв несколько любых их сочетаний(слов) любой длины.Каждую букву
//строки можно использовать неограниченное количество раз.

let str = 'abc defg hijk lmnop qrstuv wx yz ';
let strLen = str.length;
let count = 5;
let words = [];

for (var i = 0; i < count; i++) {
   let word = '';
   let length = random(5, 10);

   for (let j = 0; j < length; j++) {
      word += str[random(0, strLen - 1)];
   }

   words.push(word);
}


console.log(words);

function random(min, max) {
   var rand = min + Math.random() * (max - min + 1);
   return Math.round(rand);
}
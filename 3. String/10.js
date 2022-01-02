//Посчитать количество строчных (маленьких) и прописных (больших) букв в введенной строке. Учитывать только английские буквы.
let str = 'HelLO woRLd!!!';
let a = 0, b = 0;

str.split('').forEach(element => {
   if (element.codePointAt() >= 97 && element.codePointAt() <= 122) {
      a++;
   } else if(element.codePointAt() >= 65 && element.codePointAt() <= 90) {
      b++
   }
});

console.log(`Строчных: ${a}\nПрописных: ${b}`);
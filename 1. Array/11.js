//Дан массив из N элементов в диапазоне [100;300]. Сжать массив, оставив в нем только те элементы, сумма цифр которых четная.

let arrRandom = [];

for (let i = 0; i < 10; i++) {
   arrRandom[i] = random(100, 300);
}
let sum = 0;

console.log(`До сжатие: [${arrRandom}]`);

for (let i = 0; i < arrRandom.length; i++) {
   sum += arrRandom[i];
   
   if (i >= 1) {
      if (sum % 2 == 1) {
         sum -= arrRandom[i];
         arrRandom.splice(i, i);
      }
   }
   
}
console.log(`После сжатие: [${arrRandom}]`);
console.log(sum);

function random(min, max) {
   let rand = min + Math.random() * (max - min);
   return Math.round(rand);
}
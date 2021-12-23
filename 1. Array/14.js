//Заполнить массив из 10 элементов случайными числами в интервале [-10..10] и сделать реверс отдельно для 1-ой и 2-ой половин массива.

let arrRandom = [];
let reverse = [];
let reverse2 = [];

for (let i = 0; i < 10; i++) {
   arrRandom[i] = random(-10, 10);
}

for (let i = (arrRandom.length / 2) - 1; i >= 0; i--) {
   reverse.push(arrRandom[i]);
}

for (let i = arrRandom.length - 1; i >= (arrRandom.length / 2); i--) {
   reverse2.push(arrRandom[i]);
}

console.log(arrRandom);
console.log(reverse);
console.log(reverse2);

function random(min, max) {
   let rand = min + Math.random() * (max - min);
   return Math.round(rand);
}
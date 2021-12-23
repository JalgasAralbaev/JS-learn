//Дан массив, содержащий положительные и отрицательные числа. Заменить все элементы массива на противоположные по знаку. Например, задан массив [1, -5, 0, 3, -4]. После преобразования должно получиться [-1, 5, 0, -3, 4].

let arrRandom = [];

for (let i = 0; i < 5; i++) {
   arrRandom[i] = random(-10, 10);
}

console.log(arrRandom);

for (let i = 0; i < arrRandom.length; i++) {
   arrRandom[i] *= -1;
}

console.log(arrRandom);

function random(min, max) {
   let rand = min + Math.random() * (max - min);
   return Math.round(rand);
}
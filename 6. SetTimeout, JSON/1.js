//Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
// Сделайте два варианта решения.
// Используя setInterval.
// Используя рекурсивный setTimeout.

function printNumbersInterval(from, to) {
    let count = from;

    let interval = setInterval(function() {
        console.log(count);
        if (count === to) clearInterval(interval);
        count++;
    }, 1000);
}

function printNumbersTimeout(from, to) {
    let count = from;

    setTimeout(function timeout() {
        console.log(count);
        if (count !== to) {
            setTimeout(timeout, 1000);
        }
        count++;
    }, 1000);
}


console.log(printNumbersTimeout(1, 5));

console.log(printNumbersInterval(1, 5))
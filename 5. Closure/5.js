//Создайте замыкание: функция addition получает число n и
// возвращает внутреннюю функцию. Эта функция также получает
// число, прибавляет его к n и возвращает результат.

function addition(n) {
    return function (k) {
        return n + k
    }
}

console.log(addition(5)(2))
console.log(addition(10)(5))

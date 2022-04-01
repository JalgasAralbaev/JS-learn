//Создайте замыкание: функция makePassword получает пароль в аргументе и
// возвращает внутреннюю функцию, которая принимает введенную строку и
// возвращает булево значение true, если введенная строка совпадает с
// паролем и false – если не совпадает.
function makePassword(password) {
    return function (string) {
        return password === string;
    }
}

let checkPassword = makePassword(12345);
console.log(checkPassword(1245))
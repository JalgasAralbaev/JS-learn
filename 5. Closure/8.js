//создайте счетчик. В счетчике должно быть:
//1) Метод обнуление счетчика.
//2) Возможность изменять начало отчета счетчика.

function counter(n = 0) {
    let count = n;
    return function () {
        this.reset = function () {
            return (count = ++n)
        }
        return ++count
    }
}
let count = counter(1)
console.log(count())
console.log(count())
console.log(count())
console.log(count.reset())
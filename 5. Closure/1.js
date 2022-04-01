//Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
function getSum(a) {
    return function (b) {
        return a + b
    }
}
console.log(getSum(-5)(1))
console.log(getSum(2)(3))


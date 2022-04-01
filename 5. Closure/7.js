//Какой результат будет выведен при очередном вызове generation и generation2? Почему?
//
//
// function numberGenerator() {
//   var currentNum = 2;
//   return function multiNumber() {
//     return currentNum *= currentNum;
//   };
// }
//
// var generation = numberGenerator();
// var generation2 = numberGenerator();
//
// alert( generation() );
// alert( generation() );
//
// alert( generation2() );
// alert( generation2() );

//Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

let arr1 = ['a', 'b', 'c'];
let arr2 = [1, 2, 3];

for (let i = 0; i < arr2.length; i++) {
   arr1.push(arr2[i]);
}

console.log(arr1);


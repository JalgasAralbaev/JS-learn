//Вводится строка. Удалить из нее все пробелы. После этого определить,
//является ли она палиндромом(перевертышем), т.е.одинаково пишется как с начала, так и с конца.

let str = 'a N n a';
let deleteSpaces = str.split(' ').join('');

function checkPalindrome(str) {
   deleteSpaces = deleteSpaces.toLowerCase();
   return deleteSpaces === deleteSpaces.split(' ').reverse().join('');
}

console.log(palindrome(str));
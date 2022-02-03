//Найти в строке указанную подстроку и заменить ее на новую.
//Строку, ее подстроку для замены и новую подстроку вводит пользователь.

let str = "Найти в строке указанную подстроку и заменить ее на новую.";

function stringSubstr(sub, item, string) {
   let str = string.split(" ");

   for (let i = 0; i < str.length; i++) {
      if (item == str[i]) {
         str[i] = sub;
      }
   }
   return str.join(" ");
}

console.log(stringSubstr("его", "ее", str));

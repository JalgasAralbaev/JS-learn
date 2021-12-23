//Дан массив с числами. Найдите сумму первых N элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0

const arr = [1, 2, 3, 0, 4, 5, 6];

let newArr = arr.reduce((count, element) => {
   if (element == 0) {
      return count;
   }
   count += element;
}, 0)

console.log(newArr);
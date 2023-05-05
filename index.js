const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let sum = 0;
let countPositive = 0;
let min = arr[0];
let minIndex = 0;
let max = arr[0];
let maxIndex = 0;
let countNegative = 0;
let productPositive = 1;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    sum += arr[i];
    countPositive++;
    productPositive *= arr[i];
  } else if (arr[i] < 0) {
    countNegative++;
  }
  if (arr[i] < min) {
    min = arr[i];
    minIndex = i;
  }
  if (arr[i] > max) {
    max = arr[i];
    maxIndex = i;
  }
}

console.log(`Сума позитивних елементів: ${sum}`);
console.log(`Кількість позитивних елементів: ${countPositive}`);
console.log(`Мінімальний елемент: ${min}, порядковий номер: ${minIndex}`);
console.log(`Максимальний елемент: ${max}, порядковий номер: ${maxIndex}`);
console.log(`Кількість негативних елементів: ${countNegative}`);
console.log(`Добуток позитивних елементів: ${productPositive}`);
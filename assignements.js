// Write an arrow function named arrayAverage that accepts an array of numbers and returns
// the average of those numbers.

arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arrayAverage = (array) => {
  let sum = 0;
  for (num of array) {
    sum = sum + num;
  }
  return sum / array.length;
};

console.log(arrayAverage(arrayNum));

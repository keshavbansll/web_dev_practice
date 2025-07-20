//Square and sum the array elements using the arrow function and then
//find the average of the array

arr = [5, 2, 7, 3, 13, 10];

let square = arr.map((num) => {
  return num * num;
});

console.log(square);

let sum = square.reduce((acc, el) => acc + el, 0);

console.log(sum);

let avg = sum / arr.length;
console.log(avg);

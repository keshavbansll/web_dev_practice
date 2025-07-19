// Check if all numbers in our array are multiples or 10 or not.

let arr = [5, 20, 30, 40, 50];

let ans = arr.every((num) => {
  return num % 10 == 0;
});

console.log(ans);

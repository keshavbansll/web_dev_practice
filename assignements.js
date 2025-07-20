//Write a function called doubleAndReturnArgs which accepts an array and
//a vaiable number of arguments. The function should return a new array with the original
//array values and all the additional arguments doubled.

const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((v) => v * 2),
];

doubleAndReturnArgs([1, 2, 3], 4, 4); // [1,2,3,8,8]

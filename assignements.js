//Create a new array whose
//elements are in uppercase of words present in the original array.

let org_arr = [..."case"];

let new_arr = org_arr.map((letter) => {
  return letter.toUpperCase();
});

console.log(new_arr);

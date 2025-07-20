//Create a new array using the map function whose
//each element is equal to the original element plus 5.

org_arr = [0, 5, 25, 102, 56];

let new_arr = org_arr.map((num) => {
  return num + 5;
});

console.log(new_arr);

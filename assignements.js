// Create a function to find the min number in an array.

function getMin(num) {
  let min = num.reduce((min, el) => {
    if (min < el) {
      return min;
    } else {
      return el;
    }
  });

  return min;
}

let num = [546, 324, 21342, 54, 325, 3453, 32154, 41523452354, 234];

console.log(getMin(num));

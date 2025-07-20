//Write a function called mergeObjects that accepts two objects and returns a new object
//which contains all the keys and values of the first object and second object.

firstObj = {
  name: "Keshav",
  age: 18,
};

secondObj = {
  grade: "X",
  percentage: 91.2,
};

const mergeObjects = (obj1, obj2) => ({
  ...obj1,
  ...obj2,
});

console.log(mergeObjects(firstObj, secondObj));

// Create a program that generates a random number representing a dice roll.
// [The number should be between 1 and 6].

let dice = Math.floor((Math.random()*6)+1);
console.log(dice);

//Create an object representing a car that stores the following properties for the car
// :name, model, color.
// Print the car's name.

const car = {
    name: "Aston Martin",
    model: "Vantage",
    color: "red"
};

console.log(car.name);

// Create an object person with their name, age and city.
// Edit their city's original value to change it to "New York".
// Add a new property country and set it to the United states.

const person = {
    name: "Matthew Murdock",
    age: 37,
    city: "Manhattan"
};

person.city = "New York";
person["country"] = "United States";

console.log(person.city);
console.log(person.country);
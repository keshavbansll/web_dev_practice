// Create a number variable num with some value.
//Now, print "good" if the number is divisible by 10 and print "bad" if it is not

let num = 30;

if (num % 10 == 0) {
    console.log("good");
}

else {
    console.log("bad");
}

//Take the user's name & age input using prompts
// then return back the following statement to the user as an alert (by substituting their name & age):
// {name} is {age} years old.

let name = prompt("Enter your Name.");
let age = prompt("Enter your age");

alert(`${name} is ${age} years old`);

///Write a switch statement to print the months in a quarter.

let quarter = 1;

switch (quarter) {
    
    case 1:
        console.log("January, Februaru, March");
        break;
    
    case 2:
        console.log("April, May, June");
        break;
    
    case 3:
        console.log("July, August, September");
        break;

    case 4:
        console.log("October. November, December");
        break;
}

// A string is a golden string if it starts with a character 'A' or 'a' and
// has a total length greater than 5.
// For a given string print if it golden or not.

let str = "Apple";

if ((str[0] == "A") || (str[0] == "a") && (str.length > 5)) {
    console.log("It is a Golden string");
}
else {
    console.log("It is not a golden string");
}

// Write a program to find the largest of 3 numbers

let num1 = 10;
let num2 = 100;
let num3 = 1000;

let largest = Math.max(num1, num2, num3)

console.log(`The largest number is ${largest}`);

//Bonus: Write a program to check if 2 numbers have the same last digit.
// Eg. 32 and 47852 have the same last digit i.e. 2

let dig1 = 32;
let dig2 = 47852;

lastDigit1 = dig1.toString().slice(-1);
lastDigit2 = dig2.toString().slice(-1)

if (lastDigit1 == lastDigit2) {
    console.log("Last digit of both the numbers are same");
}
else {
    console.log("Last digit of both the numbers are different!");
}
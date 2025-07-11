//Write a JavaScript program to get the first n elements of an array.
//[n can be any positive number]

let n = 2;
let arr1 = [1,2,3,4,5,6]

console.log(arr1.slice(0,n));

//Write a JavaScript Program to get the last n elements of an array.
//[n can be any positive number]

console.log(arr1.slice(arr1.length-n));

//Write a Javascript program to check whether a string is blank or not.

let str = "Hello, My name is Keshav.    ";

if (str.length == 0) {
    console.log("String is blank");
} else {
    console.log("String is not blank");
}

//Write a JavaScript program to test whether the character at the given
// (character) index is lower case

let idx = 0;

if (str[idx] == str[idx].toLowerCase()) {
    console.log("Character is lowercase");
} else {
    console.log("Character is not lowercase");
}

//Write a JavaScript program to strip leading and trailing spaces from a string.

console.log(str.trim())

//Write a JavaScript program to check if an element exists in an array or not.

let item = 5;

if (arr1.indexOf(item) != -1) {
    console.log("Item is present in the array");
} else {
    console.log("Item is absent in the array");
}
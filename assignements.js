// Write a JS program to delete all occurences of element 'num' in a given array.

let arr1 = [1,2,3,4,5,6,2,3];

let num = 3;

for (let i=0; i<arr1.length; i++) {
    if (arr1[i] == num) {
        arr1.splice(i,1);
    }
}

console.log(arr1);

// Write a JS program to find the no of digits in a number

let number = 534520;
let count = 0;

let copy = number;

while (copy>0) {
    count++;
    copy = Math.floor(copy/10);
}

console.log(count);

// Write a JS program to find the sum of digits in a number

let num2 = 325141;
let sum = 0;

let copy2 = num2;

while (copy2 > 0) {

    digit = copy2 % 10;
    sum += digit;
    copy2 = Math.floor(copy2/10);
}

console.log(sum);

// Print the factorial of a number n.
//[Factorial of a number n is the product of all positive integers less than
// or equal to a given positive integer and denoted by that integer. ]

let num3 = 5;
let factorial = 1;

for (let i=1; i <= num3; i++) {
    factorial *= 1;
}

console.log(`factorial of ${num3} is ${factorial}`);

// Find the largest number in an array with only positive numbers.

let arr2 = [2,5,10,4,2,7,1,9];
let largest = 0;

for (let i=0; i < arr2.length; i++) {
    if (largest < arr2[i]) {
        largest = arr2[i];
    }
}

console.log("Largest number is", largest);
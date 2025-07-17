//Write a JavaScript function that returns array elements larger than a number.

let arr1 = [8,9,1,5,3,2,4,6,2,8,1,7,6,5,9,1,3,4,0,2,5,0];
let num1 = 3;

function greaterThan(num, array) {

    let greaterThan = [];

    for (n of array) {
        if (n > num) {
            greaterThan.push(n);
        }
    }

    return greaterThan;
}

console.log(greaterThan(num1,arr1));
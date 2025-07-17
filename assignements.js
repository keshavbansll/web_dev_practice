//Write a JavaScript function to count the number of vowels in a String argument.

let str = "Hello, how are you?";

function countVowels(str) {
    let count = 0;
    const vowels = ['a','e','i','o','u']

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count++;
        }
    }

    return count;
}

console.log(countVowels(str))
// Create a Function that returns the concatenation of all strings in an array.

strings = ["Hello", "World", "My", "Name", "is", "Keshav"];

function concatStr(strings) {
    let result = "";
    
    for (let str of strings) {
        result += str;
    }

    return result
}

console.log(concatStr(strings))
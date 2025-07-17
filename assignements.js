// Write a JavaScript function to extract unique characters from a string.
//Example: str = "abcdabcdefgggh"
//         ans = "abcdefgh"

let str = "abcdabcdefgggh";

function uniqueStr(str) {
    let uniqueStr = "";

    for (let i = 0; i < str.length; i++) {

        let char = str[i];

        if (!(uniqueStr.includes(char))) {
            uniqueStr = uniqueStr + char;
        }
    }

    return uniqueStr;
}

console.log(uniqueStr(str));
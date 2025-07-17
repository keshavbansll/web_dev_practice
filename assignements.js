// Write a JavaScript function that accepts a list of country names as input and returns
// the longest country name as output.

let country = ["Australia","Germany","United States of America"];

function longestName(list) {

    let idx = 0;

    for ( let i = 0; i <list.length; i++) {
        let length = list[idx].length;
        let currLen = list[i].length;

        if (currLen > length) {
            idx = i
        }
    };

    return list[idx];
}

console.log(longestName(country));
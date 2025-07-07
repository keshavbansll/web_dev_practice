//Ques: A "good string" is a string that starts with the letter "a" & has a length > 3. Write a program to find if a string is good or not.

let str = "apple";

if ((str[0] === 'a') && (str.length >3)) {
    console.log("Good string");
}

else {
    console.log("Not a good string");
}
// Create a Function that prints the multiplication table of a number

n = parseInt(prompt("What number's table do you want to print?"))

function printTable() {
    for (let i=n; i<=n*10; i+=n)
        console.log(i)
}

console.log("Here is the requested table")
printTable(n)
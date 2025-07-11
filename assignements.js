//For the given start state of an array, change the final form using splice.
let start = ['january', 'july', 'march', 'august'];
// final: ['july', 'june', 'march', 'august']

start.splice(0,2,'july','june');
console.log(start)

//Return the index of the "javascript" from the given array,
//if it was reveresed
let langs = ['c','c++','html','javascript','python','java','c#','sql']

console.log(langs.reverse().indexOf('javascript'))
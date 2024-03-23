let score = "33"

console.log(score);

let valueInNumber = Number(score)

console.log(valueInNumber);

console.log(typeof score)
console.log(typeof valueInNumber)

let score2 = undefined
//"22abc"
let valueInNumber2 = Number(score2)
console.log(score2);
console.log(typeof score2)
console.log(valueInNumber2) /* when the Number method called or undefined and if text has come then result will NaN*/
console.log(typeof valueInNumber2)
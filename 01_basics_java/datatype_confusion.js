let age = "40asd"

console.log(typeof age);

let isNumber = Number(age)
console.log(typeof isNumber);
console.log(isNumber); /* this will return to you NaN error */

let isValue = null
console.log(isValue);
console.log(typeof isValue);

let convert_value = Number(isValue)
console.log(convert_value);
console.log(typeof convert_value)
// "33" => 33
// "33asd" => NaN
// ture => 1 or false => 0

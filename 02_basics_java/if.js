//Control Flow
//You will not every time run entire code.

//Bitwise Operators
// And = && (empathises)
//Or = || (Pipesign)

//Simple if
// const islogged = true
// if (islogged == true) {
//     console.log("user is logged");
// } else {
//     console.log("user not logged")
// }

//Nested If
// const val1 = 1000

// if (val1 == 500) {
//     console.log("the value is 500")
// } else { if (val1 == 700) {
//     console.log("value is 700")   
// }
// console.log("value is 1000")
// }

//And and Or

let val2 = 500
const val3 = 400


//And && (empithises)
// if (val2 == 500 && val3 == 300) {
//     console.log("condition match");
    
// } else {
//     console.log("condition is not match");
// }

//OR || (Pipesign)

// if (val2 === 500 || val3 === 600) {
//     console.log("condition match");
// } else { console.log("condition not match");
    
// }

// nullish Coalescing Operators 
// for null and undefined (?? )

let empty_val;
// empty_val = 5 ?? 10
// empty_val = null ?? 5
// empty_val = undefined ?? 10


// console.log(empty_val);



// Terniary Operators
// Method to write : condition ? true : false

val2 = 10

val2 == 10 ? console.log("condtion match") : console.log("condition not match")
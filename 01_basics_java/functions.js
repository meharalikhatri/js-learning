// function myName(){
//     console.log("M")
//     console.log("E")
//     console.log("H")
//     console.log("A")
//     console.log("R")
// }
// myName() /* myName is reference and () this is exiquation */

//function addTwoNumbers(number1,number2){ /* first to curly bracket calls Parameters */
  //  console.log(number1+number2)
//}

// addTwoNumbers(2,5) /*This () calls arguments */

function addTwoNumbers(number1,number2){
    //let result = number1 + number2 (this is one method, you can you use below method too)
    // return result
    return number1+number2
    console.log("Mehar") /* this line will not exiqute because return function will not print further. */
}
const result = addTwoNumbers(2,5)
// console.log(result)



const first_value = 20
const second_value = 6

function twoValue(first_value,second_value){

    return first_value+second_value
}

const result_1 = twoValue(first_value,second_value)

console.log("Result is : ",result_1)


// function with if statment
// function isLoggedIn(username){

//     return `${username} is just logged in`
// }
// const mylogged = isLoggedIn("mehar")
// console.log(mylogged)


//If statement

function abc (username_1){
    if(username_1 === undefined){
        // console.log("please write the correct name");

    }
 return `${username_1} is my name`
}
const myname = abc()
// console.log(myname)

//Rest/Spread (...) Operator

function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(100,200,300))

//Object

const user = {
    name : "mehar",
    age : 40
}

function userinfo(username){
    console.log(`Hi, my name is ${username.name} and my age is ${username.age}.`)    
}

// userinfo(user)

//Array

const myNewArray = [1,4,5,3]

function getarray(anyvalue){
    return anyvalue[2]
}
console.log(getarray(myNewArray))
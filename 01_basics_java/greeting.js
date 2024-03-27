/* How to add greetings */

const mytable = {
    name : "mehar",
    age : 40
}

mytable.greeting = function(){console.log("Hello")}
mytable.greeting2 = function(){console.log(`Hello, ${this.name}`)}
console.log(mytable.greeting())
console.log(mytable.greeting2())
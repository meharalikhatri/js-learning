//Immediately Invoked Function Expression (IIFE)

//Normal way to write and exicute the function and arrow function

// function chai(){
//     console.log("hello")
// }
// chai()

// chai_1 = () => {
//     console.log("hello2")
// }
// chai_1()


/*Below is call iife*/

// (function chai(){
//     console.log("hello")
// })()


(() => {
    console.log("hello2")
})();

((name) => {
    console.log(name)
})("ali")

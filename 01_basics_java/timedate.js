let myDate = new Date ()

// console.log(myDate);
// console.log(myDate.toString())
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

//note : month will start from zero in js

// let newDate = new Date(2023,1,23)

// let DateManual = new Date("2024-03-15")
// console.log(DateManual)
// console.log(newDate.toLocaleDateString());
console.log(myDate.toLocaleDateString('default',
{
    weekday: "long"

}
));


//--------------------------------------

//time

// let myTime = Date.now() /*for time*/

// console.log(myTime) /*Answer will return in miliseconds to convert in seconds, divide 1000 this value */

// console.log(Math.floor(myTime/1000)) /*Result in seconds*/



// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.getDay());
// console.log(myDate.getMonth()+1)
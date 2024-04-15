const myNum = [1,2,3,4,5,6,7,8,9,10]

/* Explicitly Method */
const NewNum = myNum.filter((num)=> num > 5)

/* Scope Method (Scope method main return keyword use krenge)*/

const NewNum1 = myNum.filter((num)=>{
    return num > 4
});


/* with foreach method */

const newNums = []

myNum.forEach((num)=> {
    if (num > 8) {
        newNums.push(num)        
    }
})

// console.log(newNums);


const myvalue = [1,3,5,7,9]
// const yourvalue = []

const yourvalue = myvalue.filter( (num) => num > 5 )

console.log(yourvalue);
const myNums = [1,2,3]
const mytotal = myNums.reduce(function (acc, currval) {
    // console.log(`this is ${acc}  acc value and this is ${currval} currval`)
    return acc + currval
    
},0)

// console.log(mytotal);


// Second Example

let shopping = [
    {
        item : "pakola",
        price : 200,
        qty : 5
    },
    {
        item : "Shampoo",
        price : 500,
        qty : 2
    },
    {
        item : "Oil",
        price : 1500,
        qty : 3
    }
]
let product_total = shopping.map( (num) => num.price * num.qty )
console.log(product_total);

let total = product_total.reduce( (acc,currval) => (acc+currval),0)

console.log(total);
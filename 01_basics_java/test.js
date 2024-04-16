const myNum = [1,3,5,7,9]
let myAlph = ["a","b","c","d"]
let empAlph = []
let name = "ali"
let age = 40
let myObject = {
    name : "ali khatri",
    phone : 3315900000
}
const myData = [
    {
        driver_id : "abcdefg",
        balance : 400,
        registration : 2012
    },
    {
        driver_id : "424dfae",
        balance : 212,
        registration : 2013
    },
    {
        driver_id : "abcderqer",
        balance : -120,
        registration : 2012
    },
    {
        driver_id : "abcdfaefeefg",
        balance : 80,
        registration : 2013
    },
    {
        driver_id : "abteedcdefg",
        balance : 4001,
        registration : 2013
    },
]


let finder = myData.filter( (reg) => reg.registration == 2013 && reg.balance < 1000 )

console.log(finder);
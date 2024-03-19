const _id = "passenger_id"  
/* constant can not be change like _id can not be change */

let customer_name = "ali khatri" 
/* every time when you create a variable you should mentioned let */

var passenger_name = "mehar ali khatri" 
/* there was a problem in old days, var becomes change change in block scope/functional scope */

driver_name = "sarmad" 
/* we can directly use varible function without mentioning let or var, but this is not a good way to write the code. */

console.log(_id); /* this will print single name */

console.table ({_id,passenger_name,driver_name,customer_name}) /* this will show in table */
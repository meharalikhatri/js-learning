/* There are two type of Objects
1. Literal
2. Constract */

//Singleton
// Object.create (singleton create like this)

//When you make object through literal then singleton does not make happen
//Constractor makes Singleton

const mysymb = Symbol("key01")

const driver_table = {
    _id : "didcd123",
    [mysymb] : "key01", /* square bracket will reflect symbols */
    name : "ali khatri",
    phone : 3001234567,
    IsLogged : true,
    email : "ali.khatri@gmail.com",
    lastLogin : ["Monday","Thursday"]

}

// console.log(driver_table.email);
// console.log(driver_table["email"]); /* always use this method, above method will not read name in string */
// console.log(driver_table[mysymb]); /* symbol does not require "" bcaz it is not string */


/* How to change the values */

driver_table.email = "ali.khatri@google.com"

// console.log(driver_table["email"])

driver_table.accountnumber = 222211 /* through this you can add new value in the object */

//Freeze Objects

Object.freeze(driver_table)

driver_table.name = "mehar" /* this will not change bcz above has object freezed. */

// console.log(driver_table)


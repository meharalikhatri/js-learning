//Primitive datatype

//There are 7 type of datatype = "string", numbers, boolean, null, undefined, bigint,symbol


//Reference (Non Primitive datatype)

//Array, Objects, Funtions


//Two type of Memories storage
//1. Stack (Primitive) and 2.Heap(Non Primitive)

/* Stack Example */
// let mybusinessname = "bag2pack"
// let anothername = mybusinessname
// anothername = "bag3pack"

// console.log(mybusinessname);
// console.log(anothername);

/* Heap Reference */

let userOne = {

    name : "ali",
    phone : 3315955784

}

let userTwo =  userOne
userTwo.phone = 3013358766

console.log(userOne);
console.log(userTwo)

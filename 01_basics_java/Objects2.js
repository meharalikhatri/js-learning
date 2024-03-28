/* Singlton Method */

// const _id = new Object() /* use for singleton mehtod */

const _id2 = {} /* non singleton method */

_id2.name = "baber"
_id2.isloggedIn = true

// console.log(_id2)


/* Nested Objects */

const regularuser = {
    email : "m@gmail.com",
    fullname : {
        userfullname : {
            firstname: "ali",
            lastname: "khatri"
        }
    }

}

// console.log(regularuser)
// console.log(regularuser.fullname.userfullname)


//Join two or more objects
const obj1 = {
    a : 1,
    b : 2
}
const obj2 = {
    c:3,
    d:4
}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}

// console.log(obj3)

//Array Objects


const users = [
    {
        id : 1,
        email : "mehar@gamilc.om"
    },
    {
    },
    {
    },
]
users[1].email


console.log(_id2);
console.log(Object.keys(_id2)); /* keys will return you heading in array */
console.log(Object.values(_id2));
console.log(Object.entries(_id2));

console.log(_id2.hasOwnProperty("name"))
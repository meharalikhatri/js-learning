// const arr = [32,45,22,45,66]

// for (const i of arr) {
//     console.log(i);
// }



// const myname = "Mehar Ali Khatri"

// for (const name of myname) {
//     if (name == " ") {
//     break;        
//     }
//     console.log(name);
// }




//Maps (It will show unique value only and order will show same as you entered)

const map = new Map()

map.set("PK","Pakistan")
map.set("IN","India")
map.set("BNG", "Bangladesh")
// map.set("PK","Pakistan") (this will not duplicate)

// console.log(map);

for (const [key,value] of map) /* Destructure map */ {
    console.log(key, ":-" , value);    
}
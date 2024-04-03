//Local/blocks scope and global scope
/* {} this braces calls scope,  */

let a = 100
const b = 200
var c = 300

if(true)
{
let a = 10
const b = 20
var c = 30 /* there is a problem, var will update the value if this in blocks scope */
}

// console.log(a);
// console.log(b);
// console.log(c)


//Nested Scope


function one (){
    const username = "mehar"
    
    function two(){
        const website = "youtube"
        // console.log(username)
    }
    // console.log(website) /* this will return error why because parent calls child */
    two()
}
one()

//Sequence

addnum(5)
function addnum(num){
    return num + 1
} 


num_2(4) /* If I take this number num_2 after the scope, then error will not shown */
const num_2 = function addnum_2(num_1){
    return num_1+1
}
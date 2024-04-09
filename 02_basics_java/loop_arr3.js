//High Order Array Loops (For each loop)

const coding = ["a","b","c","d","e"]


//Through Function
coding.forEach( function(item) {
    // console.log(item);
});



//Through Arrow function
coding.forEach((item)=>{
    // console.log(item);
});


//External function call
function alphatebt(item) {
    // console.log(item);
}
coding.forEach(alphatebt)

//We not only call items, can index and array also calls
coding.forEach((item, index, Array)=>{
    // console.log(item, index, Array);
})



const mycoding = [
    {
        name : "ali",
        age : 40
    },
    {
        name : "mehar",
        age : 45
    }
]

mycoding.forEach ( (item) => {
    console.log(item.name);
})



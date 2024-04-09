const myObject = {
    name : "ali",
    age : 40
}

// console.log(myObject);

// for (const key in myObject) {
//     console.log(key , myObject[key]);}


const programming = ["js","py","c++","java","rb"]

/* forin : Declear Keys / Position calls */
for (const key in programming) {
    // console.log(key);
    console.log(programming[key]) /* if you want to declear value */
}


/* forof : declear value calls */
for (const key of programming) {
    // console.log(key)    
}

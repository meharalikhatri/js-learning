// loops call iteration


for (let  index = 0 /* 1.  index intitialized*/
        ; index <= 10 /*2. condition check*/
        ; index++ /*4. increament will apply at the end*/) {
    const element = index; /*3. then value declear and process*/
    console.log(index) /*you can not print this index out of this block scoop*/;}


// If condtion
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (i == 5) { console.log(`5 this is the best number`);}
//     console.log(element);
// }

//for inside inner for

// for (let i = 0; i <=10; i++) {
//     console.log(`this is outerloop number : ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(`this is inner loop number : ${j} and outerloop number : ${i}`);
        
//     }
    
// }


// Create a table
// const table1 = 5

// for (let table = 1; table <= 10; table++) {
//     console.log(`${table1} x ${table} = ${table1*table}`);
//     };
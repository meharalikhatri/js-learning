// const marvel_heros = ["thor", "spiderman", "ironman"]
// const dc_heros = ["superman" , "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]) this will addup array in new array

// let new_marvel = marvel_heros.concat(dc_heros)
// console.log(new_marvel)

/* Use Spread Method */

// const new_all_heros = [...marvel_heros,...dc_heros]

// console.log(new_all_heros);

//Array inside array

// const another_array = [1,2,3,4,[4,56,75,3],[543,34,[534,555]]]

// const real_arry = another_array.flat(Infinity) /* this flat funtion will help you to marge all array in one. */

// console.log(real_arry)


/* From funtion will convert numbers and numaric in Array */
// console.log(Array.isArray("Mehar"))
// console.log(Array.from("Mehar"))
// console.log(Array.isArray(Array.from("Mehar")))
// console.log(Array.from({name: "Mehar"}))

/* of funtion will also convert numbers and numaric in Array */

let score = 100
let score1 = 200
let score2 = 300

let score_final = Array.of(score,score1,score2)

console.log(score_final);
// const promiseOne = new Promise(function (resolve,reject){
//     //Do an async task
//     //DB calls,cryptography, network

//     setTimeout(() => {
//         console.log("Async task is complete");
//         resolve()
//     }, 1000);
// })

// promiseOne.then(function () {
//     console.log("Promised Consumed");
// })

// //Method - Promise Two


// new Promise(function (resolve,reject) {
//     setTimeout(() => {
//         console.log("Async task two is complete");
//         resolve()
//     }, 1000);
// }).then(function () {
//     console.log("Async 2 completed")    
// })

// //Method - Third Promise

// const promiseThird = new Promise(function (resolve,reject) {
//     setTimeout(() => {
        
//         resolve({username : "ali", email: "ali@example.com"})
//     }, 1000);
// })

// promiseThird.then(function (user) {
//     console.log(user);    
// })

// //Method - Promise Four

// const promisFour = new Promise(function (reslove,reject) {
//     setTimeout(() => {
//     let error = true
    
//     if(!error) {
//         reslove({username : "mehar", password: 123})
//     } else {
//         reject("Error : Something went wrong")
//     }
//     }, 1000);
// })

// promisFour.then((user) => {
//     console.log(user);
//     return(user.username)
// }).then((username) => {
//     console.log(username);
// }).catch((error)=>{
//     console.log(error);
// }).finally(() => console.log("program to war gaya"))

// // Method promise five

// const promisFive = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         let error = true
        
//         if(!error) {
//             resolve({username : "javascript", password: 123})
//         } else {
//             reject("Error : Java went wrong")
//         }
//         }, 1000);
// })

// async function consumedPromiseFive() {
//     try {
//         const response = await promisFive    
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }

// consumedPromiseFive()

// async function callNameTroughAPI (){
//     const apiData = await fetch('https://randomuser.me/api/')
//     const jsonData = await apiData.json()
//     console.log(jsonData);
// }

// callNameTroughAPI()

// async function myData(){
    
//     try {
//         const api = await fetch('https://randomuser.me/api/')
//         const response = await api.json()
//         console.log(response)
//     } catch (error) {
//         console.log("Erorr in Data")      
//     }
    
// }
// myData()


// fetch('https://randomuser.me/api/')
// .then((data)=>{
//        return data.json()
// }).then((response)=>{
//     console.log(response);
// }).catch((error)=> console.log(error))



const myPromise = new Promise((resolve,reject)=>{
    const is_promise = false;
    if(is_promise) {
        console.log("is promise is true")
        resolve()
    } else {reject("error")}
})

myPromise.then(()=>{
    console.log("the promise value is true");

})
.catch(()=> {console.log("promise value is fales");})
.finally(()=>{console.log("final result")})

console.log(myPromise)
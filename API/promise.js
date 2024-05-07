const promiseOne = new Promise(function (resolve,reject){
    //Do an async task
    //DB calls,cryptography, network

    setTimeout(() => {
        console.log("Async task is complete");
        resolve()
    }, 1000);
})

promiseOne.then(function () {
    console.log("Promised Consumed");
})

//Method - Promise Two


new Promise(function (resolve,reject) {
    setTimeout(() => {
        console.log("Async task two is complete");
        resolve()
    }, 1000);
}).then(function () {
    console.log("Async 2 completed")    
})

//Method - Third Promise

const promiseThird = new Promise(function (resolve,reject) {
    setTimeout(() => {
        
        resolve({username : "ali", email: "ali@example.com"})
    }, 1000);
})

promiseThird.then(function (user) {
    console.log(user);    
})

//Method - Promise Four

const promisFour = new Promise(function (reslove,reject) {
    setTimeout(() => {
    let error = true
    
    if(!error) {
        reslove({username : "mehar", password: 123})
    } else {
        reject("Error : Something went wrong")
    }
    }, 1000);
})

promisFour.then((user) => {
    console.log(user);
    return(user.username)
}).then((username) => {
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(() => console.log("program to war gaya"))

// Method promise five

const promisFive = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = true
        
        if(!error) {
            resolve({username : "javascript", password: 123})
        } else {
            reject("Error : Java went wrong")
        }
        }, 1000);
})

async function consumedPromiseFive() {
    try {
        const response = await promisFive    
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumedPromiseFive()

async function callNameTroughAPI (){
    const apiData = await fetch('https://randomuser.me/api/')
    const jsonData = await apiData.json()
    console.log(jsonData);
}

callNameTroughAPI()

// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task is complete");
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("PromiseOne consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2 is complete");
//         resolve()
//     } , 1000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({
            username: "Prince",
            email: "prince@google.com",
            age: 18
        })
    }, 1000)
})

// promiseThree.then(function(user){
//     console.log(user);
// })

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "Prince", email: "Abc@gmail.com"})
        }else{
            reject('ERROR: 404')
        }
    }, 1000)
})

// promiseFour.then(function(user){
//     console.log(user);
//     return user.username
// }).then(function(myUsername){
//     console.log(myUsername);
// }).catch(function(error){
//     console.log(error);
// }).finally(function(){
//     console.log('The promise is either resolved or rejected');
// })

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "Dark", email: "dark@google.com"})
        }else{
            reject('ERROR: JS 404')
        }
    }, 1000)
})

async function consumedPromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

// consumedPromiseFive()

async function getAllUsers(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    console.log(data);
}

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
}).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log("Error");
})
// promise is an object of an eventual completion or failure of an asynchronous operation
const promiseOne = new Promise(function(resolve, reject){
    // Do any sync task
    // DB calls, netwok, cryptography
    setTimeout(function(){
        console.log("Asyn task is complete");
        resolve();
    },1000)
})

//then() is used to consume the promise which connected with resolve when resolve() is executed

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    },1000)
}).then(() => {
    console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "Ujjwal", email: "dynamis899@gmail.com"});
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: " Ujjwal ", password:"123"});
        }else{
            reject("ERROR : Something went wrong! ")
        }
    },1000)
})

const username = promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected") )

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Javascript", password: "123"});
        }else{
            reject('ERROR: JS went wrong! ')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
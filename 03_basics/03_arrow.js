const user = {
    username: "ujjwal",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); //this access only from current context
        console.log(this);  //gives current context or value
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);//when we write this in console of browser then its browser engine gives window or mac as global object but in node environment there is no global object it gives empty parenthesis

// function chai(){
//     console.log(this);
// }

// chai()

// function chai(){
//     let username = "ujjwal"
//     console.log(this.username);
// }

// chai() //undefined because this can used in functions

// const chai = function () {
//     let username = "ujjwal"
//     console.log(this.username); //also gives undefined
// }

// chai()

// const chai = () => {
//     let username = "ujjwal"
//     console.log(this);  //also gives undefined for this.username in function and this will give empty paranethsis
// }

// chai()

// const addTwo = (num1, num2) => { //Agar curly bracket diye toh return likhna jaruri hai  
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2  //agar curly bracket nhi diye toh direct likh sakte hai arrow function ke baad

// const addTwo = (num1, num2) => (num1 + num2 )

const addTwo = (num1, num2) => ({username: "ujjwal"}) //agar object bhi return karana hai toh paranthesis ke andar denge

console.log(addTwo(3,4))
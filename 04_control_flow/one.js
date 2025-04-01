// if 

const isUserLoggedIn = true
const temperature = 41;

if(2 == "2"){          // if === is used here then type will also get checked
    // console.log("executed");  
}

// <, <=, >, >=, ==, ===, !=

// if(temperature === 40){
//     console.log("Less than 50");
// }else{
//     console.log("Temperature greater than 50");
// }

// const score = 200;
// if(score > 100){
//     const power = "fly";
//     console.log(`User power: ${power}`);
// }
// // console.log(`User power: ${power}`);

const balance = 1000

// if(balance > 500) console.log("Test"),console.log("test2"); // we can write like this but this is not a good practice

// if(balance < 500){
//     console.log("Balance less than 500");
// }else if (balance < 750){
//     console.log("Balance than 750");
// }else if (balance <900){
//     console.log("Balance less than 900");
// }else{
//     console.log("Balance less 1200");
// }

const userLoggedIn = true
const debitCard = true
const LoggedinFromGoogle = false
const LoggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course");
}

if (LoggedInFromEmail || LoggedinFromGoogle){
    console.log("User Logged In");
}


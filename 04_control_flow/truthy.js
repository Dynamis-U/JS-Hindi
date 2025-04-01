const userEmail = []

// if(userEmail){
//     console.log("Got user Email");
// }else{
//     console.log("Don't have user Email");
// }

//FALSY VALUES

// "",0, BigInt 0n, null, undefined, false, -0, NaN

//TRUTHY VALUES

// " ", "0", 'false', [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is Empty")
// }

// const emptyObject = {}

// if (Object.keys(emptyObject).length === 0){
//     console.log("Object is empty");
// }

// Null Colescing Operator (??): null undefined

// let val1 = 5 ?? 10
// let val1 = null ?? 5
// let val1 = undefined ?? 5
// let val1 = undefined ?? null  // gives the very first value
let val1 = null ?? 5 ?? 10
// console.log(val1);

//Ternary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80")
// Primitive

// 7 types : Number, String, Boolean, null, undefined, Symbol and BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail 

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); //output as false in symbol datatype it store differnt value for the same value of id and anotherId

const bigNumber = 345654763758n

//Reference (Non primitive)

// Arrays, Object, Functions

const heroes = ["Shaktimaan","Naagraj","Doga"];
let myobj = {
    name: "ujjwal",    //myobject is object and it have different datatypes in it
    age: 21,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction); //actually its datatype is function object

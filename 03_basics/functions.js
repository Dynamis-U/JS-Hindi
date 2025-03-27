function sayMyName(){
    console.log("U");
    console.log("J");
    console.log("J");
    console.log("W");
    console.log("A");
    console.log("L");
}

//sayMyName => This is for funtion reference 
//sayMyName => This is forfunction execution

// sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumber(3,5)

// console.log(`Result : ${result}`);

function loginUserMessage(userName){  //we can also provide default value as userName = "sam"
    if(!userName){
        console.log("Please enter a Username");
        return
    }
    return `${userName} just Logged in`
}

// console.log(loginUserMessage());

// function calculateCartPrice(num1){
//     return num1    //if multiple argument give it only return the very first argument passed 
// }

// function calculateCartPrice(...num1){  // now this work as rest operator ... bhikri yani spread chizo ko rest karta hai ekatha karta hai and rest chize jo ek hee array me hai unko spread kar deta hai
//         return num1
//     }

function calculateCartPrice(value1,value2,...num1){  // value1 goes to first agrument and value to goes to second argument remaining will be printed as rest operator used for spread values
    return num1
}

// console.log(calculateCartPrice(200,300,500,2000));

const user = {
    username : "ujjwal",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
// handleObject(user)
handleObject({
    username : "Barry Allen",        //we can also pass object by creating in argument of anyObject
    price : "399"
})

const getNewArray = [200, 300, 600,3000]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(getNewArray));
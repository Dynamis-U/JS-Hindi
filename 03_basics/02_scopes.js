// var c = 300
let a = 25
if(true){
    let a = 10
    const b = 20
    // var c = 30
    // console.log("INNER : ",a)
}

// console.log(a);  //a not defined in this scope
// console.log(b);   //b not defined in this scope 
// console.log(c);     //variable declared with var dont follow any scoping thats why nowdays it is not used 

function one(){
    const userName = "Ujjwal"
    
    function two(){
        const website = "AnimeSuge"
        // console.log(userName);
    }
    console.log(website);
    two()    //Due to line by line execution just above line gives an error so this function will never be executed ;)
}

// one()

if(true){
    const username = "Ujjwal"
    if(username === "Ujjwal"){
        const website = " AnimeSuge"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ########################################## Interesting ###########################################

console.log(addOne(7));

function addOne(num){          //We can use the function before declaration when declare like this 
    return num + 1
}

console.log(addTwo(7));

const addTwo= function(num){    //we can not use the function before the declaration when we declare like that this called hoisting
    return num + 2
}
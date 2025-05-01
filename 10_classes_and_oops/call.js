function setUsername(username){
    //complex DB calls
    this.username = username;
    console.log("called");
}

function createUser(username, email, password){
    // setUsername(username); // this called the setUsername function but after call it remove its reference and execution context
    // setUsername.call(username); // it also called but it saved in setUsername this reference it have to give his own this reference because after excecution of outer function its data get cleared from excution context 
    setUsername.call(this, username); // first parameter this bydeafault pointed to his own this bol raha apne this me mat save karo tum kyuki gayab ho jaoge mere this me save kardo isiliye
    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai)
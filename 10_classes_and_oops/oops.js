const user = {
    username: "Ujjwal",
    logginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from Database");
        // console.log(`username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDetails());

function User(username, logginCount, signedIn){
    this.username = username;
    this.logginCount = logginCount;
    this.signedIn = signedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this
}

const userOne = new User("Ujjwal", 7, false);    // new is a constructor that create a new instance of same function
// const userTwo = User("Sahu", 10, true);       // Hence using new keyword is important 
const userTwo = new User("Sahu", 10, true);

console.log(userOne);
console.log(userTwo.constructor)  // .constructor gives the type of instance it is



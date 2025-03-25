//singleton
//object.create

//object literals

const mySym = Symbol("key1");

const JsUser = {
    name : "Ujjwal",
    "full name" : "Ujjwal Sahu",
    age : 21,
    [mySym] : "mykey1",   //for using it as symbol we to pass it in square brackets []
    location : "Prayagraj",
    email : "ujjwal@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

console.log(JsUser.email);   //accessing object using . operator
console.log(JsUser["email"]); //email is behind the scene stored as string so we give email in ""
console.log(JsUser["full name"]) //full name is accessed only in square notation can't be accessed in .full name neither in ."full name" because this syntax is not allowed
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]); //it give value it taking i.e. string

JsUser.email = "ujjwal@chatgpt.com";
console.log(JsUser);
// Object.freeze(JsUser); // now no further changes is allowed
JsUser.email = "jingalala@amz.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); "when we accessing the same object which we are using then we simply use this operator"
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



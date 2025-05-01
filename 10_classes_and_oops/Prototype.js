let myName = "Ujjwal     "

// console.log(myName.length);


let myHeros = ["Thor", "Spiderman"];

let heroPowers = {
    Thor : "Hammer",
    Spiderman : "Sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.Spiderman}`)
    }
}

Object.prototype.ujjwal = function(){           //Accessing top level of hierarchy           
    console.log(`ujjwal is present in all objects`)
}

/*
Whether its array whether it is string and whether is funtion all are objects in Javascript or you can say 
everything structure is pass through objects object is parent of everyone 
Objects doesnot have any other superprototype
*/ 

// heroPowers.ujjwal()
// myHeros.ujjwal()

Array.prototype.heyUjjwal = function(){
    console.log(`Ujjwal says Hello`)
}

// heroPowers.heyUjjwal()   // See function is added into prototypes of Arrays so object don't get this function

// myHeros.heyUjjwal()  // It is Array so that it is able to use this function also string can't use it too

// Inheritance

const user = {
    name : "Chai",
    email : "Chai@google.com"
}

const teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS Assignment',
    fulltime : true,
    __proto__ : TeachingSupport
}

teacher.__proto__ = user

// console.log(TASupport.isAvailable)
// console.log(user.email)
// console.log(teacher.email)

// this is jis(ne) bhi call kiya hai uska hee current context LOL its quite simple 

let anotherUsername = "Radhe  Radhe";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`)
}

anotherUsername.trueLength(); // see trim function spaces in between words ko trim nhi karta

"Ujjwal".trueLength()



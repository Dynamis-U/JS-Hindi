// const tinderUser = new Object(); // it can be created singleton object

const tinderUser = {} //while is not singleton object
// both are ways of creating an object 
// Singletons are useful when you need only one shared instance across an application, such as: 
// ✅ Configuration Settings
// ✅ Database Connections
// ✅ Caching
// ✅ Logging

console.log(tinderUser);

tinderUser.id = "abc123"
tinderUser.name = "Wasomy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Ujjwal",
            lastname : "Sahu",
        }
    }
}

console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj4 = {5 : "a", 6 : "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2}


console.log(obj3);

const users = [
    {
    },
    {
    },
    {
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename : "JS in Hindi",
    price : "999",
    courseInstructor : "Hitesh"
}

// course.coursseInstructor
// const {courseInstructor} = course //it declare that courseInstructor is accessed from object course
const{courseInstructor : instructor} = course //courseInstructor is kinda big name to call so now it can be called only by typing Instructor
console.log(instructor);

// const navbar = ({company}) => {       //{} this is used for destructuring

// }

// navbar(company = "Hitesh")
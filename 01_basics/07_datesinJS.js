//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// let myCreatedDate = new Date("2024-1-14");
let myCreatedDate = new Date("1-14-2024")
// console.log(myCreatedDate.toLocaleString());

let timeStamp = Date.now()

// console.log(timeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());

console.log(newDate.toLocaleString('default',{weekday : "short"})); //gives output mon,if it was weekday : "long" then gives output as monday


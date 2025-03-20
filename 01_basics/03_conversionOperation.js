let score = true //undefined -> NaN(not a number)
// null -> 0
//any string -> NaN
//true/false -> 1/0


//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

let isLoggedIn = "Ujjwal"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true  0 => false
// "" => false
// "Ujjwal" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);
let score = true //undefined -> NaN(not a number)
// null -> 0
//any string -> NaN
//true/false -> 1/0


// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

let isLoggedIn = "Ujjwal"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true  0 => false
// "" => false
// "Ujjwal" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(typeof stringNumber);
// console.log(stringNumber);

// ************************* OPERATIONS *********************************

let value = 3
let negValue = -value

// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%3);

let str1 = "Ujjwal"
let str2 = " Sahu"     // Space deke Sahu likha hu isiliye concatenate hoga o/p me space ke sath
let str3 = str1 + str2

// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);    //Pehla number string toh concatenate hoga age wali values bhi
// console.log(1 + 2 + "2");    //Pehle do number hai toh operation hoga they act like operand baad wali value string so it concatenate simply

// console.log((3+5)*5%2);

console.log(+true);
console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// Link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


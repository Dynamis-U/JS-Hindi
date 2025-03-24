const score = 400
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length); //3
// console.log(balance.toFixed(2)); //100.00

const otherNumber = 123.8967
// console.log(otherNumber.toPrecision(5));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //en-US for US standard 1,000,000 en-IN for Indian standard 10,00,000

//*********************** MATHS **********************************

// console.log(Math);
// console.log(Math.abs(-45));
// console.log(Math.round(4.56));
// console.log(Math.ceil(6.3));
// console.log(Math.floor(6.99));
// console.log(Math.min(4,6,3,7));
// console.log(Math.max(4,6,3,7));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*max - min + 1)+min );
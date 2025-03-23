const Name = "ujjwal"
const repoCount = 7

// console.log(Name + repoCount + " Sahu");  //bad method

// Always use String Interpolation Method using backticks(` `)

console.log(`Hello my name is ${Name} and my repo count is ${repoCount}`); //also we can perform some function in string like ${Name.touppercase}

const gameName = new String('Ujjwal-us-com') //new string create new string object in heap while string('Ujjwalus') uses existing string in a pool but when we use new string it does not use existing same string

console.log(gameName[0]);
console.log(gameName.__proto__);  //we get object showing that it is empty but actually its not empty

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('w')); //if character not present then it give -1

const newString = gameName.substring(0, 4)  //substring function doesnt take negative value in argument
console.log(newString);

const anotherString = gameName.slice(-8,4)  //if you take more negative value then the length then it consider the index one
console.log(anotherString);

const stringOne = "   Ujjwal    "
console.log(stringOne);
console.log(stringOne.trim());

const url = "https://ujjwal.com/ujjwal%20sahu"

console.log(url.replace('%20','-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));


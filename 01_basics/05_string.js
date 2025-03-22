const Name = "ujjwal"
const repoCount = 7

// console.log(Name + repoCount + " Sahu");  //bad method

// Always String Interpolation Method using backticks(` `)

console.log(`Hello my name is ${Name} and my repo count is ${repoCount}`); //also we can perform some function in string like ${Name.touppercase}

const gameName = new String('Ujjwalus')

console.log(gameName[0]);
console.log(gameName.__proto__);  //we get object showing that it is empty but actually its not empty

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('w')); //if character not present then it give -1

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7,4)  //if you take more negative value then the length then it consider the index one
console.log(anotherString);

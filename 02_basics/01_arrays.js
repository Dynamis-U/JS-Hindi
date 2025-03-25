//arrays

const myArr = [0,1,2,3,4,5]
const heroes = ["Shaktimaan", "Nagraj"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[3]);

//Array Method

// myArr.push(6);
// myArr.push(7);
// myArr.pop();
// console.log(myArr);

// myArr.unshift(9);
// myArr.shift();

// console.log(myArr);
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // join operation adds all elements into string and newArr datatype is string now but datatype of myArr is still object

// console.log(newArr);
// console.log(typeof newArr);

// slice, splice
console.log("A ",myArr);

const myn1 = myArr.slice(1,3)   //it print value of elements from index 1 to 3 except range
console.log(myn1);    //slice never manipulate original array

console.log("B ",myArr);

const myn2 = myArr.splice(1,3) //it doesnt print it actually give value which it remove from the original array
console.log(myn2);  //splice manipulate original array
console.log("C ",myArr);




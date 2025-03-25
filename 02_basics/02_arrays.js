const marvel_heroes = ["thor", "ironman","captainAmerica"]

const dc_heroes = ["batman","superman","wonderwoman"]

// marvel_heroes.push(dc_heroes); //it push whole array as an element :( 

// console.log(marvel_heroes);

// to get any element from the inner array 

// console.log(marvel_heroes[3][1]);

// but we use CONCATENATE OPERATION instead of PUSH OPERATION it combine both arrays in new array

// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(marvel_heroes.concat(dc_heroes));

//instead of concate we prefer SPREAD OPERATOR i.e ...

const all_new_heroes = [...marvel_heroes,...dc_heroes];
// console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,[3,5,[8,1]],3]
const real_another_array = another_array.flat(3)  //flat returns array elements to specified depth in argument we can also give infinity it automatically disolves the maximum depth ;-;

// console.log(real_another_array);

// console.log(Array.isArray("Ujjwal")); //it checks whether it is array or not 
// console.log(Array.from("Ujjwal"));  //it convert into array
// console.log(Array.from({name : "Ujjwal"})); // it return empty array because it get confused whether it have to make array of keys or v from value


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

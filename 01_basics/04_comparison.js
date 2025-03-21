// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);  
// console.log(null == 0);
// console.log(null >= 0);

// The reason is the equality (==) and comparison (>,<,>=,<=) operators work differntly
// Comparisons convert null to a number, treating it as 0. Thats why (3) null >= 0 true and (1)null > 0 false

// console.log(undefined == 0);
// console.log(undefined < 0);
// console.log(undefined > 0);

// undefined gives false value with both equality check and comparison operator

// ===

console.log("2" === 2); //== gives true because it doesn't do data type check but === gives false as it check datatype also


const descripter = Object.getOwnPropertyDescriptor(Math, 'PI');

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

// console.log(descripter);

const chai = {
    name : 'ginger chai',
    price : 250,
    isAvailable : true,

    orderChai : function(){
        console.log("Chai nhi bani");
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
//     writable : false,
    enumerable : false        // it will stop  iteration now
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {          // chai us object and it is directly not iterable although object iterable or not it depends situation to situation so we iterates it by its entries
    
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
    
}

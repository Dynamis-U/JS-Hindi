const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,curval) {
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc + curval
// },3)

const myTotal = myNums.reduce( (acc,curval) => acc + curval, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "JS course",
        price : 899
    },
    {
        itemName : "PY course",
        price : 499
    },
    {
        itemName : "Mobile Development course",
        price : 4999
    },
    {
        itemName : "Data Science course",
        price : 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price , 0 )

console.log(priceToPay);

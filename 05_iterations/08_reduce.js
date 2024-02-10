const myNums = [1, 2, 3]


// const mySum = myNums.reduce(function (acc, curVal) {
//     console.log(`acc: ${acc} and current vlaue: ${curVal}`);
//     return acc + curVal
// }, 0)


// const mySum = myNums.reduce( (acc, curVal) => acc + curVal, 0) // intilised value of accumlator(acc)


const shoppingCart = [
    {
        itemName: "Js course",
        price: 2999
    },
    {
        itemName: "Pyhton course",
        price: 999
    },
    {
        itemName: "Mobile devcourse",
        price: 6999
    },
    {
        itemName: "Data Science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price,0 )
console.log(totalPrice);
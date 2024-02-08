const user =  {
    username: "Prince",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);
        console.log(this); // "this" tells about current context
    }
}

// user.welcomeMessage()
// user.username = "Spiderman"
// user.welcomeMessage()

// console.log(this);

function one(){
    let username = "Prince"
    console.log(this.username); // undefined , we can use "this" only in objects
}
// one()

const chai = function(){
    let username = "spiderman"
    console.log(this.username); // undefined
}
// chai()

// Arrow functions

const two = () => {
    let username = "thor"
    console.log(this.username); // undefined
}
// two()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// const addTwo = (num1,num2) => num1 + num2 // implicit return

// const addTwo = (num1,num2) => (num1 + num2)

// const addTwo = (num1,num2) => ({username: "Prince"})

console.log(addTwo(6,9));


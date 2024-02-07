function printName(){
    console.log("Prince");
    console.log("Prince");
    console.log("Prince");
    console.log("Prince...");
    console.log("sunai de rha hai bhera nhi hu mai!");
    
}
// printName()

// function addTwoNumber(num1, num2){
//     console.log(num1 + num2);
// }
 
// *******return type function*******
function addTwoNumber(num1, num2){ //parameters
    return num1 + num2
}
 let result = addTwoNumber(69,34) //arguments

// console.log("Result: ",result);
// addTwoNumber(4, "5")

function loginMessage(username = "Spiderman"){ // if we don't pass anything while calling the function default value will be taken, that is "spiderman" here.
    if(username === undefined){
        console.log("Please enter a username.");
    }else{
        return `${username} ne login kiya `
    }
    
}

console.log(loginMessage("Prince")); // if we pass any value it will overwrite the default value

//************functions with arrays anad objects*************

function addCartPrice(...number){ // ...(rest operator)
    return number
}

// console.log(addCartPrice(300,500,4000,6900));
// output => [ 300, 500, 4000, 6900 ]

// objects

const user = {
    username: "Prince",
    age: 18
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);
}

// handleObject(user)
// handleObject({
//     username: "Spiderman",
//     age: "69"
// })

const myArr = [300,400,900,800,4000]

function returnFirstValue(array){
    return array[0]
}

// console.log(returnFirstValue(myArr));
console.log(returnFirstValue([348,56,900])); // passing array directly
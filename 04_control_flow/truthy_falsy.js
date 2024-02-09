const userEmail = "abc@gmail.com"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

const emptyArray = []

if (emptyArray.length === 0) {
    console.log("Array khali/empty hai");
}

const emptyObj = {}
if (Object.keys(emptyArray).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 // => 5
// val1 = null ?? 10 // => 10
// val1 = undefined ?? 15 // => 15
// val1 = null ?? 10 ?? 55 // => 10

// console.log(val1);

// Terniary Oprator

// condition ? true : false
 const marks = 40
 marks > 80 ? console.log("topper") : console.log("Loser"); 
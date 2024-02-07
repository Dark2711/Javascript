// Primitive datatype

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// 1. Number
const marks = 98 
let marks1 = 78.6

// 2. String
let city = "Chandigarh"

// 3. Boolean
let isLoggedIn = true

// 4. null
let temp = null

// 5. undefined
let state;

// 6. Symbol
const id = Symbol('2324')
const anotherId = Symbol('2324')

console.log(id === anotherId); // false

// 7. BigInt
const Bdanumber = 4523564252625623525252562n  
console.log(Bdanumber);
console.log(typeof Bdanumber); //bigint

// Reference (Non Primitive)

// Array, Objects, Functions

// 1.Array
let Name = ["Prince", "Rahul", "Ruchit"];
console.log(Name);

// 2.Objects
let Obj = {
    Name: "Prince",
    age: 28,
}
console.log(Obj);

// 3. Functions
let myfunction = function print(){
    console.log("Hello Prince");
}
// ****************************************

// Stack (Primitive) , Heap (Non primitive)
//stack makes a copy of orginal
// heap is a refernce 

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


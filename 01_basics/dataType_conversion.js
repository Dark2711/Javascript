let num = 57
let string_num = String(num) // number to string
let str = "69ac"


// console.log(string_num);
// console.log(typeof string_num);

let number_str = Number(str) // string to number
// console.log(number_str);
// console.log(typeof number_str);

let isLoggedIn = ""
let bool_isLoggedIn = Boolean(isLoggedIn)

// console.log(bool_isLoggedIn);

/*
 String to Number Conversion
 "69" => 69
 "69ab" => NaN(Not a number)
*/

/*
    boolean conversion
    true => 1
    false => 0
*/
// 1 => true 0 => false
// "hey" => true
// "" => false

// String Oprations

let s1 = "Prince"
let s2 = " Kumar"

console.log(s1 + s2); 

// console.log("1" + 3); // => 13
// console.log(1 + "3"); // => 13
// console.log("1" + 2 + 3); // => 123
// console.log(1 + 2 + "3"); // => 33

let counter = 100
let newCounter = counter++
let newCounter1 = ++counter
console.log(newCounter);
console.log(newCounter1);
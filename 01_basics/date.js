// Dates

let date = new Date()
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());

console.log(typeof date); //object

// let myCreateDate = new Date(2024,10,27)
// let myCreateDate = new Date(2024, 10, 27, 12, 35)
let myCreateDate = new Date("2024-11-27")
console.log(myCreateDate.toLocaleString());
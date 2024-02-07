const score = 100
console.log(score);

const marks = new Number(98)
console.log(marks);

// Numbers method

console.log(marks.toString().length); // converts number to string and we can use string methods on numbers

console.log(marks.toFixed(2)); // 98.00
console.log(marks.toFixed(4)); // 98.0000

let otherNum = 349.8953
console.log(otherNum.toPrecision(4)) //349.9
console.log(otherNum.toPrecision(3)); //350

const ruppees = 1000000
console.log(ruppees.toLocaleString()); //10,00,000

// ***************** Maths **********************

// console.log(Math.PI);
// console.log(Math.abs(-69)); // 69
// console.log(Math.round(6.8)); // 7
// console.log(Math.ceil(5.3)); // 6
// console.log(Math.floor(4.9)); // 4
// console.log(Math.max(5,36,67,69)); // 69
// console.log(Math.min(5,36,67,69)); // 5

// math.random()

console.log(Math.random()); // between 0 to 1
console.log((Math.random()*10) + 1); // will give numbers between 1 to 10
console.log(Math.floor((Math.random()*10) + 1)); // it will give numbers without decimal because of floor

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // will give numbers between 10 to 20

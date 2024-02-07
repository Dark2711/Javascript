 const myArr = ["prince", 18, "chandigarh", 123,]
myArr[2] = "Mohali" // value changed at index 2
// console.log(myArr[2]);

const myHeros = ["Spiderman", "IronMan", "DoctorStrange"]

// another way to declare array using new keyword
const myArr2 = new Array("ab", "cd", 12, 1.2)
// console.log(myArr2);


// Array methods

myArr.push(69) //add the value at the end in array
myArr.pop() // remove the last value of array

myArr.unshift("hello") // insert the value at the start and it shifts the other elements 
myArr.shift() // remove the first element of the array

console.log(myArr.includes(1)); // checks whether the element is in the array or not and give result in true/false

console.log(myArr.indexOf(123)); // gives the index of the given element and if the element doesn't exist it reuslts in -1.

const arr = [0, 1, 2, 3, 4, 5]
const newArr = arr.join() // converts the array into string

// console.log(arr);
// console.log(typeof newArr); //string

// slice, spilce

console.log("A ", arr);

const arr1 = arr.slice(1, 3)

console.log(arr1); // slice
console.log("B ", arr);

const arr2 = arr.splice(1, 3) 
console.log("C ", arr);
console.log(arr2); // splice => it manipulates the original array
let name = "Prince"
let age = 18

// console.log(name + age);

console.log(`Hello my name is ${name} and I am ${age} years old`);

//another way to declare string
const gameName = new String('Dark-lord')

console.log(gameName[3]);

console.log(name.length); // gives the length of the string 
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0, 4)
console.log(newString);

const str1 = gameName.slice(-8, 4) // in slice we can give negative indexing
console.log(str1);

const str2 = "   Prince    "
console.log(str2);
console.log(str2.trim()); //trims the extra spaces

const str3 = "https://www.google.com/"
console.log(str3.replace('google', 'netflix'));
console.log(str3.includes('https'));

console.log(gameName.split('-')); // it splits the gameName on the basis of '-' and make array of it 
// [ 'Dark', 'lord' ]

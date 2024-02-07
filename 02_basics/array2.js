const marvel_heroes = ["Ironman", "Thor", "Spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes) // it will add dc_heroes array in marvel_heroes as a single element 
// [ 'Ironman', 'Thor', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heroes);

// const allHeroes = marvel_heroes.concat(dc_heroes) // it combines to or more and create a new array of combined arrays
// console.log(allHeroes);

const all_new_heros = [...marvel_heroes, ...dc_heroes]
// it is spread operator it is similar to concat
// console.log(all_new_heros);

const newArr = [1,2,3,[4,5,6],7,[5,4,[4,66,69]]]

const realArr = newArr.flat(Infinity)
// flat => returns a new array with all sub array concated as one 
// console.log(realArr);

console.log(Array.isArray("Prince")); // checks its array or not
console.log(Array.from("Prince")); // Array.from()=> converts into array


let marks1 = 90
let marks2 = 69
let marks3 = 98

console.log(Array.of(marks1, marks2, marks3)); 
// [ 90, 69, 98 ]

// for of loop
let arr = [1, 2, 3, 4, 5]
for (const i of arr) {
    // console.log(i);
}

let name = "Prince Kumar"
for (const ch of name) {
    if(ch == " "){
        continue
    }
    // console.log(`Each character is ${ch}`);
}

// map
//it holds value in key value pair and holds only unique key values

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United Statese of America')
map.set('Fr', 'France')
map.set('IN', 'India') // this will not be stored
// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":-" , value);
}

// const myObj = {
//     name1: "Prince",
//     name2: "rahul"
// }
// for (const [key, value] of myObj) {
//     console.log(key, ":-" ,value);
// }
// object is not iterable using for of loop
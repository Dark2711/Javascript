// for in

const myObj = {
    js: "Javascript",
    py: "Python",
    cpp: "C++",
    rb: "ruby"
}

for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}

const myArray = ["js", "py", "rb", "java", "rust"]

for (const key in myArray) {
//    console.log(myArray[key]);
}

// const map = new Map()
// map.set('IN', 'India')
// map.set('USA', 'United Statese of America')
// map.set('Fr', 'France')

// for (const key in map) {
//     console.log(key); // iteration not possible
// }
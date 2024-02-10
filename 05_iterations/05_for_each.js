// for ecah

const language = ["js", "c++", "python", "java", "ruby"]

// language.forEach( function (value){
//     console.log(value);
// } )

// language.forEach( (val) => {
//     console.log(val);
// })

function printMe(item){
    console.log(item);
}

// language.forEach(printMe)

// language.forEach( (item, index, array) => {
//     console.log(item,index,array);
// })

const myCoding = [
    {
        language: "javascript",
        languageFileName: "js"
    },
    {
        language: "C++",
        languageFileName: "cpp"
    },
    {
        language: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.language);
})
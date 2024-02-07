// {
//     let a = 10
//     const b = 20
//     var c = 30
// }

//  console.log(a);
//  console.log(b);
//  console.log(c); // any variable declared with var is accesible from outside the block scope 
// that's why var should not be used
 
let a = 300 // here a is declared globally that is called global scope

if(true){
    let a = 10
    // console.log("INNER: ",a); // here a has its own scope that is a is in block scope
}
// console.log(a);

function one(){
    const username = "Prince"

    function two(){
        const email = "abc@google.com"
        console.log(username); // here it can access username because for this block username is declared globally(outside this block)
    }
    // console.log(email); // here it cannot access email
    two()
}
// one()

if(true){
    const username = "Spiderman"
    if(true){
        const email = " spider@man.com"
        // console.log(username + email);
    }
    // console.log(email); //error 
}
// console.log(username); //error

// console.log(addOne(5)) // here we can access it from any where
function addOne(num){
    return num + 1
}


// addTwo(7) // when we declare function using variable we cannot access it before initialization
const addTwo = function(num){
    return num +2
}

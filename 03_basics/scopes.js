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
    console.log("INNER: ",a); // here a has its own scope that is a is in block scope
}
console.log(a);



// IF

// if(conditon){
//     any code
// }

// < , >, <=, >=, ==, !=, ===, !==
// const temperature = 45

// if(temperature < 50){
//     console.log("Less than 50");
// }else{
//     console.log("Temperature is greater than 50");
// }

// console.log("Always Execute");

// const score = 200
// if(score > 100){
//     let power = "Fly"
//     console.log(`User Power: ${power}`);
// }

// const balance  = 1000

// short hand notation
// if (balance > 500) console.log("Rich People");

// if (balance < 500) {
//     console.log("less than 500");
// }else if (balance < 750){
//     console.log("less than 750");
// }else if (balance < 900) {
//     console.log("less than 900");
// }else {
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromYahoo = true

if(userLoggedIn && debitCard){ // && => "and" , every condition should be true
    console.log("Alow to buy Courses");
}
if(loggedInFromGoogle || loggedInFromYahoo){ // || => "or" , one of the condition should be true
    console.log("Logged In Succesfully");
}
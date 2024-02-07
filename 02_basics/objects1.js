// singleton => object.create

// objects literals

const mysym = Symbol("key1") // symbol declartion


const user = {
    name: "Prince",
    "full name": "Prince Kumar",
    [mysym]: "Mykey", // using symbol
    age: 18,
    location: "Chandigarh",
    email: "abc@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Tuesday", "Wednesday"]
}

// To access elements of objects
// console.log(user.email);
// console.log(user["email"]);
// console.log(user["full name"]);
// console.log(user[mysym]);

user.email = "prince@google.com"
// console.log(user["email"]);
// Object.freeze(user) // Prevents the modification in the object
user.email = "prince@chatgpt.com"
// console.log(user);

user.greeting = function(){
    console.log("Hello User"); 
}
user.greeting2 = function(){
    console.log(`Hello User, ${this.name}`);
}
console.log(user.greeting()); //Hello User
console.log(user.greeting2()); //Hello User, Prince
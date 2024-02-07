// const obj1 = new Object() => singeleton object

const obj1 = {} // non singeleton object
 obj1.id = "123abc"
 obj1.name = "Elon Musk"
 obj1.isLoggedIn = false

//  console.log(obj1);

const newUser = {
    email: "abc@google.com",
    fullname: {
        userfullname: {
            firstname: "Prince",
            lastname: "Kumar"
        }
    }
}

// console.log(newUser.fullname.userfullname.firstname);

// combining two or more objects
const obj2 = {1: "a", 2: "b"}
const obj3 = {3: "c", 4: "d"}

// const obj4 = {obj2, obj3}
// const obj4 = Object.assign(obj2, obj3)
// const obj4 = {...obj2,...obj3} // spread operator
// console.log(obj4);

// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));
// console.log(Object.entries(obj1));

// console.log(obj1.hasOwnProperty("isLoggedIn"));

// Destructuring of objects

const course = {
    courseName: "React in hindi",
    price: "free",
    courseInstructor: "Prince"
}

const {courseInstructor: Inst} = course
//  console.log(courseInstructor);
 console.log(Inst);
 
# Object-oriented Programming (OOP) in JavaScript

## Objects
JavaScript mein har cheez ek object hai, chahe wo ek function ho, ek array ho, ya ek primitive value jaise ki string ya number ho. JavaScript mein objects key-value pairs ki collection hote hain, jahan keys strings (ya symbols) hote hain aur values kisi bhi data type ke ho sakte hain.

## Classes aur Constructors
JavaScript classes aur constructors ko support karta hai, haalaanki ye prototype-based hai class-based nahi jaise ki Java ya C++ mein. Constructors functions hote hain jo objects ko ek blueprint (class) ke hisaab se banane ke liye istemal kiye jaate hain.

Example:
```javascript
// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Constructor ka istemal karke ek object banate hain
let person1 = new Person('John', 30);
```

## Prototypes aur Prototypal Inheritance
JavaScript prototypal inheritance ka istemal karta hai, jahan objects dusre objects se properties aur methods ko inherit kar sakte hain. Har object JavaScript mein ek prototype rakhta hai (ek object jis se wo properties inherit karta hai), aur agar koi property object par nahi milti hai, to JavaScript prototype chain ko dekhta hai.

Example:
```javascript
// Person prototype mein ek method add karte hain
Person.prototype.greet = function() {
    return 'Hello, my name is ' + this.name;
};

console.log(person1.greet()); // Output: Hello, my name is John
```

## Encapsulation
Encapsulation data (properties) aur methods (functions) ko ek saath bund karne ka process hai. JavaScript mein aap closures aur constructor functions ke through encapsulation achieve kar sakte hain.

Example:
```javascript
function Counter() {
    let count = 0;

    this.increment = function() {
        count++;
    };

    this.getCount = function() {
        return count;
    };
}

let counter = new Counter();
counter.increment();
console.log(counter.getCount()); // Output: 1
```

## Inheritance
Inheritance ek object ke ability hai jo dusre object (prototype) se properties aur methods ko inherit kar sakta hai. JavaScript mein inheritance implement karne ke liye prototype chaining ka istemal hota hai.

Example:
```javascript
// Parent class
function Animal(name) {
    this.name = name;
}

// Parent class mein ek method
Animal.prototype.speak = function() {
    console.log(this.name + ' makes a sound');
};

// Child class
function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

// Parent class se inherit karte hain
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Child class mein ek method
Dog.prototype.bark = function() {
    console.log('Woof! Woof!');
};

let myDog = new Dog('Buddy', 'Golden Retriever');
myDog.speak(); // Output: Buddy makes a sound
myDog.bark();  // Output: Woof! Woof!
```

## Polymorphism
Polymorphism ek concept hai jo allow karta hai ki objects of different types ko ek common type ke objects ke roop mein treat kiya ja sake. JavaScript mein, polymorphism method overriding aur duck typing ke through achieve kiya ja sakta hai.

Example:
```javascript
class Animal {
    speak() {
        console.log('Animal makes a sound');
    }
}

class Dog extends Animal {
    speak() {
        console.log('Dog barks');
    }
}

class Cat extends Animal {
    speak() {
        console.log('Cat meows');
    }
}

let myDog = new Dog();
let myCat = new Cat();

myDog.speak(); // Output: Dog barks
myCat.speak(); // Output: Cat meows
```

Yeh the JavaScript mein object-oriented programming ke mool bhavnaayein. Ye developers ko modular, reusable, aur maintainable code likhne mein madad karte hain, data aur behavior ko objects mein organize karke.

# In English
# Object-oriented Programming (OOP) in JavaScript

## Objects
In JavaScript, everything is an object, whether it's a function, an array, or a primitive value like a string or number. Objects in JavaScript are collections of key-value pairs, where keys are strings (or symbols) and values can be of any data type.

## Classes and Constructors
JavaScript supports classes and constructors, although it's prototype-based rather than class-based like languages such as Java or C++. Constructors are functions used to create objects based on a blueprint (class).

Example:
```javascript
// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Creating an object using the constructor
let person1 = new Person('John', 30);
```

## Prototypes and Prototypal Inheritance
JavaScript uses prototypal inheritance, where objects can inherit properties and methods from other objects. Each object in JavaScript has a prototype (an object from which it inherits properties), and if a property is not found on the object itself, JavaScript looks up the prototype chain.

Example:
```javascript
// Adding a method to the Person prototype
Person.prototype.greet = function() {
    return 'Hello, my name is ' + this.name;
};

console.log(person1.greet()); // Output: Hello, my name is John
```

## Encapsulation
Encapsulation involves bundling data (properties) and methods (functions) that operate on the data together. In JavaScript, you can achieve encapsulation through closures and constructor functions.

Example:
```javascript
function Counter() {
    let count = 0;

    this.increment = function() {
        count++;
    };

    this.getCount = function() {
        return count;
    };
}

let counter = new Counter();
counter.increment();
console.log(counter.getCount()); // Output: 1
```

## Inheritance
Inheritance is the ability of an object to inherit properties and methods from another object (prototype). JavaScript uses prototype chaining to implement inheritance.

Example:
```javascript
// Parent class
function Animal(name) {
    this.name = name;
}

// Method in the parent class
Animal.prototype.speak = function() {
    console.log(this.name + ' makes a sound');
};

// Child class
function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

// Inheriting from the parent class
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Method in the child class
Dog.prototype.bark = function() {
    console.log('Woof! Woof!');
};

let myDog = new Dog('Buddy', 'Golden Retriever');
myDog.speak(); // Output: Buddy makes a sound
myDog.bark();  // Output: Woof! Woof!
```

## Polymorphism
Polymorphism allows objects of different types to be treated as objects of a common type. In JavaScript, polymorphism can be achieved through method overriding and duck typing.

Example:
```javascript
class Animal {
    speak() {
        console.log('Animal makes a sound');
    }
}

class Dog extends Animal {
    speak() {
        console.log('Dog barks');
    }
}

class Cat extends Animal {
    speak() {
        console.log('Cat meows');
    }
}

let myDog = new Dog();
let myCat = new Cat();

myDog.speak(); // Output: Dog barks
myCat.speak(); // Output: Cat meows
```

These are the fundamental concepts of object-oriented programming in JavaScript. They allow developers to write modular, reusable, and maintainable code by organizing data and behavior into objects.


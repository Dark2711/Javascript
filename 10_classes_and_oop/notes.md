
# Abstraction, Encapsulation, Inheritance, and Polymorphism in JavaScript

## Abstraction

Abstraction is the concept of hiding the complex implementation details and showing only the necessary features of an object to the outside world. In JavaScript, abstraction can be achieved through functions and objects.

**Example:**

```javascript
// Abstraction through functions
function calculateArea(radius) {
    return Math.PI * radius * radius;
}

console.log(calculateArea(5)); // Output: 78.53981633974483
```

## Encapsulation

Encapsulation is the bundling of data and methods that operate on the data into a single unit (object). It restricts access to some of the object's components and only exposes what is necessary.

**Example:**

```javascript
// Encapsulation through objects
let person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

console.log(person.getFullName()); // Output: John Doe
```

## Inheritance

Inheritance is the mechanism by which one class (or object) can inherit properties and methods from another class (or object). It promotes code reusability and helps in creating a hierarchy of objects.

**Example:**

```javascript
// Inheritance through prototype chaining
function Animal(name) {
    this.name = name;
}

Animal.prototype.sayName = function() {
    console.log('My name is ' + this.name);
}

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.sayBreed = function() {
    console.log('I am a ' + this.breed);
}

let myDog = new Dog('Buddy', 'Golden Retriever');
myDog.sayName();   // Output: My name is Buddy
myDog.sayBreed();  // Output: I am a Golden Retriever
```

## Polymorphism

Polymorphism allows objects of different types to be treated as objects of a common type. It enables code to work with objects of multiple types and classes through a uniform interface.

**Example:**

```javascript
// Polymorphism through method overriding
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log('Animal makes a sound');
    }
}

class Dog extends Animal {
    makeSound() {
        console.log('Dog barks');
    }
}

class Cat extends Animal {
    makeSound() {
        console.log('Cat meows');
    }
}

let myDog = new Dog('Buddy');
let myCat = new Cat('Whiskers');

myDog.makeSound();  // Output: Dog barks
myCat.makeSound();  // Output: Cat meows
```


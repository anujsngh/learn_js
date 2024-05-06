// // Classes in Javascript

// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     sayHi() {
//         console.log(`Hello from ${this.name}!`)
//     }
// }

// let user = new User("John", "john@gmail.com");

// user.sayHi();

// console.log(User);

// console.log(user);

// console.log(typeof User); // function

// console.log(typeof user); // object


////////////////////////////////////////////////////////////////////////////


// // rewriting class User in pure functions

// // 1. Create constructor function
// function User(name) {
//     this.name = name;
// }
// // a function prototype has "constructor" property by default,
// // so we don't need to create it

// // 2. Add the method to prototype
// User.prototype.sayHi = function () {
//     alert(this.name);
// };

// // Usage:
// let user = new User("John");
// user.sayHi();


/////////////////////////////////////////////////////////////////////////////


// Named class Expressions

let animal = class Animal {
    constructor(name) {
        this.name = name;
    }
    sayHello(phrase) {
        console.log(`${this.name} says ${phrase}`);
    }
}

let tom = new animal("tom");
tom.sayHello("meow");

let jerry = new animal("jerry");
jerry.sayHello("squeak");


/////////////////////////////////////////////////////////////////////////////////


// Dynamic Classes
function makeClass() {
    return class {
        sayHi() {
            console.log("Hello there!")
        }
    }
}

// this is a class and not an object.
let User = makeClass();

console.log(User);

// this is a object
let user = new User();
user.sayHi();


////////////////////////////////////////////////////////////////


class Button {
    type = "Button"

    constructor(action) {
        this.action = action; 
    }

    click = () => {
        console.log(`Type: ${this.type}, Action: ${this.action}`);
    }
}

let saveBtn = new Button("Save");

setTimeout(saveBtn.click, 1000);



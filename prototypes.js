const { log } = require("console");

let animal = {
    eats: true,
}

let rabbit = {
    jumps: true,
}

// animal (parent)
//    |
// rabbit (child)
rabbit.__proto__ = animal; 
// "animal is the prototype of rabbit" or "rabbit prototypically inherits from animal".

log(animal.eats); // true
log(animal.jumps); // undefined

log(rabbit.eats); // true
log(rabbit.jumps); // true

rabbit.walk();

/////////////////////////////////////////////////////////////////////////

animal = {
    eats: true,
    walk() {
        log(`Animal walks !`);
    }
}

rabbit = {
    jumps: true,
    __proto__: animal,
}

// rabbit.__proto__ = animal;
rabbit.walk();


/////////////////////////////////////////////////////


function User(name, age) {
    this.name = name;
    this.age = age;
}

log(User.prototype); // {}

User.prototype = { constructor: User};

log(User.prototype); // { constructor: [Function: User] }

user = new User("John", 24);

log(user.prototype); // undefined

log(user.__proto__); // { constructor: [Function: User] }

log(user); // User { name: 'John', age: 24 }

anotherUser = new user.constructor("Jane", 23);

// // works as same above
// anotherUser = new user.__proto__.constructor("Jane", 23);

log(anotherUser);


/////////////////////////////////////////////////////////////////////


let obj = {
    name: 'John',
    age: 30,
    get fullName() {
        return `${this.name} Doe`;
    }
};

// Create a true clone of `obj`
let clone = Object.create(
    Object.getPrototypeOf(obj),
    Object.getOwnPropertyDescriptors(obj)
);

log(clone.name); // 'John'
log(clone.age); // 30
log(clone.fullName); // 'John Doe'



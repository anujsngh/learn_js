const { log } = require("console");

// simple illustration of getters and setters.
let user = {
    firstName: "John",
    lastName: "Smith",

    get fullName() {
        return this.firstName + " " + this.lastName;
    },

    set fullName(name) {
        [this.firstName, this.lastName] = name.split(" ");
    },
}

log(user.fullName) // John Smith
user.fullName = "Jean Kennedy";
log(user.firstName); // Jean
log(user.lastName); // Kennedy
log(user.fullName); // Jean Kennedy

log();

log(Object.getOwnPropertyDescriptors(user));

/* 
{
  firstName: {
    value: 'Jean',
    writable: true,
    enumerable: true,
    configurable: true
  },
  lastName: {
    value: 'Kennedy',
    writable: true,
    enumerable: true,
    configurable: true
  },
  fullName: {
    get: [Function: get fullName],
    set: [Function: set fullName],
    enumerable: true,
    configurable: true
  }
}
*/

//////////////////////////////////////////////////////////////////////////

// getter setter as wrappers for an internal property.
user = {
    get name() {
        return this._name;
    },

    set name(input) {
        if (input.length > 4 ) {
            this._name = input;
        } else {
            log("name is too short !");
        }
    }
}

user.name = "Alice";

log(user.name);

/////////////////////////////////////////////////////////////////////////

// we have a user object with age property
function User(name, age){
    this.name = name;
    this.age = age;
}

user = new User("John", 36);

log(user);

// now we want to add birthday property.
function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;
}

// this will break the previously existing code which uses `user.age` or similar syntax.
// to solve this problem we can include the age property with getters and setters.

function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    Object.defineProperty(this, "age", {
        get() {
            return new Date().getFullYear() - this.birthday.getFullYear();
        }
    });
}

let john = new User("John", new Date(2001, 4, 12));

log(john);
log(john.age);

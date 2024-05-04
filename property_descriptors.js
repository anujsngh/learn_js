const { log } = require("console");

let user = {
    name: "John",
    toString() {
        return this.name;
    }
};

log(Object.keys(user));

let descriptor = Object.getOwnPropertyDescriptor(user, 'toString');

log(JSON.stringify(descriptor, null, 2));

Object.defineProperty(user, "toString", {
    enumerable: false,
});

descriptor = Object.getOwnPropertyDescriptor(user, 'toString');

log(JSON.stringify(descriptor, null, 2));

log(Object.keys(user));


let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));

log(clone);

log(Object.getOwnPropertyDescriptors(user));
log(Object.getOwnPropertyDescriptors(clone));

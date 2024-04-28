"use strict";

const { log } = require("console");

//////////////////////////////////////////////////////////////////////////////////////

let range = {
    // doing this way ensures that only from and to methods are accessible from outside and not the attributes fromValue and toValue.
    [Symbol.for("fromValue")]: 0,
    [Symbol.for("toValue")]: 15,
    from(fromInput) {
        this[Symbol.for("fromValue")] = fromInput;
        return this;
    },
    to(toInput) {
        this[Symbol.for("toValue")] = toInput;
        return this;
    },
};

range[Symbol.iterator] = function() {
    return {
        current: this[Symbol.for("fromValue")],
        last: this[Symbol.for("toValue")],

        next() {
            if (this.current <= this.last){
                return {done: false, value: this.current++}
            } else {
                return {done: true}
            }
        },
    }
};

////////////////////////////////////////////////////////////////////////////////

for (const num of range.from(1).to(10)) {
    log(num);
}

///////////////////////////////////////////////////////////////////////////////

let string = "TEST0";

let iterator = string[Symbol.iterator]();

while (1) {
    let res = iterator.next();
    if (res.done) {
        break;
    } else {
        log(res.value);
    }
}

//////////////////////////////////////////////////////////////////////////////////
log(Array.from(range))


///////////////////////////////////////////////////////////////////////////////////
let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
};

let arr = Array.from(arrayLike);

log(arr);

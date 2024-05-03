let user = {
    firstName: "John",
    lastName: "Smith",
    sayHello: function () {
        console.log(`Hello, ${this.firstName + " " + this.lastName}`);
    },
}

// 1)
// does't work because function is passed by reference.
// setTimeout(user.sayHello, 1000);

// 2)
// wrapping in inside a function.
// setTimeout(() => user.sayHello(), 1000);

// 3)
// biniding user to it's method.
// let sayHelloFunc = user.sayHello.bind(user);

// setTimeout(sayHelloFunc, 1000);

// 4)
user.sayHello = user.sayHello.bind(user);

// setTimeout(user.sayHello, 1000);


user = {
    sayHello: function () {
        console.log(`Another user in setTimeout!`);
    }
}


/////////////////////////////////////////////////////////////////////////////////////

function mul(a, b) {
    console.log( a * b );
}

// doubles the input
let double = mul.bind(null, 2);

// double(3);
// double(2);
// double(5);
// double(4);
// console.log();

// triples the input
let triple = mul.bind(null, 3);

// triple(2);
// triple(3);
// triple(4);
// double(5);
// console.log();

///////////////////////////////////////////////////////////////////////////////

function bindPartial(func, ...boundArgs) {
    return function (...args) {
        return func.call(this, ...boundArgs, ...args);
    }
}

user = {
    firstName: "John",
    lastName: "Smith",
    say: function(time, msg) {
        console.log(`[${time}] ${this.firstName}: ${msg}`);
    }
}

// add a partial method with fixed time.
user.say = bindPartial(user.say, new Date().getHours() + ":" + new Date().getMinutes());

user.say("hello");










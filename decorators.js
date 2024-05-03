"use strict";

const { log } = require("console");

function hash() {
    return [].join.call(arguments);    // method borrowing
}

const worker = {
    roundResult(x) {
        return Math.round(x);
    },

    calculatePower(x, n) {
        /////////////////////////////////
        //// heavy CPU-intensive job ////
        /////////////////////////////////
        let result = this.roundResult(x ** n);
        log(`{ x: ${x}, n: ${n}, x**n: ${x}**${n} = ${result} }`);
        
        return result;
    },
}


function calculatePowerWrapper(func) {
    let cache = new Map();

    return function () {
        let x = arguments[0];
        let n = arguments[1];
        let key = hash(...arguments);
        // let key = `${x}**${n}`;
        
        if (cache.has(key)) {
            let result = cache.get(key);
            log(`Fetching results from cache: { x: ${x}, n: ${n}, x**n: ${x}**${n} = ${result} }`);
            
            return result;
        }

        // let result = func.call(this, ...arguments);    // works on iterables.
        let result = func.apply(this, arguments);    // faster and works only on array-like
        cache.set(key, result);
        
        return result;
    }
}

// log(calculatePower(5, 3));

worker.calculatePower = calculatePowerWrapper(worker.calculatePower);

worker.calculatePower(5, 3);

worker.calculatePower(5, 3);

worker.calculatePower(2, 5);

worker.calculatePower(2, 5);

worker.calculatePower(2, 5);

worker.calculatePower(5, 3);



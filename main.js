const { log } = require("console");

function calculatePower(x, n) {
    /////////////////////////////////
    //// heavy CPU-intensive job ////
    /////////////////////////////////
    let result = x ** n;
    log(`x: ${x}, n: ${n}, x**n: ${x}**${n} = ${result}`);
    return result;
}

function calculatePowerWrapper() {
    let cache = new Map();

    return function(x, n) {
        let key = `${x}**${n}`;
        if (cache.has(key)) {
            return cache.get(key);
        } else {
            return 
        }
    }
}

log(calcPow(5, 3));
const { log } = require("console");

function calculatePower(x, n) {
    /////////////////////////////////
    //// heavy CPU-intensive job ////
    /////////////////////////////////
    let result = x ** n;
    log(`{ x: ${x}, n: ${n}, x**n: ${x}**${n} = ${result} }`);
    return result;
}

function calculatePowerWrapper() {
    let cache = new Map();

    return function(x, n) {
        let key = `${x}**${n}`;
        if (cache.has(key)) {
            let result = cache.get(key);
            log(`Fetching results from cache: { x: ${x}, n: ${n}, x**n: ${x}**${n} = ${result} }`);
            return result;
        }

        let result = calculatePower(x, n);
        cache.set(key, result);
        return result;
    }
}

// log(calculatePower(5, 3));

const calcPow = calculatePowerWrapper();

calcPow(5, 3);

calcPow(5, 3);

calcPow(2, 5);

calcPow(2, 5);

calcPow(2, 5);

calcPow(5, 3);



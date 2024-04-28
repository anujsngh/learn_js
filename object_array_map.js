"use strict";

const { log } = require("console");

///////////////////////////////////////////////////////////////////

let array = [
    ["name", "ram"],
    ["age", 32],
    ["kingdom", "ayodhya"],
]

let object = {
    name: "laxman",
    age: 30,
    kingdom: "N/A",
}

let map = new Map();
map.set("name", "sita");
map.set("age", 31);
map.set("kingdom", "N/A");

// log(array)
// log(object)
// log(map)

// // object => map
let objectToMap = new Map(Object.entries(object));
// log(objectToMap);

// // map => object
let mapToObject = Object.fromEntries(map.entries());
// let mapToObject = Object.fromEntries(map);   // same as above
// log(mapToObject);

// // array => object
let arrayToObject = Object.fromEntries(array);
// log(arrayToObject);

// // object => array
let objectToArray = Object.entries(object);
// log(objectToArray);

// // array => map
let arrayToMap = new Map(array);
// log(arrayToMap);

// // map => array
let mapToArray = map.entries();
// log(mapToArray);
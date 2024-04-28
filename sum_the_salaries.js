"use strict";

const { log } = require("console");

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

let company = {
    sales: [{
        name: 'John',
        salary: 1000
    }, {
        name: 'Alice',
        salary: 1600
    }],

    development: {
        sites: [{
            name: 'Peter',
            salary: 2000
        }, {
            name: 'Alex',
            salary: 1800
        }],

        internals: [{
            name: 'Jack',
            salary: 1300
        }],

        "Open Source Contributors": {
            team1: [{
                    name: 'Jack',
                    salary: 1000
                },
                {
                    name: 'Alex',
                    salary: 1000
                }],

            team2: [{
                    name: 'Peter',
                    salary: 2000
                }]
        }
    }
};

// Function to sum the salaries of all employees in a department
function sumTheSalaries(department) {
    let sum = 0;

    // If the department is an array (base case), iterate over its employees and sum their salaries
    if (Array.isArray(department)) {
        for (let employee of department) {
            sum += employee.salary;
        }
    } else {
        // If the department is an object, iterate over its sub-department objects
        for (let subDepartment of Object.values(department)) {
            // Recursively call sumTheSalaries for each sub-department and add the result to the sum
            sum += sumTheSalaries(subDepartment);
        }
    }

    return sum
}


let sum = 0;
log(sumTheSalaries(company, sum));









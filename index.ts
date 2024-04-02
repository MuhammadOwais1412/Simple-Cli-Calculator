#! /usr/bin/env node

import inquirer from "inquirer";

console.log("Welcome to 'Code With Owais' Simple CLI Calculator");


// Asking Questions from Users through inquirer

let answer = await inquirer.prompt([
    {message: "Enter First Number", type: "number", name: "firstNumber"},
    {message: "Enter Second Number", type: "number", name: "secondNumber"},
    {
        message: "Select one operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },

])

// Conditional Statement if-else

if (answer.operator === "Addition") {

    console.log(answer.firstNumber + answer.secondNumber);
    
}

else if (answer.operator === "Subtraction") {

    console.log(answer.firstNumber - answer.secondNumber);
    
}

else if (answer.operator === "Multiplication") {

    console.log(answer.firstNumber * answer.secondNumber);
    
}

else if (answer.operator === "Division") {

    console.log(answer.firstNumber / answer.secondNumber);
    
}

else {

    console.log("invalid input");
    
};



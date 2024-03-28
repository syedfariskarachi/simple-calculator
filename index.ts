#! /usr/bin/env node 
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "FirstNumber" },
  { message: "Enter second number", type: "number", name: "SecondNumber" },

  {
    message: "Select one of operation you perform",
    type: "list",
    name: "opperater",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
if (answer.opperater == "Addition") {
  console.log(answer.FirstNumber + answer.SecondNumber);
} else if (answer.opperater == "Subtraction") {
  console.log(answer.FirstNumber - answer.SecondNumber);
} else if (answer.opperater == "Multiplication") {
  console.log(answer.FirstNumber * answer.SecondNumber);
} else if (answer.opperater == "Division") {
  console.log(answer.FirstNumber / answer.SecondNumber);
} else {
  console.log("Please select valid operater");
}

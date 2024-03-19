#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Salman please Enter your first number", type: "number", name: "firstnumber" },
  { message: "Salman please Enter your second number", type: "number", name: "secondnumber" },
  {message: "Select one of the operator to perform operation",
  type: "list",
  name: "operator",
  choices: ["addition", "subtraction","multiplication","division"]
}
]);

// conditional statement
if (answer.operator === "addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "subtaction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber); }

else if (answer.operator === "division") {
    console.log(answer.firstnumber / answer.secondnumber);
} else{
    console.log("please select valid operator")
}

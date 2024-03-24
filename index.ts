#! /usr/bin/env node

import inquirer from "inquirer";

const input = await inquirer.prompt([
  { message: "Enter your first number: ", type: "number", name: "firstNum" },
  {
    message: "Enter your second number: ",
    type: "number",
    name: "secondNum",
  },
  {
    message: "Please select any one operator to perform their action",
    type: "list",
    name: "operator",
    choices: ["+", "-", "*", "/"],
  },
]);

if (input.operator === "+") {
  console.log(
    ` ${input.firstNum} ${input.operator} ${input.secondNum} = ${
      input.firstNum + input.secondNum
    }`
  );
} else if (input.operator === "-") {
  console.log(
    ` ${input.firstNum} ${input.operator} ${input.secondNum} = ${
      input.firstNum - input.secondNum
    }`
  );
} else if (input.operator === "*") {
  console.log(
    ` ${input.firstNum} ${input.operator} ${input.secondNum} = ${
      input.firstNum * input.secondNum
    }`
  );
} else if (input.operator === "/") {
  console.log(
    ` ${input.firstNum} ${input.operator} ${input.secondNum} = ${
      input.firstNum / input.secondNum
    }`
  );
} else {
  console.log("Please select valid operator");
}

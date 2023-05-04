#! /usr/bin/env node
import figlet from "figlet";
import chalk from "chalk";
import inquirer from "inquirer";
import {Sum, Subtraction, Multiply, Division} from "./operations.js";

const select = async () => {
    const input = await inquirer.prompt([
    {
        type:"number",
        name: "num3",
        message: "For performing other operation press 1 otherwise 2:",
    },
])
if(input.num3 == 1){
    welcome()
}
else{
    console.log(chalk.bgMagentaBright("Goodbye!, See you next time."));
    
}
}

const welcome=async () =>{
    console.log(figlet.textSync('Calculator!'));
    const input = await inquirer.prompt([
        {
        type:"number",
        name: "num1",
        message: "Enter first number:",
        },
        {
            type:"number",
            name: "num2",
            message: "Enter second number:",
        },
        {
            type:"list",
            name: "operation",
            message: "Select your operation",
            choices:["+","-","*","/"],
        },
]);
if(input.operation=="+"){
    const result = Sum(input.num1, input.num2)
    console.log(chalk.bgGreen(`result:${result}`));
}
else if(input.operation=="-"){
    const result = Subtraction(input.num1, input.num2)
    console.log(chalk.bgGreen(`result:${result}`));
}
else if(input.operation=="*"){
    const result = Multiply(input.num1, input.num2)
    console.log(chalk.bgGreen(`result:${result}`));
}
else if(input.operation=="/"){
    const result = Division(input.num1, input.num2)
    console.log(chalk.bgGreen(`result:${result}`));
}
else{
    console.log("Invalid operation!");
    
}
select();
} 
await welcome();













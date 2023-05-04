#! /usr/bin/env node
import figlet from "figlet";
import chalk from "chalk";
import inquirer from "inquirer";
import {balance_inquiry, cash_withdrawl, cash_deposit} from "./atm_functions.js";

let balance = 250000;

class Account{
    name: string= "adil";
    pin: number= 4567;
}
let user1 = new Account()


const select = async () => {
    const input = await inquirer.prompt([
    {
        type:"number",
        name: "num3",
        message: "For performing more operation press 1 otherwise 2:",
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
    console.log(figlet.textSync('ATM!'));
    const input = await inquirer.prompt([
        {
        type:"string",
        name: "name",
        message: "Enter your name:",
        },
        {
            type:"number",
            name: "num1",
            message: "Enter your pin number:",
        },
]);

if(input.name===user1.name){
    if(input.num1===user1.pin){
        console.log("You are logged in");
        await operation()
    }
}
else{
    console.log("Wrong credentials!");
    await select()
}
}

const operation=async () =>{
    const input = await inquirer.prompt([
        {
            type:"list",
            name: "operation",
            message: "Select your operation",
            choices:["Balance Inquiry","Cash Withdrawl","Cash Deposit"],
        },
]);
console.log(input.operation);

if(input.operation==="Balance Inquiry"){
    const result = balance_inquiry(balance)
    console.log(chalk.bgGreen(`result:${result}`));
}
else if(input.operation=="Cash Withdrawl"){
    const reqAmount = await inquirer.prompt([
        {
        type:"number",
        name: "reqAmount",
        message: "Enter required amount:",
        },
    ])
    const result = cash_withdrawl(balance,reqAmount.reqAmount)
    console.log(chalk.bgGreen(`result:${result}`));
    balance=result;
}

else if(input.operation=="Cash Deposit"){
    const depAmount = await inquirer.prompt([
        {
        type:"number",
        name: "depAmount",
        message: "Enter amount to deposit:",
        },
    ])
    const result = cash_deposit(balance,depAmount.depAmount)
    console.log(chalk.bgGreen(`result:${result}`));
    balance=result;
}
else{
    console.log("Invalid operation!");
    
}
select();
} 
await welcome();


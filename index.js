#! user/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let pinCode = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === pinCode) {
    console.log("correct pin Code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"],
        },
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount < myBalance) {
            (myBalance -= amountAns.amount),
                console.log(`your remaining balance is: ${myBalance}`);
        }
        else if (amountAns.amount > myBalance) {
            console.log(`Unable to process Transection!\nYour current balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your balance is: ${myBalance}`);
    }
    if (operationAns.operation === "fast cash") {
        let selectAmount = await inquirer.prompt([
            {
                name: "cash",
                message: "select your amount",
                type: "list",
                choices: ["10000", "8000", "5000", "3000", "2000", "1000"],
            },
        ]);
        myBalance -= selectAmount.cash;
        console.log(`Your remaining balance is: ${myBalance}`);
    }
}
else {
    console.log("incorrect pin number");
}

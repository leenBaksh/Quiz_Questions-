#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const user = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: chalk.blueBright.bold("What's your name?"),
    },
]);
console.log(chalk.redBright.underline(`\t\tWelcome ${user.name} to the TypeScript Quiz!`));
console.log(chalk.magentaBright.underline("\t\tPlease provide the most accurate response you can to the following questions."));
console.log(chalk.magentaBright.underline("\t\tLet's start the quiz!"));
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: chalk.yellowBright.bold("Q1. What is the TypeScript file extension?"),
        choices: [".js", ".ts", ".html", ".css"], // .ts
    },
    {
        name: "question_2",
        type: "list",
        message: chalk.blueBright.bold("Q2. The code in TypeScript is compiled into:"),
        choices: [
            "Machine code",
            "Assembly code",
            "JavaScript",
            "TypeScript bytecode",
        ], // Javascript
    },
    {
        name: "question_3",
        type: "list",
        message: chalk.blueBright.bold("Q3. What is the most popular tool for converting TypeScript code to JavaScript?"),
        choices: ["Babel", "Webpack", "TypeScript Compiler (tsc)", "Node.js"], // TypeScript Compiler (tsc)
    },
    {
        name: "question_4",
        type: "list",
        message: chalk.blueBright.bold("Q4. Which of these does TypeScript support?"),
        choices: ["Number", "Integar", "Any", "Both A and C", "All of the above"], // Both A and C
    },
    {
        name: "question_5",
        type: "list",
        message: chalk.blueBright.bold("Q5. Take into account the code (let age = 28;). What kind of data does the variable age have?"),
        choices: ["Number", "Any", "String", "boolean"], // Number
    },
    {
        name: "question_6",
        type: "list",
        message: chalk.blueBright.bold("Q6. Examine the following code: let myName= 'kanwal bilal';. What kind of data does the variable myName contain?"),
        choices: ["Number", "Any", "String", "boolean"], // string
    },
    {
        name: "question_7",
        type: "list",
        message: chalk.blueBright.bold("Q7. Take a look at the code (let isMarried = true;). What kind of data does the variable isMarried contain?"),
        choices: ["Number", "Any", "String", "boolean"], // boolean
    },
    {
        name: "question_8",
        type: "list",
        message: chalk.blueBright.bold("What is the superset of Q8.Typescript?"),
        choices: ["python", "javaScript", "nextjs", "c++"], // javascript
    },
    {
        name: "question_9",
        type: "list",
        message: chalk.blueBright.bold("Q9. What are TypeScript's three primary 'simple types'?"),
        choices: [
            "Array,Object,Boolean",
            "Object,Array,Symbol",
            "Object,String,Number",
            "String,Number,Boolean",
        ], // string,number,boolean
    },
    {
        name: "question_10",
        type: "list",
        message: chalk.blueBright.bold("Q10. Can a variable's type always be accurately inferred using TypeScript?"),
        choices: ["true", "false", "yes", "no"], // Number
    },
]);
let score = 0;
switch (quiz.question_1) {
    case ".ts":
        console.log(chalk.greenBright.bold("\t\t1. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.magentaBright.bold("\t\t1. Incorrect!"));
}
switch (quiz.question_2) {
    case "JavaScript":
        console.log(chalk.greenBright.bold("\t\t2. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.magentaBright.bold("\t\t2. Incorrect!"));
}
switch (quiz.question_3) {
    case "TypeScript Compiler (tsc)":
        console.log(chalk.greenBright.bold("\t\t3. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.magentaBright.bold("\t\t3. Incorrect!"));
}
switch (quiz.question_4) {
    case "Both A and C":
        console.log(chalk.greenBright.bold("\t\t4. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.magentaBright.bold("\t\t4. Incorrect!"));
}
switch (quiz.question_5) {
    case "Number":
        console.log(chalk.greenBright.bold("\t\t5. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.magentaBright.bold("\t\t5. Incorrect!"));
}
switch (quiz.question_6) {
    case "String":
        console.log(chalk.greenBright.bold("\t\t6. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.magentaBright.bold("\t\t6. Incorrect!"));
}
switch (quiz.question_7) {
    case "boolean":
        console.log(chalk.greenBright.bold("\t\t7. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.magentaBright.bold("\t\t7. Incorrect!"));
}
switch (quiz.question_8) {
    case "javaScript":
        console.log(chalk.greenBright.bold("\t\t8. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.magentaBright.bold("\t\t8. Incorrect!"));
}
switch (quiz.question_9) {
    case "String,Number,Boolean":
        console.log(chalk.greenBright.bold("\t\t9. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.magentaBright.bold("\t\t9. Incorrect!"));
}
switch (quiz.question_10) {
    case "false":
        console.log(chalk.greenBright.bold("\t\t10. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.magentaBright.bold("\t\t10. Incorrect!"));
}
console.log(chalk.redBright.bold.underline(`\t\t${user.name} Your score is ${score}/10`));
console.log(chalk.redBright.bgWhiteBright.bold("\t\tWe appreciate you taking the test!"));

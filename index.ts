#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from "chalk"

const generatePassword = (length: number): string => {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$&*_+";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
};
console.log(chalk.yellow.bold("*".repeat(36)));
console.log(chalk.blue.bold('Welcome to Password Generator CLI'));
console.log(chalk.yellow.bold("*".repeat(36)));

const ans = await inquirer.prompt({
    type: 'number',
    name: 'length',
    message: 'Enter the length of the password:',
    validate: (input) => {
        if (input <= 0) {
            return chalk.red.bold('Password length must be greater than 0.');
        }else if(input > 20){
            return chalk.red.bold('Password length must be less than 20.');
        }else if(isNaN(input)){
            return chalk.red.bold('Password length must be a number.');
        }
        return true;
  }
    
}).then((answers: any) => {
    const password = generatePassword(answers.length);
    console.log(chalk.blue.bold('\nPassword generated:'),(chalk.white.bold(password)));
});

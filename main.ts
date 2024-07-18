#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold.underline('****---ADVANTURE GAME---****'));
console.log();

class player{
    name: string;
    fuel: number = 100
    constructor(name: string){
        this.name = name
    }
    fuelDicressed(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease(){
        let fuel = this.fuel + 25
        this.fuel = fuel
    }
}

class opponent{
    name: string;
    fuel: number =100
    constructor(name: string){
        this.name = name
    }
    fuelDicressed(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease(){
        let fuel = this.fuel + 25
        this.fuel = fuel
    }
}

let answer = await inquirer.prompt({
    name: "player",
    message: (chalk.green.italic("Enter your name?")),
    type: "input"
})

let player1= await inquirer.prompt({
    name: "opponent",
    message: (chalk.yellowBright.italic("Select your opponent's name?")),
    type: "list",
    choices: ["Skeletons", "Zombie", "Monster","Dragon"]
})
let p1= new player(answer.player)
let o1= new opponent(player1.opponent)
do {
    if(player1.opponent === "Skeletons"){
    let ask= await inquirer.prompt({
        message: (chalk.red.italic("What do you want")),
        type: "list",
        name: "action",
        choices: ["Fight", "Run away","Drink portion"]
    })
    if (ask.action === "Fight"){
       console.log(chalk.bgYellowBright.bold.underline(`${answer.player} VS ${player1.opponent}`));
       let random = Math.floor(Math.random()*2);
       
       if(random > 0){
        p1.fuelDicressed()
        console.log(chalk.blue.italic(`${p1.name} Fuel Is ${p1.fuel}`));
        console.log(chalk.blue.italic(`${o1.name} Fuel Is ${o1.fuel}`));
       }else if(random <= 0){
        o1.fuelDicressed()
        console.log(chalk.blue.italic(`${p1.name} Fuel Is ${p1.fuel}`));
        console.log(chalk.blue.italic(`${o1.name} Fuel Is ${o1.fuel}`));
    }
    if(p1.fuel > 0 && o1.fuel === 0){
        console.log(chalk.greenBright.bold.underline(`${p1.name} Won The Battle`));
    }else if(o1.fuel > 0 && p1.fuel === 0){
        console.log(chalk.greenBright.bold.underline(`${o1.name} Won The Battle`));
        process.exit()
    }
}else if(ask.action === "Drink portion"){
  p1.fuelIncrease();
  console.log(chalk.bgCyan.bold(`You Drink Health Portion,Your Fuel Is ${p1.fuel}`));
}else if(ask.action === "Run away"){
    console.log(chalk.red.bold('you lose! Better Luck Next Time'));
    process.exit()
}
}else if(player1.opponent === "Zombie"){
    let ask= await inquirer.prompt({
        message: "What do you want",
        type: "list",
        name: "action",
        choices: ["Fight", "Run away","Drink portion"]
    })
    if (ask.action === "Fight"){
       console.log(chalk.bgYellowBright.bold.underline(`${answer.player} VS ${player1.opponent}`));
       let random = Math.floor(Math.random()*2);
       console.log(random);
       if(random > 0){
        p1.fuelDicressed()
        console.log(chalk.blue.italic(`${p1.name} Fuel Is ${p1.fuel}`));
        console.log(chalk.blue.italic(`${o1.name} Fuel Is ${o1.fuel}`));
    }else if(random <= 0){
        o1.fuelDicressed()
        console.log(chalk.blue.italic(`${answer.player} Fuel Is ${p1.fuel}`));
        console.log(chalk.blue.italic(`${player1.opponent} Fuel Is ${o1.fuel}`));
    }
    if(p1.fuel > 0 && o1.fuel === 0){
        console.log(chalk.greenBright.bold.underline(`${p1.name} Won The Battle`));
    }else if(o1.fuel > 0 && p1.fuel === 0){
        console.log(chalk.greenBright.bold.underline(`${o1.name} Won The Battle`));
        process.exit()
    }
}else if(ask.action === "Drink portion"){
  p1.fuelIncrease();
  console.log(chalk.bgCyan.bold(`You Drink Health Portion,Your Fuel Is ${p1.fuel}`));
}else if(ask.action === "Run away"){
    console.log(chalk.red.bold('you lose! Better Luck Next Time'));
    process.exit()
}
}  else if(player1.opponent === "Monster"){
    let ask= await inquirer.prompt({
        message: "What do you want",
        type: "list",
        name: "action",
        choices: ["Fight", "Run away","Drink portion"]
    })
    if (ask.action === "Fight"){
       console.log(chalk.bgYellowBright.bold.underline(`${answer.player} VS ${player1.opponent}`));
       let random = Math.floor(Math.random()*2);
       console.log(random);
       if(random > 0){
        p1.fuelDicressed()
        console.log(chalk.blue.italic(`${p1.name} Fuel Is ${p1.fuel}`));
        console.log(chalk.blue.italic(`${o1.name} Fuel Is ${o1.fuel}`));
    }else if(random <= 0){
        o1.fuelDicressed()
        console.log(chalk.blue.italic(`${p1.name} Fuel Is ${p1.fuel}`));
        console.log(chalk.blue.italic(`${o1.name} Fuel Is ${o1.fuel}`));
    }
    if(p1.fuel > 0 && o1.fuel === 0){
        console.log(chalk.greenBright.bold.underline(`${p1.name} Won The Battle`));
    }else if(o1.fuel > 0 && p1.fuel === 0){
        console.log(chalk.greenBright.bold.underline(`${o1.name} Won The Battle`));
        process.exit()
    }
}else if(ask.action === "Drink portion"){
  p1.fuelIncrease();
  console.log(chalk.bgCyan.bold(`You Drink Health Portion,Your Fuel Is ${p1.fuel}`));
}else if(ask.action === "Run away"){
    console.log(chalk.red.bold('you lose! Better Luck Next Time'));
    process.exit()
}
}  else if(player1.opponent === "Dragon"){
    let ask= await inquirer.prompt({
        message: "What do you want",
        type: "list",
        name: "action",
        choices: ["Fight", "Run away","Drink portion"]
    })
    if (ask.action === "Fight"){
       console.log(chalk.bgYellowBright.bold.underline(`${answer.player} VS ${player1.opponent}`));
       let random = Math.floor(Math.random()*2);
       console.log(random);
       if(random > 0){
        p1.fuelDicressed()
        console.log(chalk.blue.italic(`${p1.name} Fuel Is ${p1.fuel}`));
        console.log(chalk.blue.italic(`${o1.name} Fuel Is ${o1.fuel}`));
    }else if(random <= 0){
        o1.fuelDicressed()
        console.log(chalk.blue.italic(`${p1.name} Fuel Is ${p1.fuel}`));
        console.log(chalk.blue.italic(`${o1.name} Fuel Is ${o1.fuel}`));
    }
    if(p1.fuel > 0 && o1.fuel === 0){
        console.log(chalk.greenBright.bold.underline(`${p1.name} Won The Battle`));
    }else if(o1.fuel > 0 && p1.fuel === 0){
        console.log(chalk.greenBright.bold.underline(`${o1.name} Won The Battle`));
        process.exit()
    }
}else if(ask.action === "Drink portion"){
  p1.fuelIncrease();
  console.log(chalk.bgCyan.bold(`You Drink Health Portion,Your Fuel Is ${p1.fuel}`));
}else if(ask.action === "Run away"){
    console.log(chalk.red.bold('you lose! Better Luck Next Time'));
    process.exit()
}
}  
} while (true);



// 20220213 - JavaScript - Programming Basics - Conditional Statements
// 07 - Shopping - judge: https://judge.softuni.org/Contests/Compete/Index/2402#6


function shopping(input) {
    let budget = Number(input[0]);
    let numVideoCards = Number(input[1]);
    let numProcessors = Number(input[2]);
    let numRAM = Number(input[3]);
    
    let moneyVideoCards = numVideoCards * 250;
    let moneyProcessors = numProcessors * moneyVideoCards * 0.35;
    let moneyRAM = numRAM * moneyVideoCards * 0.1;

    let subTotal = moneyVideoCards + moneyProcessors + moneyRAM;

    if (numVideoCards > numProcessors) {
        subTotal *= 0.85;
    }

    let diff = (Math.abs(subTotal - budget)).toFixed(2);

    if (budget >= subTotal) {
        console.log(`You have ${diff} leva left!`);
    } else {
        console.log(`Not enough money! You need ${diff} leva more!`);
    }
}

shopping(["900", "2", "1", "3"]);
shopping(["920.45", "3", "1", "1"]);

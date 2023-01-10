// 20220206 - JavaScript - Programming Basics - First Steps in Coding
// 03 - Deposit Calculator - judge: https://judge.softuni.org/Contests/Compete/Index/2400#2


function depositCalculator(input) {
    let deposit = Number(input[0]);
    let termMonths = Number(input[1]);
    let APR = Number(input[2]);
    let APRMonth = APR * 0.01 / 12;
    let total = deposit + termMonths * (deposit * APRMonth);

    console.log(total);
}

depositCalculator(["200", "3", "5.7"]);
depositCalculator(["2350", "6", "7"]);

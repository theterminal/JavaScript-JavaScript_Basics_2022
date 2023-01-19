// 20220302 - JavaScript - For Loops
// 04 - Clever Lily - judge: https://judge.softuni.org/Contests/Compete/Index/2406#3


function cleverLily(input) {
    let index = 0;
    let age = Number(input[index++]);
    let priceWashingMachine = Number(input[index++]);
    let priceToy = Number(input[index++]);
    let moneyBD = 0; let countBdEven = 0; let countBDOdd = 0; let moneyToys = 0;
    
    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            moneyBD = moneyBD + 9 + (countBdEven * 10);
            countBdEven++;
        } else {
            countBDOdd++;
        }
    }
    moneyToys = countBDOdd * priceToy;
    let totalRreceived = moneyBD + moneyToys;
    let diff = (Math.abs(totalRreceived - priceWashingMachine)).toFixed(2);

    if (totalRreceived >= priceWashingMachine) {
        console.log(`Yes! ${diff}`);
    } else {
        console.log(`No! ${diff}`);
    }
}

cleverLily(["10", "170.00", "6"]);
cleverLily(["21", "1570.98", "3"]);

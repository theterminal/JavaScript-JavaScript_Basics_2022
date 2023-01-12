// 20220213 - JavaScript - Programming Basics - Conditional Statements
// 05 - Godzilla vs. Kong - judge: https://judge.softuni.org/Contests/Compete/Index/2402#4


function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let numStatists = Number(input[1]);
    let costPerSetClothes = Number(input[2]);
    let costOfDecor = budget * 0.1;

    if (numStatists > 150) {
        costPerSetClothes *= 0.9;
    }

    let moneyForClothes = numStatists * costPerSetClothes;
    let totalMoneyNeeded = costOfDecor + moneyForClothes;

    let diff = (Math.abs(budget - totalMoneyNeeded)).toFixed(2);

    if (budget >= totalMoneyNeeded) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${diff} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${diff} leva more.`);
    }
}

godzillaVsKong(["20000", "120", "55.5"]);
godzillaVsKong(["15437.62", "186", "57.99"]);
godzillaVsKong(["9587.88", "222", "55.68"]);

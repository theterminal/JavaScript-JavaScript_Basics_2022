// 20220213 - JavaScript - Programming Basics - Conditional Statements
// 04 - Toy Shop - judge: https://judge.softuni.org/Contests/Compete/Index/2402#3


function toyShop(input) {
    let vacationCost = Number(input[0]);
    let numPuzzels = Number(input[1]);
    let numTalkingToys = Number(input[2]);
    let numPlushBears = Number(input[3]);
    let numMinions = Number(input[4]);
    let numTrucks = Number(input[5]);

    let totalToys = numPuzzels + numTalkingToys + numPlushBears + numMinions + numTrucks;
    let sumMoney = (numPuzzels * 2.60) + (numTalkingToys * 3) + (numPlushBears * 4.10) + (numMinions * 8.20) + (numTrucks * 2);

    if (totalToys >= 50) {
        sumMoney *= 0.75;
    }

    sumMoney *= 0.90;
    let diff = (Math.abs(sumMoney - vacationCost)).toFixed(2);

    if (sumMoney >= vacationCost) {
        console.log(`Yes! ${diff} lv left.`);
    } else {
        console.log(`Not enough money! ${diff} lv needed.`);
    }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);

// 20220319 JavaScript - Pre Exam
// Pre Exam 02 - Maiden Party - judge: https://judge.softuni.org/Contests/Compete/Index/3386#1


function maidenParty(input) {
    let index = 0;
    let costMaidenParty = Number(input[index++]);
    let numLoveMessages = Number(input[index++]);
    let numWaxRoses = Number(input[index++]);
    let numKeyChains = Number(input[index++]);
    let numCaricatures = Number(input[index++]);
    let numSurprises = Number(input[index++]);

    let moneyLoveMessages = numLoveMessages * 0.60;
    let moneyWaxRoses = numWaxRoses * 7.20;
    let moneyKeyChains = numKeyChains * 3.60;
    let moneyCaricatures = numCaricatures * 18.20;
    let moneySurprises = numSurprises * 22;

    let totalMoney = moneyLoveMessages + moneyWaxRoses + moneyKeyChains + moneyCaricatures + moneySurprises;
    let totalItemsOrdered = numLoveMessages + numWaxRoses + numKeyChains + numCaricatures + numSurprises;

    if (totalItemsOrdered >= 25) {
        totalMoney *= 0.65;
    }
    totalMoney *= 0.90;

    let diff = Math.abs(totalMoney - costMaidenParty);

    if (totalMoney >= costMaidenParty) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }
}


maidenParty(["40.8", "20", "25", "30", "50", "10"]);
maidenParty(["320", "8", "2", "5", "5", "1"]);

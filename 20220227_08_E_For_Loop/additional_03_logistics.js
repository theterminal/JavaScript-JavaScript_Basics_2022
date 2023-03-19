// 20220305 - JavaScript - For Loops
// Additional 03 - Logistics - judge: https://judge.softuni.org/Contests/Practice/Index/1680#2


function logistics(input) {
    let index = 0;
    let numLoads = Number(input[index++]);
    let currentLoadTons = 0; let totalLoad = 0;
    let totalMoneyTrain = 0; let totalMoneyTruck = 0; let totalMoneyBus = 0;
    let totalTonsTrain = 0; let totalTonsTruck = 0; let totalTonsBus = 0;
    
    for (let i = 0; i < numLoads; i++) {
        currentLoadTons = Number(input[index++]);
        totalLoad += currentLoadTons;

        if (currentLoadTons >= 12) {
            totalMoneyTrain = totalMoneyTrain + (currentLoadTons * 120);
            totalTonsTrain += currentLoadTons;
        } else if (currentLoadTons >= 4) {
            totalMoneyTruck = totalMoneyTruck + (currentLoadTons * 175);
            totalTonsTruck += currentLoadTons;
        } else {
            totalMoneyBus = totalMoneyBus + (currentLoadTons * 200);
            totalTonsBus += currentLoadTons;
        }
    }

    let totalMoney = totalMoneyTrain + totalMoneyTruck + totalMoneyBus;
    let averageMoneyTon = (totalMoney / totalLoad).toFixed(2);

    let percentBus = (totalTonsBus / totalLoad * 100).toFixed(2);
    let percentTruck = (totalTonsTruck / totalLoad * 100).toFixed(2);
    let percentTrain = (totalTonsTrain / totalLoad * 100).toFixed(2);

    console.log(`${averageMoneyTon}`);
    console.log(`${percentBus}%`);
    console.log(`${percentTruck}%`);
    console.log(`${percentTrain}%`);
}


logistics(["4", "1", "5", "16", "3"]);
logistics(["5", "2", "10", "20", "1", "7"]);

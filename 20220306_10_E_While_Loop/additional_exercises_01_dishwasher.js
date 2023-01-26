// 20220312 - JavaScript - While Loop
// Additional 01 - Dishwasher - judge: https://judge.softuni.org/Contests/Practice/Index/1684#0


function dishwasher(input) {
    let index = 0;
    let numBottlesDetergent = Number(input[index++]);
    let detergent = numBottlesDetergent * 750;
    let numDihsesAndPots = 0; let counterLoads = 0; let detergentUsed = 0; let counterDishes = 0; let counterPots = 0;

    while (true) {
        numDihsesAndPots = input[index++];

        if (numDihsesAndPots === "End") {
            console.log(`Detergent was enough!`);
            console.log(`${counterDishes} dishes and ${counterPots} pots were washed.`);
            console.log(`Leftover detergent ${detergent} ml.`);
            break;
        }
        numDihsesAndPots = Number(numDihsesAndPots);
        counterLoads++;

        if (counterLoads % 3 === 0) {
            counterPots = counterPots + numDihsesAndPots;
            detergentUsed = numDihsesAndPots * 15;
        } else {
            counterDishes = counterDishes + numDihsesAndPots;
            detergentUsed = numDihsesAndPots * 5;
        }
        detergent -= detergentUsed;

        if (detergent < 0) {
            let diff = Math.abs(detergent);
            console.log(`Not enough detergent, ${diff} ml. more necessary!`);
            break;
        }
    }
}

dishwasher(["2", "53", "65", "55", "End"]);
dishwasher(["1", "10", "15", "10", "12", "13", "30"]);

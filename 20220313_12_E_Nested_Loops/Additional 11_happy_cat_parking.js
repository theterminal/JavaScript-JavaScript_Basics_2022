// 20220315 JavaScript - Nested Loops
// Additional 11 - Happy Cat parking - judge: https://judge.softuni.org/Contests/Practice/Index/1381#10


function happyCatParking(input) {
    let index = 0;
    let numDays = Number(input[index++]);
    let numHours = Number(input[index++]);
    let sumCurrentDay = 0; let totalSum = 0;

    for (let i = 1; i <= numDays; i++) {
        for (let j = 1; j <= numHours; j++) {
            if (i % 2 === 1) {
                if (j % 2 === 1) {
                    sumCurrentDay += 1;
                } else {
                    sumCurrentDay += 1.25;
                }
            } else {
                if (j % 2 === 1) {
                    sumCurrentDay += 2.5;
                } else {
                    sumCurrentDay += 1;
                }
            }
        } 
        console.log(`Day: ${i} - ${sumCurrentDay.toFixed(2)} leva`);
        totalSum += sumCurrentDay;
        sumCurrentDay = 0;
    }
    console.log(`Total: ${totalSum.toFixed(2)} leva`);
}

happyCatParking(["2", "5"]);
happyCatParking(["5", "2"]);

// 20220306 - JavaScript - For Loops
// Additional 05 - Game Of Intervals - judge: https://judge.softuni.org/Contests/Practice/Index/1680#4


function gameOfIntervals(input) {
    let index = 0;
    let numStpes = Number(input[index++]);
    let num = 0; let score = 0; let counterAll = 0;
    let counter0_9 = 0; let counter10_19 = 0; let counter20_29 = 0; let counter30_39 = 0; let counter40_50 = 0; let counterInvalid = 0;  

    for (let i = 0; i < numStpes; i++) {
        num = Number(input[index++]);
        counterAll++;
        
        if (num >= 0 && num <= 9) {
            score = score + (num * 0.2);
            counter0_9++;
        } else if (num >= 10 && num <= 19) {
            score = score + (num * 0.3);
            counter10_19++;
        } else if (num >= 20 && num <= 29) {
            score = score + (num * 0.4);
            counter20_29++;
        } else if (num >= 30 && num <= 39) {
            score = score + 50;
            counter30_39++;
        } else if (num >= 40 && num <= 50) {
            score = score + 100;
            counter40_50++;
        } else {
            score = score / 2;
            counterInvalid++;
        }
    }
    let percent0_9 = (counter0_9 / counterAll * 100).toFixed(2);
    let percent10_19 = (counter10_19 / counterAll * 100).toFixed(2);
    let percent20_29 = (counter20_29 / counterAll * 100).toFixed(2);
    let percent30_39 = (counter30_39 / counterAll * 100).toFixed(2);
    let percent40_50 = (counter40_50 / counterAll * 100).toFixed(2);
    let percentInvalid = (counterInvalid / counterAll * 100).toFixed(2);

    console.log(`${score.toFixed(2)}`);
    console.log(`From 0 to 9: ${percent0_9}%`);
    console.log(`From 10 to 19: ${percent10_19}%`);
    console.log(`From 20 to 29: ${percent20_29}%`);
    console.log(`From 30 to 39: ${percent30_39}%`);
    console.log(`From 40 to 50: ${percent40_50}%`);
    console.log(`Invalid numbers: ${percentInvalid}%`);
}

gameOfIntervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"]);

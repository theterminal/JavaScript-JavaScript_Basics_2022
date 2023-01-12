// 20220213 - JavaScript - Programming Basics - Conditional Statements
// Additional 05 - Firm - judge: https://judge.softuni.org/Contests/Practice/Index/1658#4


function firm(input) {
    let hrsNeeded = Number(input[0]);
    let daysFirmHas = Number(input[1]);
    let numPeopleOvertime = Number(input[2]);

    let hrsFirmHas = (daysFirmHas * 0.90 * 8) + (numPeopleOvertime * 2 * daysFirmHas);
    let diff = Math.abs(hrsFirmHas - hrsNeeded);

    if (hrsFirmHas >= hrsNeeded) {
        console.log(`Yes!${Math.floor(diff)} hours left.`);
    } else {
        console.log(`Not enough time!${Math.ceil(diff)} hours needed.`);
    }
}

firm(["90", "7", "3"]);
firm(["99", "3", "1"]);
firm(["50", "5", "2"]);

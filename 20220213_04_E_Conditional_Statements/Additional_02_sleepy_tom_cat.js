// 20220213 - JavaScript - Programming Basics - Conditional Statements
// Additional 02 - Sleepe Cat Tom - judge: https://judge.softuni.org/Contests/Practice/Index/1658#1


function sleepyCatTom(input) {
    let notWorkDays = Number(input[0]);
    
    let minPlayNotWD = notWorkDays * 127;
    let minPlayWD = (365 - notWorkDays) * 63;
    let minPerYear = minPlayWD + minPlayNotWD;

    let diff = Math.abs(minPerYear - 30000);
    let h = Math.trunc(diff / 60);
    let m = diff % 60;

    if (minPerYear > 30000) {
        console.log(`Tom will run away`);
        console.log(`${h} hours and ${m} minutes more for play`);
    } else {
        console.log(`Tom sleeps well`);
        console.log(`${h} hours and ${m} minutes less for play`);
    }
}

sleepyCatTom(["20"]);
sleepyCatTom(["113"]);

// 20220213 - JavaScript - Programming Basics - Conditional Statements
// 02 - Bonus Score - judge: https://judge.softuni.org/Contests/Compete/Index/2402#1


function bonusScore(input) {
    let num = Number(input[0]);
    let bonus1 = 0; let bonus2 = 0; let totalBonus = 0; let output = 0;

    if (num <= 100) {
        bonus1 = 5;
    } else if (num > 100 && num <= 1000) {
        bonus1 = num * 0.2;
    } else if (num > 1000) {
        bonus1 = num * 0.1;
    }

    if (num % 2 === 0) {
        bonus2 = 1;
    }
    
    if (num % 10 === 5) {
        bonus2 = 2;
    }

    totalBonus = bonus1 + bonus2;
    output = num + bonus1 + bonus2;

    console.log(totalBonus);
    console.log(output);
}

bonusScore(["20"]);
bonusScore(["175"]);
bonusScore(["2703"]);
bonusScore(["15875"]);

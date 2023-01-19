// 20220305 - JavaScript - For Loops
// Additional 01  - Back To The Past - judge: https://judge.softuni.org/Contests/Practice/Index/1680#0


function backToThePast(input) {
    let index = 0;
    let yearBackTo = 1800;
    let inheritedMoney = Number(input[index++]);
    let yearHeMustSurvive = Number(input[index++]);
    let moneyNeeded = 0; let ageNow = 18;

    for (let i = 0; i <= (yearHeMustSurvive - yearBackTo); i++) {
        if (i % 2 === 0) {
            moneyNeeded += 12000;
        } else {
            moneyNeeded = moneyNeeded + 12000 + (50 * ageNow);
        }
        ageNow++;
    }

    let diff = (Math.abs(inheritedMoney - moneyNeeded)).toFixed(2);

    if (inheritedMoney >= moneyNeeded) {
        console.log(`Yes! He will live a carefree life and will have ${diff} dollars left.`);
    } else {
        console.log(`He will need ${diff} dollars to survive.`);
    }
}

backToThePast(["50000", "1802"]);
backToThePast(["100000.15", "1808"]);

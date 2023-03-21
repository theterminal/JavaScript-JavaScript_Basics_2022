// 20220319 JavaScript - Exam Prep
// 02 - Family Trip - judge: https://judge.softuni.bg/Contests/Practice/Index/1745#1


function familyTrip(input) {
    let index = 0;
    let budget = Number(input[index++]);
    let numNights = Number(input[index++]);
    let pricePerNight = Number(input[index++]);
    let percentAdditionalExpenses = Number(input[index++]);

    if (numNights > 7) {
        pricePerNight *= 0.95;
    }

    let cost = numNights * pricePerNight + (budget * percentAdditionalExpenses / 100);
    let diff = Math.abs((budget - cost)).toFixed(2);

    if (budget >= cost) {
        console.log(`Ivanovi will be left with ${diff} leva after vacation.`);
    } else {
        console.log(`${diff} leva needed.`);
    }
}


familyTrip(["800.50", "8", "100", "2"]);
familyTrip(["500", "7", "66", "15"]);

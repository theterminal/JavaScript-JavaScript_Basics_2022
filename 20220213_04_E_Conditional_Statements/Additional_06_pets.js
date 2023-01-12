// 20220213 - JavaScript - Programming Basics - Conditional Statements
// Additional 06 - Pets - judge: https://judge.softuni.org/Contests/Practice/Index/1658#5


function pets(input) {
    let numDays = Number(input[0]);
    let kgsAllFood = Number(input[1]);
    let kgsFoodDogPerDay = Number(input[2]);
    let kgsFoodCatPerDay = Number(input[3]);
    let kgsFoodTurttlePerDay = Number(input[4] * 0.001);

    let kgsFoodUsed = (numDays * kgsFoodDogPerDay) + (numDays * kgsFoodCatPerDay) + (numDays * kgsFoodTurttlePerDay);
    let diff = Math.abs(kgsAllFood - kgsFoodUsed);

    if (kgsAllFood >= kgsFoodUsed) {
        console.log(`${Math.floor(diff)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
    }
}

pets(["2", "10", "1", "1", "1200"]);
pets(["5", "10", "2.1", "0.8", "321"]);

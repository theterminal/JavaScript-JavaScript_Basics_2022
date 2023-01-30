// 20220319 JavaScript - Exam Prep
// 06 - Vet Parking - judge: https://judge.softuni.bg/Contests/Practice/Index/1654#5


function vetParking(input) {
    let index = 0;
    let numDays = Number(input[index++]);
    let numHours = Number(input[index++]);
    let dayTotal = 0; let total = 0; let feePerHour = 0;

    for(let d = 1; d <= numDays; d++) {
        if (d % 2 !== 0) {
            for (let h = 1; h <= numHours; h++) {
                if (h % 2 !== 0) {
                    feePerHour = 1.00;
                } else {
                    feePerHour = 1.25;
                }
                dayTotal += feePerHour;
            }
        } else {
            for (let h = 1; h <= numHours; h++) {
                if (h % 2 !== 0) {
                    feePerHour = 2.50;
                } else {
                    feePerHour = 1.00;
                }
                dayTotal += feePerHour;
            }
        }
        console.log(`Day: ${d} - ${dayTotal.toFixed(2)} leva`);
        total += dayTotal;
        dayTotal = 0;
    }
    console.log(`Total: ${total.toFixed(2)} leva`);
}

vetParking(["2", "5"]);
vetParking(["5", "2"]);

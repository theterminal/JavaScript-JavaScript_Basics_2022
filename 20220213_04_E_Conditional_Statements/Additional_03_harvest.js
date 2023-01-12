// 20220213 - JavaScript - Programming Basics - Conditional Statements
// Additional 03 - Harvest - judge: https://judge.softuni.org/Contests/Practice/Index/1658#2


function harvest(input) {
    let sqM = Number(input[0]) * 0.40;
    let kgGrapesFromSqM = Number(input[1]);
    let litersWineNeeded = Number(input[2]);
    let numWorkers = Number(input[3]);

    let litersWineProduced = (sqM * kgGrapesFromSqM) / 2.5;
    let diff = Math.abs(litersWineNeeded - litersWineProduced);
    let litersWinePerWorker = diff / numWorkers;

    if (litersWineProduced >= litersWineNeeded) {
        console.log(`Good harvest this year! Total wine: ${Math.floor(litersWineProduced)} liters.`);
        console.log(`${Math.ceil(diff)} liters left -> ${Math.ceil(litersWinePerWorker)} liters per person.`);
    } else {
        console.log(`It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`);
    }
}

harvest(["650", "2", "175", "3"]);
harvest(["1020", "1.5", "425", "4"]);

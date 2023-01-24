// 20220220 JavaScript - Nested Conditional Statements
// 04 - Fishing Boat - judge: https://judge.softuni.org/Contests/Compete/Index/2404#3


function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let numFishermen = Number(input[2]);
    let price = 0; let diff = 0;

    switch(season) {
        case "Spring": price = 3000; break;
        case "Summer":
        case "Autumn": price = 4200; break;
        case "Winter": price = 2600; break;
    }
    
    if (numFishermen >= 12) {
        price *= 0.75;
    } else if (numFishermen >= 7) {
        price *= 0.85;
    } else {
        price *= 0.90;
    }

    if (numFishermen % 2 === 0 && season !== "Autumn") {
        price *= 0.95;
    }

    diff = (Math.abs(budget - price)).toFixed(2);

    if (budget >= price) {
        console.log(`Yes! You have ${diff} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff} leva.`);
    }
}

fishingBoat(["3000", "Summer", "11"]);
fishingBoat(["3600", "Autumn", "6"]);
fishingBoat(["2000", "Winter", "13"]);

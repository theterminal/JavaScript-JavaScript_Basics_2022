// 20220220 JavaScript - Nested Conditional Statements
// 03 - New House - judge: https://judge.softuni.org/Contests/Compete/Index/2404#2


function newHouse(input) {
    let typeFlower = input[0];
    let numFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;
    let total = 0;

    switch(typeFlower) {
        case "Roses": price = 5;
        if (numFlowers > 80) {
            price *= 0.9;
        } break;
        case "Dahlias": price = 3.80;
        if (numFlowers > 90) {
            price *= 0.85;
        } break;
        case "Tulips": price = 2.80;
        if (numFlowers > 80) {
            price *= 0.85;
        } break;
        case "Narcissus": price = 3;
        if (numFlowers < 120) {
            price *= 1.15;
        } break;
        case "Gladiolus": price = 2.50;
        if (numFlowers < 80) {
            price *= 1.2;
        } break; 
    }
    total = numFlowers * price;
    diff = (Math.abs(budget - total)).toFixed(2);

    if (budget >= total) {
        console.log(`Hey, you have a great garden with ${numFlowers} ${typeFlower} and ${diff} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff} leva more.`);
    }
}

newHouse(["Roses", "55", "250"]);
newHouse(["Tulips", "88", "260"]);
newHouse(["Narcissus", "119", "360"]);

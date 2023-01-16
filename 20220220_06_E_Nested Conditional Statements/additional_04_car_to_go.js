// 20220222 JavaScript - Nested Conditional Statements
// Additional 04 - Car To Go - judge: https://judge.softuni.org/Contests/Practice/Index/1663#3


function carToGo(input) {
    let index = 0;
    let budget = Number(input[index++]);
    let season = input[index++];
    let carClass = ""; let carType = ""; let carPrice = 0;

    if (budget <= 100) {
        carClass = "Economy class";
        switch(season) {
            case "Summer": carType = "Cabrio"; carPrice = 0.35; break;
            case "Winter": carType = "Jeep"; carPrice = 0.65; break;
        };
    } else if (budget <= 500) {
        carClass = "Compact class";
        switch(season) {
            case "Summer": carType = "Cabrio"; carPrice = 0.45; break;
            case "Winter": carType = "Jeep"; carPrice = 0.80; break;
        };
    } else if (budget > 500) {
        carClass = "Luxury class";
        carType = "Jeep";
        carPrice = 0.90;
    }
    carPrice *= budget;

    console.log(`${carClass}`);
    console.log(`${carType} - ${carPrice.toFixed(2)}`);
}

carToGo(["450", "Summer"]);
carToGo(["450", "Winter"]);
carToGo(["1010", "Summer"]);
carToGo(["99.99", "Summer"]);
carToGo(["1010", "Winter"]);
carToGo(["70.50", "Winter"]);

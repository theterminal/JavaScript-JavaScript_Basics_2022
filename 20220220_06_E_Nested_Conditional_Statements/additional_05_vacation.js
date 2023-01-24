// 20220222 JavaScript - Nested Conditional Statements
// Additional 05 - Vacation - judge: https://judge.softuni.org/Contests/Practice/Index/1663#4


function vacation(input) {
    let index = 0;
    let budget = Number(input[index++]);
    let season = input[index++];
    let sleepIn = ""; let location = ""; let price = 0;

    if (budget <= 1000) {
        sleepIn = "Camp";
        switch (season) {
            case "Summer": location = "Alaska"; price = 0.65; break;
            case "Winter": location = "Morocco"; price = 0.45; break;
        }
    } else if (budget <= 3000) {
        sleepIn = "Hut";
        switch (season) {
            case "Summer": location = "Alaska"; price = 0.80; break;
            case "Winter": location = "Morocco"; price = 0.60; break;
        }
    } else if (budget > 3000) {
        sleepIn = "Hotel";
        price = 0.90;
        switch (season) {
            case "Summer": location = "Alaska"; break;
            case "Winter": location = "Morocco"; break;
        }
    }
    price *= budget;
    console.log(`${location} - ${sleepIn} - ${price.toFixed(2)}`);
}

vacation(["800", "Summer"]);
vacation(["799.50", "Winter"]);
vacation(["3460", "Summer"]);
vacation(["1100", "Summer"]);
vacation(["5000", "Winter"]);
vacation(["2543.99", "Winter"]);

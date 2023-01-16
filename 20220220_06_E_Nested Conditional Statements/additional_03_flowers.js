// 20220222 JavaScript - Nested Conditional Statements
// Additional 03 - Flowers - judge: https://judge.softuni.org/Contests/Practice/Index/1663#2


function flowers(input) {
    let index = 0;
    let numChrysanthemums  = Number(input[index++]);
    let numRoses = Number(input[index++]);
    let numTulips = Number(input[index++]);
    let season = input[index++];
    let isHoliday = input[index++];
    let totalFlowers = numChrysanthemums  + numRoses + numTulips;

    switch (season) {
        case "Spring":
        case "Summer":
            priceChrysanthemums  = 2.00;
            priceRoses = 4.10;
            priceTulips = 2.50;
            if (isHoliday === "Y") {
                priceChrysanthemums  *= 1.15;
                priceRoses *= 1.15;
                priceTulips *= 1.15;
            }
            break;
        case "Autumn":
        case "Winter":
            priceChrysanthemums  = 3.75;
            priceRoses = 4.50;
            priceTulips = 4.15;
            if (isHoliday === "Y") {
                priceChrysanthemums  *= 1.15;
                priceRoses *= 1.15;
                priceTulips *= 1.15;
            }
            break;
    }
    let totalCost = (numChrysanthemums * priceChrysanthemums) + (numRoses * priceRoses) + (numTulips * priceTulips);

    if (season === "Spring" && numTulips > 7 ) {
        totalCost *= 0.95;
    }
    if (season === "Winter" && numRoses >= 10) {
        totalCost *= 0.90;
    }
    if (totalFlowers > 20) {
        totalCost *= 0.80;
    }
    totalCost += 2;
    console.log(totalCost.toFixed(2));
}

flowers(["2", "4", "8", "Spring", "Y"]);
flowers(["3", "10", "9", "Winter", "N"]);

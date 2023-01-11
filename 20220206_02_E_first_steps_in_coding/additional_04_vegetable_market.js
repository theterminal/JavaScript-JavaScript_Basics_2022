// 20220209 - JavaScript - Programming Basics - First Steps in Coding
// Additional 04 - Vegetable Market - judge: https://judge.softuni.org/Contests/Practice/Index/1642#3


function vegetableMarket(input) {
    let priceVegetablesPerKg = Number(input[0]);
    let priceFruitsPerKg = Number(input[1]);
    let kgVegetables = Number(input[2]);
    let kgFruits = Number(input[3]);

    let resultBGN = (kgVegetables * priceVegetablesPerKg) + (kgFruits * priceFruitsPerKg);
    let resultEUR = resultBGN / 1.94;

    console.log(resultEUR.toFixed(2));
}

vegetableMarket(["0.194", "19.4", "10", "10"]);
vegetableMarket(["1.5", "2.5", "10", "10"]);

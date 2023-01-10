// 20220206 - JavaScript - Programming Basics - First Steps in Coding
// 05 - Supplies For School - judge: https://judge.softuni.org/Contests/Compete/Index/2400#4


function suppliesForSchool(input) {
    let pricePens = Number(input[0]) * 5.80 ;
    let priceMarkers = Number(input[1]) * 7.20;
    let priceSoap = Number(input[2]) * 1.20;
    let discount = Number(input[3]) / 100;
    let totalBeforeDiscount = pricePens + priceMarkers + priceSoap;
    let totalNeeded = totalBeforeDiscount * (1 - discount);

    console.log(totalNeeded);
}

suppliesForSchool(["2", "3", "4", "25"]);
suppliesForSchool(["4", "2", "5", "13"]);

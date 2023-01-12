// 20220213 - JavaScript - Programming Basics - Conditional Statements
// Additional 07 - Flower Shop - judge: https://judge.softuni.org/Contests/Practice/Index/1658#6


function flowerShop(input) {
    let flower1 = Number(input[0]);
    let flower2 = Number(input[1]);
    let flower3 = Number(input[2]);
    let flower4 = Number(input[3]);
    let giftPrice = Number(input[4]);

    let totalOrder = 0.95 * ((flower1 * 3.25) + (flower2 * 4) + (flower3 * 3.50) + (flower4 * 8));
    let diff = Math.abs(totalOrder - giftPrice);

    if (totalOrder >= giftPrice) {
        console.log(`She is left with ${Math.floor(diff)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(diff)} leva.`);
    }
}

flowerShop(["2", "3", "5", "1", "50"]);
flowerShop(["15", "7", "5", "10", "100"]);

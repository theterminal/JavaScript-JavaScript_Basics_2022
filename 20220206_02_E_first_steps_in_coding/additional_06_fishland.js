// 20220209 - JavaScript - Programming Basics - First Steps in Coding
// Additional 06 - Fish Land - judge: https://judge.softuni.org/Contests/Practice/Index/1642#5


function fishLand(input) {
    let priceMackerelKg = Number(input[0]);
    let priceSpratKg = Number(input[1]);
    let kgBonito = Number(input[2]);
    let kgHorseMackerel = Number(input[3]);
    let kgMussels = Number(input[4]);

    let priceBonito = priceMackerelKg * 1.6;
    let priceHorseMackerel = priceSpratKg * 1.8;
    let priceMussels = 7.50;

    let totalAmount = (kgBonito * priceBonito) + (kgHorseMackerel * priceHorseMackerel) + (kgMussels * priceMussels);
    
    console.log(totalAmount.toFixed(2));
}

fishLand(["6.90", "4.20", "1.5", "2.5", "1"]);
fishLand(["5.55", "3.57", "4.3", "3.6", "7"]);

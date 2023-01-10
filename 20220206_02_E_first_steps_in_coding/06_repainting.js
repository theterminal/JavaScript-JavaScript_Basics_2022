// 20220206 - JavaScript - Programming Basics - First Steps in Coding
// 06 - Repainting - judge: https://judge.softuni.org/Contests/Compete/Index/2400#5


function repainting(input) {
    let quntityPlasticNeeded = Number(input[0]);
    let quantityPaintNeeded = Number(input[1]);
    let quantityTinnerNeeded = Number(input[2]);
    let quantityLabor = Number(input[3]);
    let priceBags = 0.40;
    let pricePlastic = 1.50;
    let pricePaint = 14.50;
    let priceTinner = 5.00;

    let totalForPlastic = (quntityPlasticNeeded + 2) * pricePlastic;
    let totalForPaint = quantityPaintNeeded * 1.1 * pricePaint;
    let totalForTinner = quantityTinnerNeeded * priceTinner;
    
    let totalSupplies = totalForPlastic + totalForPaint + totalForTinner + priceBags;
    let totalForLabor = quantityLabor * totalSupplies * 0.3;
    let totalExpence = totalSupplies + totalForLabor; 

    console.log(totalExpence);
}

repainting(["10", "11", "4", "8"]);
repainting(["5", "10", "10", "1"]);

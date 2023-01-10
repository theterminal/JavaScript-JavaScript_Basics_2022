// 20220206 - JavaScript - Programming Basics - First Steps in Coding
// 07 - Food Delivery - judge: https://judge.softuni.org/Contests/Compete/Index/2400#6


function foodDelivery(input) {
    let numChickenMenues = Number(input[0]);
    let numFishMenues = Number(input[1]);
    let numVegitarianMenues = Number(input[2]);
    
    let vegitarianMenuesBGN = numVegitarianMenues * 8.15;
    let chickenMenuesBGN = numChickenMenues * 10.35;
    let fishMenuesBGN = numFishMenues * 12.40;
    
    let subTotal1 = chickenMenuesBGN + fishMenuesBGN + vegitarianMenuesBGN;
    let desertBGN = subTotal1 * 0.20;
    let subTotal2 = subTotal1 + desertBGN
    let deliveryBGN = 2.50;
    let totalBGN = subTotal2 + deliveryBGN;

    console.log(totalBGN);
}

foodDelivery(["2", "4", "3"]);
foodDelivery(["9", "2", "6"]);

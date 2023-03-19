// 20220206 - JavaScript - Programming Basics - First Steps in Coding
// 07 - Food Delivery - judge: https://judge.softuni.org/Contests/Compete/Index/2400#6


function foodDelivery(inputArray) {
    let numChickenMenus = Number(inputArray[0]);
    let numFishMenus = Number(inputArray[1]);
    let numVegetarianMenus = Number(inputArray[2]);
    
    let vegetarianMenusBGN = numVegetarianMenus * 8.15;
    let chickenMenusBGN = numChickenMenus * 10.35;
    let fishMenusBGN = numFishMenus * 12.40;
    
    let subTotal1 = chickenMenusBGN + fishMenusBGN + vegetarianMenusBGN;
    let desertBGN = subTotal1 * 0.20;
    let subTotal2 = subTotal1 + desertBGN
    let deliveryBGN = 2.50;
    let totalBGN = subTotal2 + deliveryBGN;

    console.log(totalBGN);
}

foodDelivery(["2", "4", "3"]);
foodDelivery(["9", "2", "6"]);

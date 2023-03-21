// 20220319 JavaScript - Exam Prep
// 05 - Tourist Shop - judge: https://judge.softuni.bg/Contests/Practice/Index/1654#3


function touristShop(input) {
    let index = 0;
    let budget = Number(input[index++]);
    let productName = ""; let productPrice = 0; let numProducts = 0; let totalPurchased = 0; let productCounter = 0;

    while (true) {
        productName = input[index++];
        
        if (productName === "Stop") {
            console.log(`You bought ${numProducts} products for ${totalPurchased.toFixed(2)} leva.`);
            break;
        }

        productPrice = Number(input[index++]);
        productCounter++;

        if (productCounter === 3) {
            productPrice *= 0.5;
            productCounter = 0;
        }

        let diff = Math.abs(productPrice - budget);

        if (productPrice > budget) {
            console.log(`You don't have enough money!`);
            console.log(`You need ${diff.toFixed(2)} leva!`);
            break;
        }

        budget -= productPrice;
        numProducts++;
        totalPurchased += productPrice;
    }
}


touristShop(["153.20", "Backpack", "25.20", "Shoes", "54", "Sunglasses", "30", "Stop"]);
touristShop(["54", "Thermal underwear", "24", "Sunscreen", "45"]);

// 20220213 - JavaScript - Programming Basics - Conditional Statements
// Additional 09 - Fuel Tank 2 - judge: https://judge.softuni.org/Contests/Practice/Index/1658#8


function fuelTank2(input) {
    let fuelType = input[0];
    let fuelQuantity = Number(input[1]);
    let cardYesNo = input[2];
    let fuelPrice = 0;

    switch(fuelType) {
        case "Gas":
            fuelPrice = 0.93;
            if (cardYesNo === "Yes") {
                fuelPrice -= 0.08;
            } break;
        case "Gasoline":
            fuelPrice = 2.22;
            if (cardYesNo === "Yes") {
                fuelPrice -= 0.18;
            } break;
        case "Diesel":
            fuelPrice = 2.33;
            if (cardYesNo === "Yes") {
                fuelPrice -= 0.12;
            } break;
    }

    let total = fuelQuantity * fuelPrice;

    if (fuelQuantity > 25) {
        total *= 0.90;
    } else if (fuelQuantity >= 20) {
        total *= 0.92;
    }

    console.log(`${total.toFixed(2)} lv.`)
}

fuelTank2(["Gas", "30", "Yes"]);
fuelTank2(["Gasoline", "25", "No"]);
fuelTank2(["Diesel", "19", "No"]);

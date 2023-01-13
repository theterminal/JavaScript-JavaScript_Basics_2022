// 20220213 - JavaScript - Programming Basics - Conditional Statements
// Additional 08 - Fuel tank - judge: https://judge.softuni.org/Contests/Practice/Index/1658#7


function fuelTank(input) {
    let typeOfFuel = input[0];
    let litersFuelInTank = Number(input[1]);

    switch(typeOfFuel) {
        case "Diesel":
        case "Gasoline":
        case "Gas":
            if (litersFuelInTank >= 25) {
                console.log(`You have enough ${typeOfFuel.toLowerCase()}.`);
            } else {
                console.log(`Fill your tank with ${typeOfFuel.toLowerCase()}!`);
            } break;
        default:
            console.log(`Invalid fuel!`);
            break;
    }
}

fuelTank(["Diesel", "10"]);
fuelTank(["Gasoline", "40"]);
fuelTank(["Gas", "25"]);
fuelTank(["Kerosene", "200"]);

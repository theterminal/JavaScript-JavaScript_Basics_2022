// 20220219 - JavaScript - Nested Conditional Statements
// 11 - Fruit Shop - judge: https://judge.softuni.org/Contests/Compete/Index/2403#10


function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let price = 0; let total = 0;

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        switch (fruit) {
            case "banana": price = 2.50; break;
            case "apple": price = 1.20; break;
            case "orange": price = 0.85; break;
            case "grapefruit": price = 1.45; break;
            case "kiwi": price = 2.70; break;
            case "pineapple": price = 5.50; break;
            case "grapes": price = 3.85; break;
            default:
                price = "error"; break;
        }
    } else if (day === "Saturday" || day === "Sunday") {
        switch (fruit) {
            case "banana": price = 2.70; break;
            case "apple": price = 1.25; break;
            case "orange": price = 0.90; break;
            case "grapefruit": price = 1.60; break;
            case "kiwi": price = 3.00; break;
            case "pineapple": price = 5.60; break;
            case "grapes": price = 4.20; break;
            default:
                price = "error"; break;
        }
    } else {
        price = "error";
    }

    if (price === "error") {
        console.log(price);
    } else {
        total = (quantity * price).toFixed(2);
        console.log(total);
    }
}

fruitShop(["apple", "Tuesday", "2"]);
fruitShop(["orange", "Sunday", "3"]);
fruitShop(["kiwi", "Monday", "2.5"]);
fruitShop(["grapes", "Saturday", "0.5"]);
fruitShop(["tomato", "Monday", "0.5"]);

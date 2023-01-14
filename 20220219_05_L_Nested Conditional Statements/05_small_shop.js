// 20220219 - JavaScript - Nested Conditional Statements
// 05 - Small Shop - judge: https://judge.softuni.org/Contests/Compete/Index/2403#4


function smallShop(input) {
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);
    let result = 0;

    switch (product) {
        case "coffee":
            switch (town) {
                case "Sofia": result = 0.50; break;
                case "Plovdiv": result = 0.40; break;
                case "Varna": result = 0.45; break;
            }
            break;
        case "water":
            switch (town) {
                case "Sofia": result = 0.80; break;
                case "Plovdiv": result = 0.70; break;
                case "Varna": result = 0.70; break;
            }
            break;
        case "beer":
            switch (town) {
                case "Sofia": result = 1.20; break;
                case "Plovdiv": result = 1.15; break;
                case "Varna": result = 1.10; break;
            }
            break;
        case "sweets":
            switch (town) {
                case "Sofia": result = 1.45; break;
                case "Plovdiv": result = 1.30; break;
                case "Varna": result = 1.35; break;
            }
            break;
        case "peanuts":
            switch (town) {
                case "Sofia": result = 1.60; break;
                case "Plovdiv": result = 1.50; break;
                case "Varna": result = 1.55; break;
            }
            break;
    }
    result = quantity * result;
    console.log(result)
}

smallShop(["coffee", "Varna", "2"]);
smallShop(["peanuts", "Plovdiv", "1"]);
smallShop(["beer", "Sofia", "2"]);
smallShop(["water", "Plovdiv", "2"]);
smallShop(["sweets", "Sofia", "2.23"]);

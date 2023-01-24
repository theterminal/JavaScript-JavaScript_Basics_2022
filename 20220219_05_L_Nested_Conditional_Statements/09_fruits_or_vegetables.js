// 20220219 - JavaScript - Nested Conditional Statements
// 09 - Fruits Or Vegetables - judge: https://judge.softuni.org/Contests/Compete/Index/2403#8


function fruitsOrVegetables(input) {
    let item = input[0];
    let result = "";

    switch(item) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
            result = "fruit"; break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot":
            result = "vegetable"; break;
        default:
            result = "unknown"; break;
    }
    console.log(result);
}

fruitsOrVegetables(["banana"]);
fruitsOrVegetables(["apple"]);
fruitsOrVegetables(["tomato"]);
fruitsOrVegetables(["water"]);

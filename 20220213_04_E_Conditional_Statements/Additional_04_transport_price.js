// 20220213 - JavaScript - Programming Basics - Conditional Statements
// Additional 04 - Transport Price - judge: https://judge.softuni.org/Contests/Practice/Index/1658#3


function transportPrice(input) {
    let km = Number(input[0]);
    let dayNight = input[1];
    let price = 0;

    if (km >= 100) {
        price = km * 0.06;
    } else if (km >= 20) {
        price = km *0.09;
    } else {
        price = 0.70;
        switch(dayNight) {
            case "day":
                price = price + (km * 0.79); break;
            case "night":
                price = price + (km * 0.90); break;
        }
    }
    console.log(price.toFixed(2));
}

transportPrice(["5", "day"]);
transportPrice(["7", "night"]);
transportPrice(["25", "day"]);
transportPrice(["180", "night"]);

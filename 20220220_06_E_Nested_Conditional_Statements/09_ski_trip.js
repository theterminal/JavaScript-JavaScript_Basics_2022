// 20220220 JavaScript - Nested Conditional Statements
// 09 - Ski Trip - judge url: https://judge.softuni.org/Contests/Compete/Index/2404#8


function skiTrip(input) {
    let days = Number(input[0]) - 1;
    let typeRoom = input[1];
    let grade = input[2];
    let price = 0;

    switch(typeRoom) {
        case "room for one person":
            price = 18.00;    
            break;
        case "apartment":
            price = 25.00;
            if (days > 15) {
                price *= 0.50;
            }  else if (days > 10) {
                price *= 0.65;
            } else if (days > 0) {
                price *= 0.70;
            }
            break;
        case "president apartment":
            price = 35.00; 
            if (days > 15) {
                price *= 0.80;
            } else if (days > 10) {
                price *= 0.85;
            } else if (days > 0) {
                price *= 0.90;
            }
            break;
    }
    if (grade === "positive") {
        price *= 1.25;
    } else {
        price *= 0.90;
    }
    let cost = (days * price).toFixed(2);
    console.log(`${cost}`);
}

skiTrip(["14", "apartment", "positive"]);
skiTrip(["30", "president apartment", "negative"]);
skiTrip(["12", "room for one person", "positive"]);
skiTrip(["2", "apartment", "positive"]);

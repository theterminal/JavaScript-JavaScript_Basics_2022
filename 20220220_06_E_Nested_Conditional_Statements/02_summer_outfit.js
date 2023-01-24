// 20220220 JavaScript - Nested Conditional Statements
// 02 - Summer Outfit - judge: https://judge.softuni.org/Contests/Compete/Index/2404#1


function summerOutfit(input) {
    let degrees = Number(input[0]);
    let timeOfDay = input[1];
    let outfit = "";
    let shoes = "";

    switch(timeOfDay) {
        case "Morning":
            if (degrees >= 25) {
                outfit = "T-Shirt";
                shoes = "Sandals";
            } else if (degrees > 18) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else {
                outfit = "Sweatshirt";
                shoes = "Sneakers";
            }; break;
        case "Afternoon":
            if (degrees >= 25) {
                outfit = "Swim Suit";
                shoes = "Barefoot";
            } else if (degrees > 18) {
                outfit = "T-Shirt";
                shoes = "Sandals";
            } else {
                outfit = "Shirt";
                shoes = "Moccasins";
            }; break;
        default:
            outfit = "Shirt";
            shoes = "Moccasins";
            break;
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit(["16", "Morning"]);
summerOutfit(["22", "Afternoon"]);
summerOutfit(["28", "Evening"]);    

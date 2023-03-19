// 20220220 JavaScript - Nested Conditional Statements
// 05 - Journey - judge: https://judge.softuni.org/Contests/Compete/Index/2404#4


function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination = ""; let spent = 0; sleepIn = "";

    switch(season) {
        case "summer":
            if (budget > 1000) {
                destination = "Europe";
                sleepIn = "Hotel";
                spent = budget * 0.9;
            } else if (budget > 100) {
                destination = "Balkans";
                sleepIn = "Camp";
                spent = budget * 0.40;
            } else {
                destination = "Bulgaria";
                sleepIn = "Camp";
                spent = budget * 0.30;
            }; break;
        case "winter":
            if (budget > 1000) {
                destination = "Europe";
                sleepIn = "Hotel";
                spent = budget * 0.9;
            } else if (budget > 100) {
                destination = "Balkans";
                sleepIn = "Hotel";
                spent = budget * 0.80;
            } else {
                destination = "Bulgaria";
                sleepIn = "Hotel";
                spent = budget * 0.70;
            }; break;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${sleepIn} - ${spent.toFixed(2)}`);
}


journey(["50", "summer"]);
journey(["75", "winter"]);
journey(["312", "summer"]);
journey(["678.53", "winter"]);
journey(["1500", "summer"]);

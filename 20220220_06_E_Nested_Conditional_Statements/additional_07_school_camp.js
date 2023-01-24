// 20220222 JavaScript - Nested Conditional Statements
// Additional 07 - School Camp - judge: https://judge.softuni.org/Contests/Practice/Index/1663#6


function schoolCamp(input) {
    let index = 0;
    let season = input[index++];
    let groupType = input[index++];
    let numStudents = Number(input[index++]);
    let numNights = Number(input[index++]);
    let typeSport = ""; let priceNight = 0;

    switch (season) {
        case "Winter":
            switch (groupType) {
                case "boys": priceNight = 9.60 ; typeSport = "Judo"; break;
                case "girls": priceNight = 9.60 ; typeSport = "Gymnastics"; break;
                case "mixed": priceNight = 10.00; typeSport = "Ski"; break;
            }; break;
        case "Spring":
            switch (groupType) {
                case "boys": priceNight = 7.20 ; typeSport = "Tennis"; break;
                case "girls": priceNight = 7.20 ; typeSport = "Athletics"; break;
                case "mixed": priceNight = 9.50; typeSport = "Cycling"; break;
            }; break;
        case "Summer":
            switch (groupType) {
                case "boys": priceNight = 15.00 ; typeSport = "Football"; break;
                case "girls": priceNight = 15.00 ; typeSport = "Volleyball"; break;
                case "mixed": priceNight = 20.00; typeSport = "Swimming"; break;
            }; break;
    }
    let totalPrice = numNights * numStudents * priceNight;

    if (numStudents >= 50) {
        totalPrice *= 0.50;
    } else if (numStudents >= 20) {
        totalPrice *= 0.85;
    } else if (numStudents >= 10) {
        totalPrice *= 0.95;
    }

    console.log(`${typeSport} ${totalPrice.toFixed(2)} lv.`);
}

schoolCamp(["Spring", "girls", "20", "7"]);
schoolCamp(["Winter", "mixed", "9", "15"]);
schoolCamp(["Summer", "boys", "60", "7"]);
schoolCamp(["Spring", "mixed", "17", "14"]);

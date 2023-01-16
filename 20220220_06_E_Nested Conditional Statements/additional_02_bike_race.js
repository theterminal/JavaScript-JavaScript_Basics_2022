// 20220222 JavaScript - Nested Conditional Statements
// Additional 02 - Bike Race - judge: https://judge.softuni.org/Contests/Practice/Index/1663#1


function bikeRace(input) {
    let index = 0;
    let numJuniors = Number(input[index++]);
    let numSeniors = Number(input[index++]);
    let typeTrack = input[index++];
    let feeJuniors = 0; let feeSeniors = 0;

    switch(typeTrack) {
        case "trail":
            feeJuniors = 5.50;
            feeSeniors = 7 ;
            break;
        case "cross-country":
            feeJuniors = 8;
            feeSeniors = 9.50;
            if ((numJuniors + numSeniors) >= 50) {
                feeJuniors *= 0.75;
                feeSeniors *= 0.75;
            };
            break;
        case "downhill":
            feeJuniors = 12.25;
            feeSeniors = 13.75;
            break;
        case "road":
            feeJuniors = 20;
            feeSeniors = 21.50;
            break;
    }
    let totalFee = (numJuniors * feeJuniors) + (numSeniors * feeSeniors);
    totalFee *= 0.95;

    console.log(`${totalFee.toFixed(2)}`);
}

bikeRace(["10", "20", "trail"]);
bikeRace(["21", "26", "cross-country"]);
bikeRace(["30", "25", "cross-country"]);
bikeRace(["10", "10", "downhill"]);
bikeRace(["3", "40", "road"]);

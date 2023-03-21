// 20220319 JavaScript - Pre Exam
// Pre Exam 03 - courierExpress - judge: https://judge.softuni.org/Contests/Compete/Index/3386#2


function courierExpress(input) {
    let index = 0;
    let weightOfPackage = Number(input[index++]);
    let typeOfService = input[index++];
    let distanceKm = Number(input[index++]);
    let pricePerKm = 0; let total = 0;

    switch(typeOfService) {
        case "standard":
            if (weightOfPackage < 1) {
                pricePerKm = 0.03;
            } else if (weightOfPackage >= 1 && weightOfPackage < 10) {
                pricePerKm = 0.05;
            } else if(weightOfPackage >= 10 && weightOfPackage < 40) {
                pricePerKm = 0.10;
            } else if(weightOfPackage >= 40 && weightOfPackage < 90) {
                pricePerKm = 0.15;
            } else if(weightOfPackage >= 90 && weightOfPackage < 150) {
                pricePerKm = 0.20;
            } ; break;
        case "express":
            if (weightOfPackage < 1) {
                pricePerKm = 0.03 + (0.03 * 0.80 * weightOfPackage);
            } else if(weightOfPackage >= 1 && weightOfPackage < 10) {
                pricePerKm = 0.05 + (0.05 * 0.40 * weightOfPackage);
            } else if(weightOfPackage >= 10 && weightOfPackage < 40) {
                pricePerKm = 0.10 + (0.10 * 0.05 * weightOfPackage);
            } else if(weightOfPackage >= 40 && weightOfPackage < 90) {
                pricePerKm = 0.15 + (0.15 * 0.02 * weightOfPackage);
            } else if(weightOfPackage >= 90 && weightOfPackage < 150) {
                pricePerKm = 0.20 + (0.20 * 0.01 * weightOfPackage);
            }; break;
    }

    total = distanceKm * pricePerKm;
    console.log(`The delivery of your shipment with weight of ${weightOfPackage.toFixed(3)} kg. would cost ${total.toFixed(2)} lv.`);
}


courierExpress(["1.5", "standard", "100"]);
courierExpress(["87", "express", "130"]);
courierExpress(["20", "standard", "349"]);

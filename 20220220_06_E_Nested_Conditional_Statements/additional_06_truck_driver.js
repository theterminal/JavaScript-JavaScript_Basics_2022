// 20220222 JavaScript - Nested Conditional Statements
// Additional 06 - Truck Driver - judge: https://judge.softuni.org/Contests/Practice/Index/1663#5


function truckDriver(input) {
    let index = 0;
    let season = input[index++];
    let kmsPerMonth = Number(input[index++]);
    let payPerKms = 0;

    if (kmsPerMonth > 10000) {
        payPerKms = 1.45;
    } else if (kmsPerMonth > 5000) {
        switch (season) {
            case "Spring":
            case "Autumn": payPerKms = 0.95; break;
            case "Summer": payPerKms = 1.10; break;
            case "Winter": payPerKms = 1.25; break;
        };
    } else if (kmsPerMonth > 0) {
        switch (season) {
            case "Spring":
            case "Autumn": payPerKms = 0.75; break;
            case "Summer": payPerKms = 0.90; break;
            case "Winter": payPerKms = 1.05; break;
        };
    }
    let totalPay = ((kmsPerMonth * 4 * payPerKms) * 0.90).toFixed(2);
    console.log(totalPay);
}

truckDriver(["Summer", "3455"]);
truckDriver(["Winter", "4350"]);
truckDriver(["Spring", "1600"]);
truckDriver(["Winter", "5678"]);
truckDriver(["Autumn", "8600"]);
truckDriver(["Winter", "16042"]);
truckDriver(["Spring", "16942"]);

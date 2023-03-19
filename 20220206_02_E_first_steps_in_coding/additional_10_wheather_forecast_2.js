// 20220209 - JavaScript - Programming Basics - First Steps in Coding
// Additional 10 - Weather Forecast 2 - judge: https://judge.softuni.org/Contests/Practice/Index/1642#9


function weatherForecast2(input) {
    let degrees = input[0];

    if (degrees >= 26.00 && degrees <= 35.00) {
        console.log("Hot");
    } else if (degrees >= 20.1 && degrees <= 25.9) {
        console.log("Warm");
    } else if (degrees >= 15.00 && degrees <= 20.00) {
        console.log("Mild");
    } else if (degrees >= 12.00 && degrees <= 14.9) {
        console.log("Cool");
    } else if (degrees >= 5.00 && degrees <= 11.9) {
            console.log("Cold");
    } else {
        console.log("unknown");
    }
}

weatherForecast2(["16.5"]);
weatherForecast2(["8"]);
weatherForecast2(["22.4"]);
weatherForecast2(["26"]);
weatherForecast2(["0"]);

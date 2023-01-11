// 20220209 - JavaScript - Programming Basics - First Steps in Coding
// Additional 09 - Weather Forecast - judge: https://judge.softuni.org/Contests/Practice/Index/1642#8


function weatherForecast(input) {
    let weather = input[0];

    if (weather == "sunny") {
        console.log("It's warm outside!");
    }else{
        console.log("It's cold outside!");
    }
}

weatherForecast(["sunny"]);
weatherForecast(["cloudy"]);
weatherForecast(["snowy"]);

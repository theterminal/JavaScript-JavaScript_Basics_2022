// 20220209 - JavaScript - Programming Basics - First Steps in Coding
// Additional 03 - Celsius to Fahrenheit - judge: https://judge.softuni.org/Contests/Practice/Index/1642#2


function celsiusToFahrenheit(input) {
    let celsius = Number(input[0]);
    let fahrenheit = celsius * 1.8 + 32;
    console.log(fahrenheit.toFixed(2));
}

celsiusToFahrenheit(["25"]);
celsiusToFahrenheit(["0"]);
celsiusToFahrenheit(["-5.5"]);
celsiusToFahrenheit(["32.3"]);

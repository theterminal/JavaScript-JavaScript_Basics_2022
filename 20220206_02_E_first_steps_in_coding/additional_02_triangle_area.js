// 20220209 - JavaScript - Programming Basics - First Steps in Coding
// Additional 02 - Triangle Area - judge: https://judge.softuni.org/Contests/Practice/Index/1642#1


function triangleArea(input) {
    let side = Number(input[0]);
    let h = Number(input[1]);

    area = side * h / 2;

    console.log(area.toFixed(2));
}

triangleArea(["20", "30"]);
triangleArea(["15", "35"]);
triangleArea(["7.75", "8.45"]);
triangleArea(["1.23456", "4.56789"]);

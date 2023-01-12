// 20220212 - JavaScript - Programming Basics - Conditional Statements
// 07 - Area Of Figures - judge: https://judge.softuni.org/Contests/Compete/Index/2401#6


function AreaOfFigures(input) {
    let typeFigure = input[0];
    let area = 0;

    if (typeFigure === "square") {
        let side = Number(input[1]);
        area = side * side;
    } else if (typeFigure === "rectangle") {
        let side_a = Number(input[1]);
        let side_b = Number(input[2]);
        area = side_a * side_b;
    } else if (typeFigure === "circle") {
        let radius = Number(input[1]);
        area = radius * radius * Math.PI;
    } else if (typeFigure === "triangle") {
        let side = Number(input[1]);
        let height = Number(input[2]);
        area = side * height * 0.5;
    }

    console.log(area.toFixed(3));
}

AreaOfFigures(["square", "5"]);
AreaOfFigures(["rectangle", "7", "2.5"]);
AreaOfFigures(["circle", "6"]);
AreaOfFigures(["triangle", "4.5", "20"]);

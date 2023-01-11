// 20220209 - JavaScript - Programming Basics - First Steps in Coding
// Additional 08 - Circle Area And Perimeter - judge: https://judge.softuni.org/Contests/Practice/Index/1642#7


function circleAreaAndPerimeter(input) {
    let radius = Number(input[0]);

    let area = (Math.PI * (radius ** 2)).toFixed(2);
    let perimeter = (2 * Math.PI * radius).toFixed(2);
    
    console.log(area);
    console.log(perimeter);
}

circleAreaAndPerimeter(["3"]);
circleAreaAndPerimeter(["4.5"]);

// 20220206 - JavaScript - Programming Basics - First Steps in Coding
// 02 - Radians To Degrees converter - judge: https://judge.softuni.org/Contests/Compete/Index/2400#1


function radiansToDegrees(input) {
    let radians = Number(input[0]);
    let degrees = radians * 180 / Math.PI;

    console.log(degrees);
}

radiansToDegrees(["3.1416"]);
radiansToDegrees(["6.2832"]);

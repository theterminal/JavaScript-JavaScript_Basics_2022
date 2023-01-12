// 20220212 - JavaScript - Programming Basics - Conditional Statements
// 03 - Even Or Odd - judge: https://judge.softuni.org/Contests/Compete/Index/2401#2


function evenOrOdd(input) {
    let num = Number(input[0]);

    if (num % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

evenOrOdd(["2"]);
evenOrOdd(["3"]);
evenOrOdd(["25"]);
evenOrOdd(["1024"]);

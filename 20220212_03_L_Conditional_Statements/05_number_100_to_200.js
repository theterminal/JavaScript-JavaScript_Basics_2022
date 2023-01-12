// 20220212 - JavaScript - Programming Basics - Conditional Statements
// 05 - Number 100 To 200 - judge: https://judge.softuni.org/Contests/Compete/Index/2401#4


function number100To200(input) {
    let num = Number(input[0]);
    
    if (num < 100) {
        console.log("Less than 100");
    } else if (num >= 100 && num <= 200) {
        console.log("Between 100 and 200");
    } else if (num > 200) {
        console.log("Greater than 200");
    }
}

number100To200(["95"]);
number100To200(["120"]);
number100To200(["299"]);

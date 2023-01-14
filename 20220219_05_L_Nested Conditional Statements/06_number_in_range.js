// 20220219 - JavaScript - Nested Conditional Statements
// 06 - Number In Range - judge: https://judge.softuni.org/Contests/Compete/Index/2403#5


function numberInRange(input) {
    let number = Number(input[0]);
    let result = "";

    if (number >= -100 && number <= 100 && number !== 0) {
        result = "Yes";
    } else {
        result = "No";
    }
    console.log(result);
}

numberInRange(["-25"]);
numberInRange(["0"]);
numberInRange(["25"]);

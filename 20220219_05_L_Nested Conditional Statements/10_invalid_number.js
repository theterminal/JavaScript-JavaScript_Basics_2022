// 20220219 - JavaScript - Nested Conditional Statements
// 10 - Invalid Number - judge: https://judge.softuni.org/Contests/Compete/Index/2403#9


function invalidNumber(input) {
    let number = Number(input[0]);
    let isValid = number === 0 || (number >= 100 && number <= 200);

    if (!isValid) {
        console.log("invalid");
    }
}

invalidNumber(["75"]);
invalidNumber(["150"]);
invalidNumber(["220"]);
invalidNumber(["199"]);
invalidNumber(["-1"]);
invalidNumber(["100"]);
invalidNumber(["200"]);
invalidNumber(["0"]);

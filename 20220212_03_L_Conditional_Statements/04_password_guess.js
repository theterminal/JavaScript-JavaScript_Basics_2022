// 20220212 - JavaScript - Programming Basics - Conditional Statements
// 04 - Password Guess - judge: https://judge.softuni.org/Contests/Compete/Index/2401#3


function passwordGuess(input) {
    let password = input[0];

    if (password === "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}

passwordGuess(["qwerty"]);
passwordGuess(["s3cr3t!P@ssw0rd"]);
passwordGuess(["s3cr3t!p@ss"]);

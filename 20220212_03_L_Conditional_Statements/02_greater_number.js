// 20220212 - JavaScript - Programming Basics - Conditional Statements
// 02 - Greater Number - judge: https://judge.softuni.org/Contests/Compete/Index/2401#1 


function greaterNumber(input) {
    let num_1 = Number(input[0]);
    let num_2 = Number(input[1]);

    if (num_1 > num_2) {
        console.log(num_1);
    } else {
        console.log(num_2);
    }
}

greaterNumber(["5", "3"]);
greaterNumber(["3", "5"]);
greaterNumber(["10", "10"]);
greaterNumber(["-5", "5"]);

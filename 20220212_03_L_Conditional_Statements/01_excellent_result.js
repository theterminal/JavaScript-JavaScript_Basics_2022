// 20220212 - JavaScript - Programming Basics - Conditional Statements
// 01 - Excellent Result - judge: https://judge.softuni.org/Contests/Compete/Index/2401#0


function excellentResult(input) {
    let grade = Number(input[0]);
    
    if (grade >= 5.50) {
        console.log("Excellent!");
    }
}

excellentResult([6]);
excellentResult([5]);
excellentResult([5.50]);
excellentResult([5.49]);

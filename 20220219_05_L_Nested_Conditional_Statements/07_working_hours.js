// 20220219 - JavaScript - Nested Conditional Statements
// 07 - Working Hours - judge: https://judge.softuni.org/Contests/Compete/Index/2403#6


function workingHours(input) {
    let h = Number(input[0]);
    let day = input[1];

    if (h < 10 || h > 18 || day == "Sunday") {
        result = "closed";
    } else {
        result = "open";
    }
    console.log(result);
}

workingHours(["11", "Monday"]);
workingHours(["19", "Friday"]);
workingHours(["11", "Sunday"]);

// 20220219 - JavaScript - Nested Conditional Statements
// 04 - Personal Titles - judge: https://judge.softuni.org/Contests/Compete/Index/2403#3


function personalTitle(input) {
    let age = Number(input[0]);
    let gender = input[1];
    let output = "";

    switch (gender) {
        case "m":
            if (age < 16) {
                output = "Master";
            } else {
                output = "Mr."
            }
            break;
        case "f":
            if (age < 16) {
                output = "Miss";
            } else {
                output = "Ms."
            }
            break;
    }
    console.log(output);
}

personalTitle(["12", "f"]);
personalTitle(["17", "m"]);
personalTitle(["25", "f"]);
personalTitle(["13.5", "m"]);

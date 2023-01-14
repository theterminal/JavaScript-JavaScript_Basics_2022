// 20220219 - JavaScript - Nested Conditional Statements
// 02 - Weekend Or Work Day - judge: https://judge.softuni.org/Contests/Compete/Index/2403#1


function weekendOrWeekDay(input) {
    let day = input[0];

    switch(day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            result = "Working day"; break;
        case "Saturday":
        case "Sunday":
            result = "Weekend"; break;
        default:
            result = "Error"; break;
    }
    console.log(result);
}

weekendOrWeekDay(["Monday"]);
weekendOrWeekDay(["Sunday"]);
weekendOrWeekDay(["April"]);

// 20220213 - JavaScript - Programming Basics - Conditional Statements
// 03 - Time + 15 Minutes - judge: https://judge.softuni.org/Contests/Compete/Index/2402#2


function timePlus15Minutes(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);

    let totalInputInMin = hour * 60 + minutes;
    let newTimeInMin = totalInputInMin + 15;

    let newHour = parseInt(newTimeInMin / 60);

    if (newHour === 24) {
        newHour = 0;
    }
    
    let newMin = newTimeInMin % 60;

    if (newMin < 10) {
        console.log(`${newHour}:0${newMin}`);
    } else {
        console.log(`${newHour}:${newMin}`);
    }
}

timePlus15Minutes(["1", "46"]);
timePlus15Minutes(["0", "01"]);
timePlus15Minutes(["23", "59"]);
timePlus15Minutes(["11", "08"]);
timePlus15Minutes(["12", "49"]);

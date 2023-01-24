// 20220220 JavaScript - Nested Conditional Statements
// 08 - On Time For Exam - judge: https://judge.softuni.org/Contests/Compete/Index/2404#7


function onTimeForExam(input) {
    let hourExam = Number(input[0]);
    let minutesExam = Number(input[1]);
    let hourArrived = Number(input[2]);
    let minutesArrived = Number(input[3]);

    minutesExam = minutesExam + (hourExam * 60);
    minutesArrived = minutesArrived + (hourArrived * 60);
    let diff = Math.abs(minutesArrived - minutesExam);
    let hhOutput = Math.trunc(diff / 60);
    let mmOutput = diff % 60;


    if (minutesArrived > minutesExam) {
        console.log("Late");
        if (diff > 0 && diff < 60) {
            console.log(`${diff} minutes after the start`);
        } else {
            if (mmOutput < 10) {
                console.log(`${hhOutput}:0${mmOutput} hours after the start`);
            } else {
                console.log(`${hhOutput}:${mmOutput} hours after the start`);
            }
        }
    } else {
        if (minutesArrived >= (minutesExam - 30)) {
            console.log("On time");
            if (diff > 0) {
                console.log(`${diff} minutes before the start`);
            }
        } else {
            console.log("Early");
            if (diff > 30 && diff < 60) {
                console.log(`${diff} minutes before the start`);
            } else {
                if (mmOutput < 10) {
                    console.log(`${hhOutput}:0${mmOutput} hours before the start`);
                } else {
                    console.log(`${hhOutput}:${mmOutput} hours before the start`);
                }
            }
        }
    }
}

onTimeForExam(["9", "30", "9", "50"]);
onTimeForExam(["9", "00", "8", "30"]);
onTimeForExam(["9", "00", "10", "30"]);
onTimeForExam(["14", "00", "13", "55"]);
onTimeForExam(["10", "00", "10", "00"]);
onTimeForExam(["11", "30", "10", "55"]);

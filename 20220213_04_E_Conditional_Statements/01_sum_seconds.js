// 20220213 - JavaScript - Programming Basics - Conditional Statements
// 01 - Sum Seconds - judge: https://judge.softuni.org/Contests/Compete/Index/2402#0


function sumSeconds(input) {
    let num_1 = Number(input[0]);
    let num_2 = Number(input[1]);
    let num_3 = Number(input[2]);

    let sum_sec = num_1 + num_2 + num_3;
    let sum_min = Math.trunc(sum_sec / 60);         // option 1
    // let sum_min = parseInt(sum_sec / 60);        // option 2
    let sec = sum_sec % 60;
    let sum = 0;

    if (sec < 10) {
        sum = `${sum_min}:0${sec}`;
    } else {
        sum = `${sum_min}:${sec}`;
    }

    console.log(sum);
}

sumSeconds(["35", "45", "44"]);
sumSeconds(["22", "7", "34"]);
sumSeconds(["50", "50", "49"]);
sumSeconds(["14", "12", "10"]);

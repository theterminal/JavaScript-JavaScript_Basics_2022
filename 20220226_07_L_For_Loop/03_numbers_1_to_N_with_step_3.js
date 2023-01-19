// 20220228 - JavaScript - For Loops
// 03 - Numbers 1...N With Step 3 - judge: https://judge.softuni.org/Contests/Compete/Index/2405#2


function numbersWithStep3(input) {
    let n = Number(input[0]);

    for (let i = 1; i <= n; i+=3 ) {
        console.log(i);
    }
}

numbersWithStep3(["10"]);
numbersWithStep3(["7"]);
numbersWithStep3(["15"]);

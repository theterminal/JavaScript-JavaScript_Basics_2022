// 20220206 - JavaScript - Programming Basics - First Steps in Coding
// 01 - USD / BGN converter - judge: https://judge.softuni.org/Contests/Compete/Index/2400#0


function usdToBgn(input) {
    let amountUsd = Number(input[0]);
    let amountBgn = amountUsd * 1.79549;

    console.log(amountBgn);
}

usdToBgn(["22"]);
usdToBgn(["100"]);
usdToBgn(["12.5"]);

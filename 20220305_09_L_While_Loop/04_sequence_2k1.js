// 20220303 - JavaScript - While Loop
// 04 - Sequence 2k+1 - judge: https://judge.softuni.org/Contests/Compete/Index/2407#3


function sequence2KPlus1(input) {
    let n = Number(input[0]);
    let num = 1;

    while (num <= n ) {
        console.log(num);
        num = num * 2 + 1;
    }
}

sequence2KPlus1(["3"]);
sequence2KPlus1(["8"]);
sequence2KPlus1(["17"]);
sequence2KPlus1(["31"]);

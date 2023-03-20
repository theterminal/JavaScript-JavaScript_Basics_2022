// 20220303 - JavaScript - While Loop
// 03 - Sum Numbers - judge: https://judge.softuni.org/Contests/Compete/Index/2407#2


function sumNumbers(input) {
    let index = 0;
    let sumNum = Number(input[index++]);
    let sum = 0;
    let currentNum;

    while (true) {
        currentNum = Number(input[index++]);
        sum += currentNum;

        if (sum >= sumNum) {
            break;
        }
    }

    console.log(sum);
}


sumNumbers(["100", "10", "20", "30", "40"]);
sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);

// 20220303 - JavaScript - While Loop
// 03 - Sum Numbers - judge: https://judge.softuni.org/Contests/Compete/Index/2407#2


function sumNumbers(input) {
    let index = 0;
    let num1 = Number(input[index++]);
    let sum = 0;

    while (true) {
        let num = Number(input[index++]);
        sum += num;

        if (sum >= num1) {
            break;
        }
    }
    console.log(sum);
}

sumNumbers(["100", "10", "20", "30", "40"]);
sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);

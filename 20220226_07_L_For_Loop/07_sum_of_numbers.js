// 20220228 - JavaScript - For Loops
// 07 - Sum Of Numbers - judge: https://judge.softuni.org/Contests/Compete/Index/2405#6


function sumOfNumbers(input) {
    let index = 0;
    let n = input[index++];
    let length = n.length;
    let sum = 0;

    for (let i = 0; i < length; i++) {
        sum += Number(n[i]);
    }
    console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers(["1234"]);
sumOfNumbers(["564891"]);

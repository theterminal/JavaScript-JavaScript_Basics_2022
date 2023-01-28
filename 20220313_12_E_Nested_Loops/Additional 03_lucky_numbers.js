// 20220313 JavaScript - Nested Loops
// Additional 03 - Lucky Numbers - judge: https://judge.softuni.org/Contests/Practice/Index/1381#2


function luckyNumbers(input) {
    let index = 0;
    let n = Number(input[index++]);
    let firstDigit = 0; let secondDigit = 0; let thirdDigit = 0; let fourthDigit = 0;
    let sumFirstAndSecondDigits = 0; let sumThirdAndFourthDigits = 0; let luckyNumber = 0; let output = "";

    for (let i = 1000; i <= 9999; i++) {
        firstDigit = Math.trunc(i / 1000);
        if (firstDigit === 0) {
            continue;
        }

        secondDigit = Math.trunc((Math.trunc(i / 100)) % 10);
        if (secondDigit === 0) {
            continue;
        }

        thirdDigit = Math.trunc(Math.trunc(i / 10) % 10);
        if (thirdDigit === 0) {
            continue;
        }

        fourthDigit = Math.trunc(i % 10);
        if (fourthDigit === 000) {
            continue;
        }

        sumFirstAndSecondDigits = firstDigit + secondDigit;
        sumThirdAndFourthDigits = thirdDigit + fourthDigit;

        if (n % sumFirstAndSecondDigits === 0) {
            if (sumFirstAndSecondDigits === sumThirdAndFourthDigits) {
                luckyNumber = i;
                output = output + " " + luckyNumber;
            }
        }
    }
    console.log(output);
}

luckyNumbers(["3"]);
luckyNumbers(["7"]);
luckyNumbers(["24"]);

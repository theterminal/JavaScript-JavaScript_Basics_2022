// 20220308 JavaScript - Nested Loops
// 04 - Sum Of Numbers - judge: https://judge.softuni.org/Contests/Compete/Index/2409#3


function sumOfTwoNumbers(input) {
    let index = 0;
    let start = Number(input[index++]);
    let end = Number(input[index++]);
    let magicNum = Number(input[index++]);
    let testNum = 0; let combCounter = 0; let flag = false;

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            combCounter++;
            testNum = i + j;

            if (i + j === magicNum) {
                console.log(`Combination N:${combCounter} (${i} + ${j} = ${magicNum})`);
                flag = true;
                break;
            }

            if (i === end && j === end) {
                console.log(`${combCounter} combinations - neither equals ${magicNum}`);
                flag = true;
                break;
            }
        }

        if (flag) {
            break;
        }
    }
}


sumOfTwoNumbers(["1", "10", "5"]);
sumOfTwoNumbers(["23", "24", "20"]);
sumOfTwoNumbers(["88", "888", "1000"]);
sumOfTwoNumbers(["88", "888", "2000"]);

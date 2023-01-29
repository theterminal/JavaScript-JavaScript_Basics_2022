// 20220315 JavaScript - Nested Loops
// Additional 09 - Sum Of Two Numbers - judge: https://judge.softuni.org/Contests/Practice/Index/1381#8


function sumOfTwoNumbers(input) {
    let index = 0;
    let startOfInterval = Number(input[index++]);
    let endOfInterval = Number(input[index++]);
    let magicNumber = Number(input[index++]);
    let counterOfCombinatins = 0;
    let flag = false;

    for (let i = startOfInterval; i <= endOfInterval; i++) {
        for (let j = startOfInterval; j <= endOfInterval; j++) {
            counterOfCombinatins++;
            if (i + j === magicNumber) {
                console.log(`Combination N:${counterOfCombinatins} (${i} + ${j} = ${magicNumber})`);
                flag = true;
                break;
            }
        }
        if (flag) {break;}
    }
    if (flag === false) {
        console.log(`${counterOfCombinatins} combinations - neither equals ${magicNumber}`);
    }
}

sumOfTwoNumbers(["1", "10", "5"]);
sumOfTwoNumbers(["23", "24", "20"]);
sumOfTwoNumbers(["88", "888", "1000"]);
sumOfTwoNumbers(["88", "888", "2000"]);

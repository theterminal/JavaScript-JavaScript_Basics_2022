// 20220310 JavaScript - Nested Loops
// 05 - Special Numbers - judge: https://judge.softuni.org/Contests/Compete/Index/2410#4


function specialNumbers(input) {
    let index = 0;
    let n = Number(input[index++]);
    let output = "";

    for (let i = 1111; i <= 9999; i++) {
        let iString = i.toString();

        for (let j = 0; j < 4; j++) {
            let iStringIndexJ = iString[j];

            if ((n % Number(iStringIndexJ)) != 0) {
                break;
            } else if (j === 3) {
                output = `${output} ${iString}`;
            }
        }
    }

    console.log(output);
}


specialNumbers(["3"]);
specialNumbers(["11"]);
specialNumbers(["16"]);

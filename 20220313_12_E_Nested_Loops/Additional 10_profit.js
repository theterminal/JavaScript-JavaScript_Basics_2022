// 20220315 JavaScript - Nested Loops
// Additional 10 - Profit - judge: https://judge.softuni.org/Contests/Practice/Index/1381#9


function profit(input) {
    let index = 0;
    let numOf1BGN = Number(input[index++]);
    let numOf2BGN = Number(input[index++]);
    let numOf5BGN = Number(input[index++]);
    let totalSumBGN = Number(input[index++]);

    for (let i = 0; i <= numOf1BGN; i++) {
        for (let j = 0; j <= numOf2BGN; j++) {
            for (let k = 0; k <= numOf5BGN; k++) {
                if ((i * 1 + j * 2 + k * 5) === totalSumBGN) {
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${totalSumBGN} lv.`);
                }
            }
        }
    }
}

profit(["3", "2", "3", "10"]);
profit(["5", "3", "1", "7"]);

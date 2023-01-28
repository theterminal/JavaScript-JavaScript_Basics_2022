// 20220312 JavaScript - Nested Loops
// Additional 01 - Unique PIN Codes - judge: https://judge.softuni.org/Contests/Practice/Index/1381#0


function uniquePinCodes(input) {
    let index = 0;
    let n1 = Number(input[index++]);
    let n2 = Number(input[index++]);
    let n3 = Number(input[index++]);

    for (let i = 1; i <= n1; i++) {
        for (let j = 1; j <= n2; j++) {
            if ((j % 2 === 0 || j % 3 === 0) && j !== 2 && j !== 3) {
                continue;
            } else {
                for (let k = 1; k <= n3; k++) {
                    if (i % 2 === 0 && j >= 2 && j <= 7 && k % 2 === 0) {
                        console.log(`${i} ${j} ${k}`);
                    }
                }
            }
        }
    }
}

uniquePinCodes(["3", "5", "5"]);
uniquePinCodes(["8", "2", "8"]);

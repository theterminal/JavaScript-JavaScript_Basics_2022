// 20220314 JavaScript - Nested Loops
// Additional 08 - Secret Door's Lock - judge: https://judge.softuni.org/Contests/Practice/Index/1381#7


function secretDoorLock(input) {
    let index = 0;
    let pos100 = Number(input[index++]);
    let pos10 = Number(input[index++]);
    let pos1 = Number(input[index++]);
    let maxNumber = Number(`${pos100}${pos10}${pos1}`);
    let flag = false;

    for (let i = 1; i <= pos100; i++) {
        if (i % 2 !== 0) {
            continue;
        }
        for (let j = 1; j <= pos10; j++) {
            if (j !== 2 && j !== 3 && j !== 5 && j !== 7) {
                continue;
            }
            for (let k = 1; k <= pos1; k++) {
                if (k % 2 !== 0) {
                    continue;
                }
                if (Number(`${i}${j}${k}`) > maxNumber) {
                    flag = true;
                    break;
                }
                console.log(`${i} ${j} ${k}`);
            }
            if (flag) {
                break;
            }
        }
        if (flag) {
            break;
        }
    }
}

secretDoorLock(["3", "5", "5"]);
secretDoorLock(["8", "2", "8"]);

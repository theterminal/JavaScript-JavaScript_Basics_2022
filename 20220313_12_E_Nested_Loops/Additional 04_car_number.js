// 20220313 JavaScript - Nested Loops
// Additional 04 - Car Number - judge: https://judge.softuni.org/Contests/Practice/Index/1381#3


function carNumber(input) {
    let index = 0;
    let start = Number(input[index++]);
    let end = Number(input[index++]);
    let output = "";

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            for (let k = start; k <= end; k++) {
                for (let l = start; l <= end; l++) {
                    if (((i % 2 === 0 && l % 2 !== 0) || (i % 2 !== 0 && l % 2 === 0)) && ((i > l) && (j + k) % 2 === 0)) {
                        let result = (`${i}${j}${k}${l}`);
                        output = output + " " + result;
                    }
                }
            }
        }
    }
    console.log(output);
}

carNumber(["2", "3"]);
carNumber(["3", "5"]);
carNumber(["5", "8"]);

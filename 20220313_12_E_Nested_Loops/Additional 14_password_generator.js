// 20220316 JavaScript - Nested Loops
// Additional 14 - Password Generator - judge: https://judge.softuni.org/Contests/Practice/Index/1381#13


function passwordGenerator(input) {
    let index = 0;
    let n = Number(input[index++]);
    let l = Number(input[index++]);
    let result = ""; let output = "";

    for (let a = 1; a <= n; a++) {
        for (let b = 1; b <= n; b++) {
            for (let c = 97; c < (97 + l); c++) {
                for (let d = 97; d < (97 + l); d++) {
                    for (let e = 1; e <= n; e++) {
                        if (!(e > a && e > b)) {
                            continue;
                        }
                        result = `${a}${b}${String.fromCharCode(c)}${String.fromCharCode(d)}${e}`;
                        output += `${result} `;
                    }
                }
            }
        }
    }
    console.log(output);
}

passwordGenerator(["2", "4"]);
passwordGenerator(["3", "1"]);
passwordGenerator(["3", "2"]);
passwordGenerator(["4", "2"]);

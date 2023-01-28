// 20220312 JavaScript - Nested Loops
// Additional 02 - Letters Combinations - judge: https://judge.softuni.org/Contests/Practice/Index/1381#1


function lettersCombination(input) {
    let index = 0;
    let start = input[index++];
    let end = input[index++];
    let excluded = input[index++];
    let counterCombOuput = 0; let output = ""; let result = "";
    
    start = start.charCodeAt(0); end = end.charCodeAt(0); excluded = excluded.charCodeAt(0);

    for (let i = start; i <= end; i++) {
        if (i === excluded) {
            continue;
        }
        for (let j = start; j <= end; j++) {
            if (j === excluded) {
                continue;
            }
            for (let k = start; k <= end; k++) {
                if (k === excluded) {
                    continue;
                }
                result = `${String.fromCharCode(i)}${String.fromCharCode(j)}${String.fromCharCode(k)}`;
                output += `${result} `;
                counterCombOuput++;
            }
        }
    }
    console.log(`${output}${counterCombOuput}`);
}

lettersCombination(["a", "c", "b"]);
lettersCombination(["f", "k", "h"]);
lettersCombination(["a", "c", "z"]);

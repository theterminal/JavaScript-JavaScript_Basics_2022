// 20220313 JavaScript - Nested Loops
// Additional 05 - Challenge the Wedding - judge: https://judge.softuni.org/Contests/Practice/Index/1381#4


function challengeTheWedding(input) {
    let index = 0;
    let numMen = Number(input[index++]);
    let numWomen = Number(input[index++]);
    let allTables = Number(input[index++]);
    let counterTables = 0; let flag = false; let output = "";

    for (let m = 1; m <= numMen; m++) {
        for (let w = 1; w <= numWomen; w++) {
            if (counterTables === allTables) {
                flag = true;
                break;
            }
            output = `${output} (${m} <-> ${w})`;
            counterTables++;
        }
        if (flag) {
            break;
        }
    }
    console.log(output);
}

challengeTheWedding(["2", "2", "6"]);
challengeTheWedding(["2", "2", "3"]);
challengeTheWedding(["5", "8", "40"]);

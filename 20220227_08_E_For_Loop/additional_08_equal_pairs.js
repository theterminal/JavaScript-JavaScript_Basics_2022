// 20220306 - JavaScript - For Loops
// Additional 08 - Equal Pairs - judge: https://judge.softuni.org/Contests/Practice/Index/1680#7


function equalPairs(input) {
    let index = 0;
    let numPairs = Number(input[index++]);
    let num = 0; let total = 0; let lastTotal = 0; let diff = 0; let maxDiff = 0;

    for (let i = 0; i < numPairs; i++) {
        for (let j = 0; j < 2; j++) {
            num = Number(input[index++]);
            total += num;
        }

        diff = Math.abs(lastTotal - total);

        if (diff > maxDiff && i !== 0) {
            maxDiff = diff;
        }

        lastTotal = total;
        total = 0;
    }

    if (maxDiff === 0) {
        console.log(`Yes, value=${lastTotal}`);
    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    }
}


equalPairs(["3", "1", "2", "0", "3", "4", "-1"]);
equalPairs(["4", "1", "1", "3", "1", "2", "2", "0", "0"]);
equalPairs(["2", "-1", "0", "0", "-1"]);
equalPairs(["2", "1", "2", "2", "2"]);
equalPairs(["1", "5", "5"]);
equalPairs(["2", "-1", "2", "0", "-1"]);

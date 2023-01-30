// 20220316 JavaScript - Nested Loops
// Additional 13 - Prime Pairs - judge: https://judge.softuni.org/Contests/Practice/Index/1381#12


function primePairs(input) {
    let index = 0;
    let startOfPair1 = Number(input[index++]);
    let startOfPair2 = Number(input[index++]);
    let differenceToEndPair1 = Number(input[index++]);
    let differenceToEndPair2 = Number(input[index++]);

    for (let i = startOfPair1; i <= startOfPair1 + differenceToEndPair1; i++) {
        if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
            continue;
        }
        for (let j = startOfPair2; j <= startOfPair2 + differenceToEndPair2; j++) {
            if (j % 2 === 0 || j % 3 === 0 || j % 5 === 0 || j % 7 === 0) {
                continue;
            }
            console.log(`${i}${j}`);
        }
    }
}

primePairs(["51", "75", "4", "7"]);
primePairs(["10", "30", "9", "6"]);

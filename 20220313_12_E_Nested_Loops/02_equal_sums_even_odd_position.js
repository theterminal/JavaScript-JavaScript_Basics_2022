// 20220309 JavaScript - Nested Loops
// 02 - Equal Sums Even Odd Position - judge: https://judge.softuni.org/Contests/Compete/Index/2410#1


function equalSumsEvenOddPositions(input) {
    let index = 0;
    let start = Number(input[index++]);
    let end = Number(input[index++]);
    let numToTest = 0; let numLength = 0; let sumEven = 0; let sumOdd = 0; let result = "";

    for (let i = start; i <= end; i++) {
        sumOdd = 0;
        sumEven = 0;
        numToTest = i;
        numToTest = String(numToTest);
        numLength = numToTest.length;

        for (j = 0; j < numLength; j++) {
            if (j % 2 === 0) {
                sumOdd += Number(numToTest[j]);
            } else {
                sumEven += Number(numToTest[j]);
            }
        }
        
        if (sumOdd === sumEven) {
            result = result + " " + numToTest;
        }
    }

    console.log(result);
}


equalSumsEvenOddPositions(["100000", "100050"]);
equalSumsEvenOddPositions(["123456", "124000"]);
equalSumsEvenOddPositions(["299900", "300000"]);
equalSumsEvenOddPositions(["100115", "100120"]);

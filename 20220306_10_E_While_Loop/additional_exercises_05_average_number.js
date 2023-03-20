// 20220312 - JavaScript - While Loop
// Additional 05 - Average Number - judge: https://judge.softuni.org/Contests/Practice/Index/1684#4


function averageNumber(input) {
    let index = 0;
    let n = Number(input[index++]);
    let currentNumber = 0; let sumNumbers = 0; let average = 0; 

    for (let i = 0; i < n; i++) {
        currentNumber = Number(input[index++]);
        sumNumbers += currentNumber;
    }

    average = (sumNumbers / n).toFixed(2);
    console.log(`${average}`);
}


averageNumber(["4", "3", "2", "4", "2"]);
averageNumber(["2", "6", "4"]);
averageNumber(["3", "82", "43", "22"]);
averageNumber(["4", "95", "23", "76", "23"]);

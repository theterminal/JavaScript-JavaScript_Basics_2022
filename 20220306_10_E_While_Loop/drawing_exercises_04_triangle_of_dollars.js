// 20220306 - JavaScript - While Loop
// Drawing 04 - Triangle Of Dollars - judge: https://judge.softuni.org/Contests/Practice/Index/1851#3


function triangleOfDollars(input) {
    let index = 0;
    let numRows = Number(input[index++]);
    let result = "";

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < 1; j++) {
            result = result + "$ ";
        }
        console.log(result);
    }
}

triangleOfDollars(["2"]);
triangleOfDollars(["3"]);
triangleOfDollars(["4"]);
triangleOfDollars(["5"]);

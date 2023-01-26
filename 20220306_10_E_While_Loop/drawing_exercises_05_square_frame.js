// 20220307 - JavaScript - While Loop
// Drawing 05 - Square Frame - judge: https://judge.softuni.org/Contests/Practice/Index/1851#4


function squareFrame(input) {
    let index = 0;
    let num = Number(input[index++]);
    let result = ""; let counter = 0;

    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            if ((j === 0 || j === num - 1) && (i === 0 || i === num - 1)) {
                result = result + "+ ";
            } else if ((j === 0 || j === num -1) && (i != 0 || i != num -1)) {
                result = result + "| ";
            } else {
                result = result + "- ";
            }
        }
        console.log(result);
        result = "";
    }
}

squareFrame(["3"]);
squareFrame(["4"]);
squareFrame(["5"]);
squareFrame(["6"]);

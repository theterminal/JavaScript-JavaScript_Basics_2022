// 20220309 JavaScript - Nested Loops
// 01 - Number Pyramid - judge: https://judge.softuni.org/Contests/Compete/Index/2410#0


function numberPyramid(input) {
    let index = 0;
    let n = Number(input[index++]);
    let result = ""; let numPrint = 1; let isFlag = false;

    for (i = 1; i < 1000; i++) {                                         // doesn't matter what number is used for "i" as long as "i > (n + 1)"
        for (j = 1; j <= i; j++) {                                       
            result = `${result} ${numPrint}`;
            numPrint++;

            if (numPrint > n) {
                isFlag = true;
                break;
            }
        }
        console.log(result);
        result = "";
        
        if (isFlag) {
            break;
        }
    }
}

numberPyramid(["7"]);
numberPyramid(["12"]);
numberPyramid(["15"]);

// 20220317 - JavaScript - While Loop
// Drawing 06 - Rhombus of Stars - judge: https://judge.softuni.org/Contests/Practice/Index/1851#5


function rhombusOfStars(input) {
    let index = 0;
    let givenRows = Number(input[index++]);
    let result = ""; let output = ""; let startTop = givenRows; let startBottom = givenRows;

    for (let i = 1; i <= givenRows; i++) {
        for (let j = 1; j <= givenRows; j++) {
            if (j === startTop) {
                for (let k = 1; k <= i; k++) {
                    result = '* ';
                    output += `${result}`;
                }
                startTop -= 1;
            } else {
                result = " ";
                output += `${result}`;
            }
        }
        console.log(output);
        output = "";
    }
    output = "";
    for (let i = 1; i <= givenRows - 1; i++) {
        for (let j = 1; j <= givenRows - 1; j++) {
            for (let k = 1; k <= j; k++) {
                result = ` `;
                output += `${result}`
            }
            for (let k = 1; k <= startBottom - 1; k++) {
                result = `* `;
                output += `${result}`
            }
            startBottom--;
            console.log(output);
            output = "";
        }
    }
}

rhombusOfStars(["1"]);
rhombusOfStars(["2"]);
rhombusOfStars(["3"]);
rhombusOfStars(["4"]);

// 20220306 - JavaScript - While Loop
// Drawing 03 - Squares Of Stars - judge: https://judge.softuni.org/Contests/Practice/Index/1851#2


function squaresOfStars(input) {
    let index = 0;
    let num = Number(input[index++]);
    let result = ""; let counter = 0;

    for (let i = 0; i < num; i++) {
        if (counter === 0) {
            for (let j = 0; j < num; j++) {
                result = result + "* ";
                counter++;
            }
        }
        console.log(result);
    }
}

squaresOfStars(["2"]);
squaresOfStars(["3"]);
squaresOfStars(["15"]);

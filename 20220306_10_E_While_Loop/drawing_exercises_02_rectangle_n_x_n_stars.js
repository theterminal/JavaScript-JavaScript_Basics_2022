// 20220306 - JavaScript - While Loop
// Drawing 02 - Rectangle N x N Stars - judge: https://judge.softuni.org/Contests/Practice/Index/1851#1


function rectangleNXNStars(input) {
    let index = 0;
    let num = Number(input[index++]);
    let result = "";
    let counter = 0;

    for (let i = 0; i < num; i++) {
        if (counter === 0) {
            for (let j = 0; j < num; j++) {
                result = result + "*";
                counter++;
            }
        }
        console.log(result);
    }
}


rectangleNXNStars(["2"]);
rectangleNXNStars(["3"]);
rectangleNXNStars(["10"]);

// 20220308 JavaScript - Nested Loops
// 06 - Building - judge: https://judge.softuni.org/Contests/Compete/Index/2409#5


function building(input) {
    let index = 0;
    let floors = Number(input[index++]);
    let apartments = Number(input[index++]);
    let result = "";

    for (let i = floors; i >= 1; i--) {
        if (i === floors) {
            for (j = 0; j < apartments; j++) {
                result = result + "L" + i + j + " ";
            }
        } else {
            if (i % 2 === 0) {
                for (j = 0; j < apartments; j++) {
                    result = result + "O" + i + j + " ";
                }
            } else {
                for (j = 0; j < apartments; j++) {
                    result = result + "A" + i + j + " ";
                }
            }
        }

        console.log(result);
        result = "";
    }
}


building(["6", "4"]);
building(["9", "5"]);
building(["4", "4"]);

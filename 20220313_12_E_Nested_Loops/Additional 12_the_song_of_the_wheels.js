// 20220316 JavaScript - Nested Loops
// Additional 12 - The Song Of The Wheels - judge: https://judge.softuni.org/Contests/Practice/Index/1381#11


function theSongOfTheWheels(input) {
    let index = 0;
    let controlNumberM = Number(input[index++]);
    let result = ""; let output = ""; let counter = 0; let password = 0; let flag = false;

    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            if (!(a < b)) {
                continue;
            }
            for (let c = 1; c < 10; c++) {
                for (let d = 1; d < 10; d++) {
                    if (!(c > d) || (!((a * b) + (c * d) === controlNumberM))) {
                        continue;
                    }
                    counter++;
                    result = `${a}${b}${c}${d}`;
                    output += `${result} `;
                    if (counter === 4) {
                        password = result;
                        flag = true;
                    }
                }
            }
        }
    }
    console.log(output);
    if (flag) {
        console.log(`Password: ${password}`);
    } else {
        console.log(`No!`);
    }
}

theSongOfTheWheels(["11"]);
theSongOfTheWheels(["139"]);
theSongOfTheWheels(["110"]);
theSongOfTheWheels(["55"]);

// 20220306 - JavaScript - For Loops
// Additional 10 - Clock Part 2 - judge: https://judge.softuni.org/Contests/Practice/Index/1680#9


function clock2() {
    for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 60; j++) {
            for (let k = 0; k < 60; k++) {
                console.log(`${i} : ${j} : ${k}`);
            }
        }
    }
}

clock2();

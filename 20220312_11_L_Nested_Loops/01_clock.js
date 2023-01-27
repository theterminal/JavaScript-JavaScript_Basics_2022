
// 20220308 JavaScript - Nested Loops
// 01 - Clock - judge: https://judge.softuni.org/Contests/Compete/Index/2409#0


function clock() {
    for (let h = 0; h < 24; h++) {
        for (let m = 0; m < 60; m++) {
            console.log(`${h}:${m}`);
        }
    }
}

clock();

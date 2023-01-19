// 20220306 - JavaScript - For Loops
// Additional 09 - Clock - judge: https://judge.softuni.org/Contests/Practice/Index/1680#8


function clock() {
    for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 60; j++) {
            console.log(`${i} : ${j}`);
        }
    }
}

clock();

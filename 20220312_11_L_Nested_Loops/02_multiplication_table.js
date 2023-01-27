// 20220308 JavaScript - Nested Loops
// 02 - Multiplication Table - judge: https://judge.softuni.org/Contests/Compete/Index/2409#1


function multiplicationTable() {
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} * ${j} = ${i * j}`);
        }
    }
}

multiplicationTable();

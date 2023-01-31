// 20220319 JavaScript - Pre Exam
// Pre Exam 06 - Multiply Table - judge: https://judge.softuni.org/Contests/Compete/Index/3386#5


function multiplyTable(input) {
    let index = 0;
    let num = input[index++];

    for (let i = 1; i <= Number(num[2]); i++) {
        for (let j = 1; j <= Number(num[1]); j++) {
            for (let k = 1; k <= Number(num[0]); k++) {
                console.log(`${i} * ${j} * ${k} = ${i * j * k};`);
            }
        }
    }
}

multiplyTable(["324"]);
multiplyTable(["222"]);

// 20220302 - JavaScript - For Loops
// 02 - Multiplication Table - judge: https://judge.softuni.org/Contests/Compete/Index/2406#1


function multiplicationTable(number) {
    let num = Number(number);

    for (let i = 1; i <= 10; i++) {
        console.log(`${i} * ${num} = ${num * i}`);
    }
}


multiplicationTable(["5"]);

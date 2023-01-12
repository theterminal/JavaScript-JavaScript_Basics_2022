// 20220213 - JavaScript - Programming Basics - Conditional Statements
// Additional 01 - Pipes In A Pool - judge: https://judge.softuni.org/Contests/Practice/Index/1658#0


function pipesPool(input) {
    let volumePoolLiters = Number(input[0]);
    let pipe1LiterPerHour = Number(input[1]);
    let pipe2LitersPerHour = Number(input[2]);
    let hours = Number(input[3]);

    let pipe1TotalLiters = pipe1LiterPerHour * hours;
    let pipe2TotalLiters = pipe2LitersPerHour * hours;
    let totalInPool = pipe1TotalLiters + pipe2TotalLiters;

    let diff = Math.abs(volumePoolLiters - totalInPool);
    let percentFilled = (totalInPool / volumePoolLiters * 100).toFixed(2);
    let percentP1FromTotalInPool = (pipe1TotalLiters / totalInPool * 100).toFixed(2);
    let percentP2FromTotalInPool = (pipe2TotalLiters / totalInPool * 100).toFixed(2);

    if (totalInPool <= volumePoolLiters) {
        console.log(`The pool is ${percentFilled}% full. Pipe 1: ${percentP1FromTotalInPool}%. Pipe 2: ${percentP2FromTotalInPool}%.`)
    } else {
        console.log(`For ${hours.toFixed(2)} hours the pool overflows with ${diff} liters.`);
    }
}

pipesPool(["1000", "100", "120", "3"]);
pipesPool(["100", "100", "100", "2.5"]);

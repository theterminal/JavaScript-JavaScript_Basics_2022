// 20220304 - JavaScript - While Loop
// 05 - Coins - judge: https://judge.softuni.org/Contests/Compete/Index/2408#4


function coins(input) {
    let change = Number(input[0]) * 100;
    let counter = 0;

    while (change !== 0) {
        if (Math.trunc(change / 200) >= 1) {change = Math.trunc(change - 200);}
        else if (Math.trunc(change / 100) >= 1) {change = Math.trunc(change - 100);}
        else if (Math.trunc(change / 50) >= 1) {change = Math.trunc(change - 50);}
        else if (Math.trunc(change / 20) >= 1) {change = Math.trunc(change - 20);}
        else if (Math.trunc(change / 10) >= 1) {change = Math.trunc(change - 10);}
        else if (Math.trunc(change / 5) >= 1) {change = Math.trunc(change - 5);}
        else if (Math.trunc(change / 2) >= 1) {change = Math.trunc(change - 2);}
        else if (Math.trunc(change / 1) >= 1) {change = Math.trunc(change - 1);}
        counter++;
    }

    console.log(`${counter}`);
}


coins(["1.23"]);
coins(["2"]);
coins(["0.56"]);
coins(["2.73"]);

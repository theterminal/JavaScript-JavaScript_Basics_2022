// 20220228 - JavaScript - For Loops
// 02 - Numbers N...1 - judge: https://judge.softuni.org/Contests/Compete/Index/2405#1


function numbersNTo1(input) {
    let index = 0;
    let n = Number(input[index++]);

    for (let i = n; i >= 1; i--) {
        console.log(i);
    }
}

numbersNTo1(["2"]);
numbersNTo1(["3"]);
numbersNTo1(["5"]);

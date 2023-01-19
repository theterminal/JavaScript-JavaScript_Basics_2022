// 20220302 - JavaScript - For Loops
// 01 - Numbers From 1 To 1000 Ending On 7 - judge: https://judge.softuni.org/Contests/Compete/Index/2406#0


 function numbersOn7() {

    for (let i = 1; i <= 1000; i++) {
        if (i % 10 === 7) {
            console.log(i);
        }
    }
}

numbersOn7();

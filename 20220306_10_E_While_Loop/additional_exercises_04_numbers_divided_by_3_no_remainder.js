// 20220312 - JavaScript - While Loop
// Additional 04 - Numbers Divided by 3 Without Reminder - judge: https://judge.softuni.org/Contests/Practice/Index/1684#3


function numDividedBy3NoRemainder() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}

numDividedBy3NoRemainder();

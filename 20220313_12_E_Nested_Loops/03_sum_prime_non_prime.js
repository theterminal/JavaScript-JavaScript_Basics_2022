// 20220310 JavaScript - Nested Loops
// 03 - Sum Prime Non Prime - judge: https://judge.softuni.org/Contests/Compete/Index/2410#2


function sumPrimeNonPrime(input) {
    let index = 0;
    let command = "";
    let sumPrime = 0; let sumNonPrime = 0; let num = 0;

    while (true) {
        command = input[index++];
        if (command === "stop") {
            break;
        }

        num = Number(command);

        if (num < 0) {
            console.log(`Number is negative.`);
            continue;
        }

        if ((num % 2 === 0 || num % 3 === 0) && (num !== 2 && num !== 3)) {
            sumNonPrime += num;
        } else {
            sumPrime += num;
        }
    }

    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}


sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
sumPrimeNonPrime(["30", "83", "33", "-1", "20", "stop"]);
sumPrimeNonPrime(["0", "-9", "0", "stop"]);

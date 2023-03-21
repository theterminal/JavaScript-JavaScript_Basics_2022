// 20220314 JavaScript - Nested Loops
// Additional 07 - Safe Passwords Genrator - judge: https://judge.softuni.org/Contests/Practice/Index/1381#6


function safePasswordsGenerator(input) {
    let index = 0;
    let a = Number(input[index++]);
    let b = Number(input[index++]);
    let maxNumPasswords = Number(input[index++]);
    let A = 35; let B = 64; let counter = 0; let flag = false;
    let aOut = ""; let bOut = ""; let result = ""; let output = "";

    for (let x = 1; x <= a; x++) {
        for (let y = 1; y <= b; y++) {
            aOut = String.fromCharCode(A);
            bOut = String.fromCharCode(B);
            result = `${aOut}${bOut}${x}${y}${bOut}${aOut}`;
            output += `${result}|`;
            A++; B++;

            if (A === 56) {
                A = 35;
            }

            if (B === 97) {
                B = 64;
            }

            counter++;

            if (counter === maxNumPasswords) {
                flag = true;
                break;
            }
        }

        if (flag) {
            break;
        }
    }

    console.log(output);
}


safePasswordsGenerator(["2", "3", "10"]);
safePasswordsGenerator(["20", "50", "10"]);

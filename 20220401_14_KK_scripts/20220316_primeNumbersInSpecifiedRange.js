// 20220316 - JavaScript - Prime Numbers In User Specified Range


function primeNumbersInSpecifiedRange(input) {
    let index = 0;
    let startRange = input[index++];
    let endRange = input[index++];
    let counterPrime = 0; let flag = true; let result = ""; let output = ""; let counterAll = 0;

    for (let i = startRange; i <= endRange; i++) {
        flag = true;

        if (i < 2) {                                            // It takes care of negative numbers, 0 and 1, which are NOT Prime Numbers
            continue;
        }
        for (j = 2; j < i; j++) {           
            counterAll++;       
            if (i % j === 0) {                                  // The actual finding of the Prime Numbers
                flag = false;
                break;
            }
        }
        if (flag) {                                             // Collecting the result to output to user
            result = i;
            output += `${result}, `;
            counterPrime++;
            if (counterPrime % 25 === 0) {                      // Prints the numbers out in 25 coulumns
                output += `\n`;
            }
        }
    }
    let percentFromAll = (counterPrime / counterAll * 100).toFixed(2);
    console.log(`'Prime Numbers' in the Range [${startRange} : ${endRange}], are:\n ${output.slice(0, -2)}\n \n'Prime Numbers' in the Range [${startRange} : ${endRange}], are ${counterPrime} numbers from All Numbers\n'Prime Numbers' in the Range [${startRange} : ${endRange}], are ${percentFromAll}% from All Numbers`);
}

primeNumbersInSpecifiedRange([1, 49]);

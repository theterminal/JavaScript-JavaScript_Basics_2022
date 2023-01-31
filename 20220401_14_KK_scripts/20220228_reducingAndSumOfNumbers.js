// 20220228 JavaScript Code - Reducing Numbers To Their One Digit Equivalent (Sum of digits)


function sumOfNumbers(input) {
    let n = input[0];
    let sum = 0;
    let sum2 = 0;

    for (let i = 0; i < n.length; i++) {
        sum += Number(n[i]);
    }
    console.log(`The "sum 1" of all digits is:${sum}`);

    if (sum > 9) {
        sum2 = sum.toString();
        sum = 0;
        for (let i = 0; i < sum2.length; i++) {
            sum += Number(sum2[i]);
        }
    } else {
        sum2 = sum;
    }
    console.log(`The "sum 2" of all digits is:${sum}`);

    if (sum > 9) {
        sum2 = sum.toString();
        sum = 0;
        for (let i = 0; i < sum2.length; i++) {
            sum += Number(sum2[i]);
        }
    } else {
        sum2 = sum;
    }
    console.log(`The "sum 3" of all digits is:${sum}`);
    console.log();
    console.log(`--------------------------------`);
}

// sumOfNumbers(["1234"]);
// sumOfNumbers(["564891"]);
sumOfNumbers(["019730206"]);
// sumOfNumbers(["019790927"]);
// sumOfNumbers(["020140414"]);
// sumOfNumbers(["020200104"]);

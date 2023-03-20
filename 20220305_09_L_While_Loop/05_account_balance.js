// 20220303 - JavaScript - While Loop
// 05 - Account Balance - judge: https://judge.softuni.org/Contests/Compete/Index/2407#4


function accountBalance(input) {
    let index = 0; let deposit = 0; let total = 0;

    while (deposit !== "NoMoreMoney") {
        deposit = input[index++];
        
        if (deposit === "NoMoreMoney") {
            break;
        } else {
            deposit = Number(deposit);

            if (deposit < 0) {
                console.log(`Invalid operation!`)
                break;
            }

            total += deposit;
            console.log(`Increase: ${deposit.toFixed(2)}`);
        }
    }

    console.log(`Total: ${total.toFixed(2)}`);
}


accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
accountBalance(["120", "45.55", "-150"]);

// 20220303 - JavaScript - While Loop
// 03 - Vacation - judge: https://judge.softuni.org/Contests/Compete/Index/2408#2


function vacation(input) {
    let index = 0;
    let moneyVacation = Number(input[index++]);
    let moneyOnHand = Number(input[index++]);
    let action = 0; let moneyAction = 0; let spendCounter = 0; let dayCounter = 0; let isFlag = false;
    
    while (true) {
        action = input[index++];
        moneyAction = Number(input[index++]);
        dayCounter++;

        switch (action) {
            case "spend":
                spendCounter++;

                if (spendCounter === 5) {
                    console.log(`You can't save the money.`);
                    console.log(`${dayCounter}`);
                    isFlag = true;
                    break;
                }

                if (moneyAction >= moneyOnHand) {
                    moneyOnHand = 0;
                } else {
                    moneyOnHand -= moneyAction;
                };
                break;
            case "save":
                spendCounter = 0;
                moneyOnHand += moneyAction;

                if (moneyOnHand >= moneyVacation) {
                    console.log(`You saved the money for ${dayCounter} days.`);
                    isFlag = true;
                };
                break;
        }

        if (isFlag) {
            break;
        }
    }
}


vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);
vacation(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]);

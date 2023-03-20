// 20220312 - JavaScript - While Loop
// Additional 02 - Report System - judge: https://judge.softuni.org/Contests/Practice/Index/1684#1


function reportSystem(input) {
    let index = 0;
    let sumNeeded = Number(input[index++]);
    let entry = 0; let counterTransactions = 0; let moneyCash = 0; let moneyCard = 0; let moneyTotal = 0;
    let averageCashPerPerson = 0; let averageCardPerPerson = 0; counterCash = 0; counterCard = 0;

    while (true) {
        entry = input[index++];

        if (entry === "End") {
            console.log(`Failed to collect required money for charity.`);
            break;
        }

        entry = Number(entry);
        counterTransactions++;

        if (counterTransactions % 2 !== 0) {
            if (entry > 100) {
                console.log(`Error in transaction!`);
            } else {
                console.log(`Product sold!`);
                moneyCash += entry;
                counterCash++;

            }
        } else {
            if (entry < 10) {
                console.log(`Error in transaction!`);
            } else {
                console.log(`Product sold!`);
                moneyCard += entry;
                counterCard++;
            }
        }

        moneyTotal = moneyCash + moneyCard;
        
        if (moneyTotal >= sumNeeded) {
            averageCashPerPerson = (moneyCash / counterCash).toFixed(2);
            averageCardPerPerson = (moneyCard / counterCard).toFixed(2);
            console.log(`Average CS: ${averageCashPerPerson}`);
            console.log(`Average CC: ${averageCardPerPerson}`);
            break;
        }
    }
}


reportSystem(["500", "120", "8", "63", "256", "78", "317"]);
reportSystem(["600", "86", "150", "98", "227", "End"]);

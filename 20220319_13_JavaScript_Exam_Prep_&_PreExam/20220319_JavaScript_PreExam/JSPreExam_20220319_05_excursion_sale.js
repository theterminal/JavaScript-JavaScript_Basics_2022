// 20220319 JavaScript - Pre Exam
// Pre Exam 05 - Excursion Sale - judge: https://judge.softuni.org/Contests/Compete/Index/3386#4


function excursionSale(input) {
    let index = 0;
    let numSeaPacks = Number(input[index++]);
    let numMountainPacks = Number(input[index++]);
    let typeOfPack = ""; let counterSeaPacks = 0; let counterMountainPacks = 0;

    while (true) {
        typeOfPack = input[index++];

        if (typeOfPack === "Stop") {
            break;
        }

        switch(typeOfPack) {
            case "sea":
                if (numSeaPacks <= 0) {
                    break;
                }
                counterSeaPacks++;
                numSeaPacks--;
            break;
            case "mountain":
                if (numMountainPacks <= 0) {
                    break;
                }
                counterMountainPacks++;
                numMountainPacks--;
            break;
        }

        if (numSeaPacks === 0 && numMountainPacks === 0) {
            console.log(`Good job! Everything is sold.`);
            break;
        }
    }

    let moneySea = counterSeaPacks * 680;
    let moneyMountain = counterMountainPacks * 499;
    let total = moneySea + moneyMountain;

    console.log(`Profit: ${total} leva.`)
}


excursionSale(["2", "2", "sea", "mountain", "sea", "sea", "mountain"]);
excursionSale(["6", "3", "sea", "mountain", "mountain", "mountain", "sea", "Stop"])

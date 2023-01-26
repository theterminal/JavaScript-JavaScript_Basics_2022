// 20220304 - JavaScript - While Loop
// 06 - Cake - judge: https://judge.softuni.org/Contests/Compete/Index/2408#5


function cake(input) {
    let index = 0;
    let cakeSideA = Number(input[index++]);
    let cakeSideB = Number(input[index++]);
    let allPcs = cakeSideA * cakeSideB;
    let entry = 0;

    while (true) {
        entry = input[index++];

        if (entry === "STOP") {
            console.log(`${allPcs} pieces are left.`);
            break;
        } else {
            entry = Number(entry);
            allPcs -= entry;
            
            if (allPcs <= 0) {
                console.log(`No more cake left! You need ${Math.abs(allPcs)} pieces more.`);
                break;
            }
        }
    }
}

cake(["10", "10", "20", "20", "20", "20", "21"]);
cake(["10", "2", "2", "4", "6", "STOP"]);

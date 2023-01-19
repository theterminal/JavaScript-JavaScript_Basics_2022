// 20220302 - JavaScript - For Loops
// 08 - Tennis Ranklist - judge: https://judge.softuni.org/Contests/Compete/Index/2406#7


function tennisRanklist(input) {
    let index = 0;
    let numTournaments = Number(input[index++]);
    let startPoints = Number(input[index++]);
    let subPoints = 0; let counterWon = 0;
    
    for (let i = 0; i < numTournaments; i++) {
        let type = input[index++];

        switch(type) {
            case "W": subPoints += 2000 ; counterWon++; break;
            case "F": subPoints += 1200 ; break;
            case "SF": subPoints += 720 ; break;
        }
    }
    let totalPoints = startPoints + subPoints;
    let averagePoints = Math.floor(subPoints / numTournaments);
    let percentWon = (counterWon / numTournaments * 100).toFixed(2);

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(`${percentWon}%`);
}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
tennisRanklist(["4", "750", "SF", "W", "SF", "W"]);

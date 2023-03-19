// 20220302 - JavaScript - For Loops
// 08 - Tennis Rank List - judge: https://judge.softuni.org/Contests/Compete/Index/2406#7


function tennisRankList(input) {
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

tennisRankList(["5", "1400", "F", "SF", "W", "W", "SF"]);
tennisRankList(["4", "750", "SF", "W", "SF", "W"]);

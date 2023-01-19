// 20220302 - JavaScript - For Loops
// 06 - Oscars - judge: https://judge.softuni.org/Contests/Compete/Index/2406#5


function oscars(input) {
    let index = 0;
    let actorName = input[index++];
    let startPoints = Number(input[index++]);
    let numJudges = Number(input[index++]);
    let judgeName = ""; let judgePoints = 0; let subPoints = 0; let subTotalPoints = 0; let totalPoints = 0;

    for (let i = 0; i < numJudges; i++) {
        judgeName = input[index++];
        judgePoints = Number(input[index++]);
        subPoints = (Number(judgeName.length) * judgePoints) / 2;
        subTotalPoints += subPoints;
        totalPoints = startPoints + subTotalPoints;

        if (totalPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${(totalPoints).toFixed(1)}!`);
            break;
        } else if (i === numJudges - 1) {
            let diff = Math.abs(totalPoints - 1250.5);
            console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);
        }
    }
}

oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);

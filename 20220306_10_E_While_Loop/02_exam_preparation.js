// 20220303 - JavaScript - While Loop
// 02 - Exam Preparation - judge: https://judge.softuni.org/Contests/Compete/Index/2408#1


function examPreparation(input) {
    let index = 0;
    let numFails = Number(input[index++]);
    let problemName = 0; let grade = 0; let lastProblem = 0; let averageScore = 0;
    let numAllProblems = 0; let sumGrades = 0; let counterFails = 0;
    
    while (true) {
        problemName = input[index++];
        grade = Number(input[index++]);

        if (problemName === "Enough") {
            console.log(`Average score: ${averageScore}`);
            console.log(`Number of problems: ${numAllProblems}`);
            console.log(`Last problem: ${lastProblem}`);
            break;
        }

        numAllProblems++;
        lastProblem = problemName;
        sumGrades += grade;
        averageScore = (sumGrades / numAllProblems).toFixed(2);

        if (grade < 5) {
            counterFails++;
            
            if (counterFails === numFails) {
                console.log(`You need a break, ${counterFails} poor grades.`);
                break;
            }
        }
    }
}


examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);

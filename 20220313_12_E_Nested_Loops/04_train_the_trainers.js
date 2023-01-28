// 20220310 JavaScript - Nested Loops
// 04 - Train The Trainers - judge: https://judge.softuni.org/Contests/Compete/Index/2410#3


function trainTheTrainers(input) {
    let index = 0;
    let numJury = Number(input[index++]);
    let name = ""; let thisGrade = 0; let averageGrade = 0; let averageGradeTotal = 0; let totalGrades = 0; let allGrades = 0; let counter = 0;

    while (true) {
        name = input[index++];

        if (name === "Finish") {
            console.log(`Student's final assessment is ${averageGradeTotal}.`);
            break;
        }
        for (let i = 0; i < numJury; i++) {
            thisGrade = Number(input[index++]);
            totalGrades += thisGrade;
        }
        averageGrade = totalGrades / numJury;
        console.log(`${name} - ${averageGrade.toFixed(2)}.`);
        totalGrades = 0;
        counter++;
        allGrades += Number(averageGrade);
        averageGradeTotal = (allGrades / counter).toFixed(2);
    }
}

trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);
trainTheTrainers(["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"]);
trainTheTrainers(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"]);

// 20220303 - JavaScript - While Loop
// 08 - Graduation - judge: https://judge.softuni.org/Contests/Compete/Index/2407#7


function graduation(input) {
    let index = 0;
    let studentName = input[index++];
    let yearlyGrade = 0; let grade = 1; let counterFail = 0; let totalGrades = 0;

    while (grade <= 12) {
        yearlyGrade = Number(input[index++]);

        if (yearlyGrade < 4.00) {
            counterFail++;

            if (counterFail === 2) {
                console.log(`${studentName} has been excluded at ${grade} grade`)
                break;
            }
            continue;
        } else {
            totalGrades += yearlyGrade;
            counterFail = 0;
            
            if (grade === 12) {
                let averageGrade = (totalGrades / 12).toFixed(2);
                console.log(`${studentName} graduated. Average grade: ${averageGrade}`);
            }
            grade++;
        }
    }
}

graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);

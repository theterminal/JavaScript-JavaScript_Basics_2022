// 20220319 JavaScript - Pre Exam
// Pre Exam 04 - Exam - judge: https://judge.softuni.org/Contests/Compete/Index/3386#3


function exam(input) {
    let index = 0;
    let numStudents = Number(input[index++]);
    let counter500600 = 0; let counter400499 = 0; let counter300399 = 0; let counterFail = 0; let sumOfGrades = 0;

    for (i = 1; i <= numStudents; i++) {
        let studentGrade = Number(input[index++]);
        sumOfGrades += studentGrade;

        if (studentGrade >= 5.00) {
            counter500600++;
        } else if (studentGrade >= 4.00) {
            counter400499++;
        } else if (studentGrade >= 3.00) {
            counter300399++;
        } else {
            counterFail++;
        }
    }
    let percent500 = (counter500600 / numStudents * 100).toFixed(2);
    let percent400 = (counter400499 / numStudents * 100).toFixed(2);
    let percent300 = (counter300399 / numStudents * 100).toFixed(2);
    let percentFail = (counterFail / numStudents * 100).toFixed(2);
    let averageGrade = (sumOfGrades / numStudents).toFixed(2);

    console.log(`Top students: ${percent500}%`);
    console.log(`Between 4.00 and 4.99: ${percent400}%`);
    console.log(`Between 3.00 and 3.99: ${percent300}%`);
    console.log(`Fail: ${percentFail}%`);
    console.log(`Average: ${averageGrade}`);
}

exam(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);
exam(["6", "2", "3", "4", "5", "6", "2.2"]);

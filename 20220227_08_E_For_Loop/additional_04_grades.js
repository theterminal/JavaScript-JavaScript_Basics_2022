// 20220305 - JavaScript - For Loops
// Additional 04 - Grades - judge: https://judge.softuni.org/Contests/Practice/Index/1680#3


function grades(input) {
    let index = 0;
    let numStudents = Number(input[index++]);
    let grade = 0; let counter5 = 0; let counter4 = 0; let counter3 = 0; let counter2 = 0; let counterAll = 0; let sumGrades = 0;
    
    for (let i = 0; i < numStudents; i++) {
        grade = Number(input[index++]);
        sumGrades += grade;

        if (grade >= 5) {
            counter5++;
        } else if (grade >= 4) {
            counter4++;
        } else if (grade >= 3) {
            counter3++;
        } else {
            counter2++;
        }
        counterAll++;
    }

    let percent5 = (counter5 / counterAll * 100).toFixed(2);
    let percent4 = (counter4 / counterAll * 100).toFixed(2);
    let percent3 = (counter3 / counterAll * 100).toFixed(2);
    let percent2 = (counter2 / counterAll * 100).toFixed(2);
    let average = (sumGrades / counterAll).toFixed(2);

    console.log(`Top students: ${percent5}%`);
    console.log(`Between 4.00 and 4.99: ${percent4}%`);
    console.log(`Between 3.00 and 3.99: ${percent3}%`);
    console.log(`Fail: ${percent2}%`);
    console.log(`Average: ${average}`);
}


grades(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);
grades(["6", "2", "3", "4", "5", "6", "2.2"]);

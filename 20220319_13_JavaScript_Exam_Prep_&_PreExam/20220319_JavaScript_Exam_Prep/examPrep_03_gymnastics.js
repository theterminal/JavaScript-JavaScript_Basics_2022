// 20220319 JavaScript - Exam Prep
// 03 - Gymnastics - judege: https://judge.softuni.bg/Contests/Practice/Index/1538#4


function gymnastics(input) {
    let index = 0;
    let country = input[index++];
    let type = input[index++];
    let performance = 0; let difficulty = 0;

    switch (country) {
        case "Russia":
            if (type === "ribbon") {
                difficulty = 9.100;
                performance = 9.400;
            } else if (type === "hoop") {
                difficulty = 9.300;
                performance = 9.800;
            } else if (type === "rope") {
                difficulty = 9.600;
                performance = 9.000;
            }; break;
        case "Bulgaria":
            if (type === "ribbon") {
                difficulty = 9.600;
                performance = 9.400;
            } else if (type === "hoop") {
                difficulty = 9.550;
                performance = 9.750;
            } else if (type === "rope") {
                difficulty = 9.500;
                performance = 9.400;
            }; break;
        case "Italy":
            if (type === "ribbon") {
                difficulty = 9.200;
                performance = 9.500;
            } else if (type === "hoop") {
                difficulty = 9.450;
                performance = 9.350;
            } else if (type === "rope") {
                difficulty = 9.700;
                performance = 9.150;
            }; break;
    }

    let totalScore = difficulty + performance;
    let percentNeededTo100 = 100 - (totalScore / 20 * 100);

    console.log(`The team of ${country} get ${totalScore.toFixed(3)} on ${type}.`);
    console.log(`${percentNeededTo100.toFixed(2)}%`);
}


gymnastics(["Bulgaria", "ribbon"]);
gymnastics(["Russia", "rope"]);

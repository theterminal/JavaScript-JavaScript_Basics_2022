// 20220319 JavaScript - Pre Exam
// Pre Exam 01 - Cat Diet - judge: https://judge.softuni.org/Contests/Compete/Index/3386#0


function catDiet(input) {
    let index = 0;
    let percentFats = Number(input[index++]);
    let percentProteins = Number(input[index++]);
    let percentCarbohydrates = Number(input[index++]);
    let totalCal = Number(input[index++]);
    let percentWaterContent = Number(input[index++]);

    let gFats = totalCal * percentFats * 0.01 / 9;
    let gProteins = totalCal * percentProteins * 0.01 / 4;
    let gCarbohydrates = totalCal * percentCarbohydrates * 0.01 / 4;

    let gTotalFood = gFats + gProteins + gCarbohydrates;
    let calPerOneGram = totalCal / gTotalFood;
    let calPerOneGramDryContent = calPerOneGram - (calPerOneGram * percentWaterContent / 100);

    console.log(calPerOneGramDryContent.toFixed(4));
}

catDiet(["60", "25", "15", "2500", "60"]);
catDiet(["40", "40", "20", "3000", "40"]);
catDiet(["20", "60", "20", "1800", "50"]);

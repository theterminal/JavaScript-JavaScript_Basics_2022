// 20220209 - JavaScript - Programming Basics - First Steps in Coding
// Additional 05 - Training Lab - judge: https://judge.softuni.org/Contests/Practice/Index/1642#4


function trainingLab(input) {
    let lengthCm = Number(input[0]) * 100;
    let widthCm = Number(input[1]) * 100;

    let numSeatsPerTotalWidth = Math.floor((widthCm - 100) / 70);
    let numSeatsPerTotalLength = Math.floor(lengthCm / 120);
    let totalSeats = (numSeatsPerTotalWidth * numSeatsPerTotalLength) - 3;

    console.log(Math.floor(totalSeats));
}

trainingLab(["15", "8.9"]);
trainingLab(["8.4", "5.2"]);

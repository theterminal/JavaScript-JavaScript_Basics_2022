// 20220206 - JavaScript - Programming Basics - First Steps in Coding
// 09 - Fish Tank - judge: https://judge.softuni.org/Contests/Compete/Index/2400#8


function fishTank(input) {
    let lengthCm = Number(input[0]);
    let widthCm = Number(input[1]);
    let heightCm = Number(input[2]);
    let percent = Number(input[3]) * 0.01;

    let fullVolume = lengthCm * widthCm * heightCm * 0.001;
    let realVolume = fullVolume * (1 - percent);

    console.log(realVolume);
}

fishTank(["85", "75", "47", "17"]);
fishTank(["105", "77", "89", "18.5"]);

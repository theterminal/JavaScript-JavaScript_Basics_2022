// 20220206 - JavaScript - Programming Basics - First Steps in Coding
// 08 - Basketball Equipment - judge: https://judge.softuni.org/Contests/Compete/Index/2400#7


function basketBallEquipment(input) {
    let fee = Number(input[0]);
    let shoes = fee * 0.60;
    let clothes = shoes * 0.80;
    let ball = clothes * 0.25;
    let accessories = ball * 0.20;
    
    let totalEquipment = shoes + clothes + ball + accessories;
    let total = totalEquipment + fee;

    console.log(total);
}

basketBallEquipment(["365"]);
basketBallEquipment(["550"]);
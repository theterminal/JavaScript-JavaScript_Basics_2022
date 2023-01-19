// 20220306 - JavaScript - For Loops
// Additional 06 - Bills - judge: https://judge.softuni.org/Contests/Practice/Index/1680#5


function bills(input) {
    let index = 0;
    let months = Number(input[index++]);
    let water = 20;
    let internet = 15;
    let electric = 0; let other = 0; let totalElectric = 0; let totalOther = 0;

    for (let i = 0; i < months; i++) {
        electric = Number(input[index++]);
        totalElectric += electric;
        other = (20 + 15 + electric) * 1.2;
        totalOther += other;
    }

    let totalWater = months * water;
    let totalInternet = months * internet;
    let total = totalWater + totalInternet + totalElectric + totalOther;
    let avarageAll = total / months;
    
    console.log(`Electricity: ${totalElectric.toFixed(2)} lv`);
    console.log(`Water: ${totalWater.toFixed(2)} lv`);
    console.log(`Internet: ${totalInternet.toFixed(2)} lv`);
    console.log(`Other: ${totalOther.toFixed(2)} lv`);
    console.log(`Average: ${avarageAll.toFixed(2)} lv`);
}

bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"]);
bills(["8", "123.54", "231.54", "140.23", "100", "122.4", "430", "178.52", "64.2"]);

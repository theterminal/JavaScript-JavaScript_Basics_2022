// 20220302 - JavaScript - For Loops
// 03 - Histogram - judge: https://judge.softuni.org/Contests/Compete/Index/2406#2


function histogram(input) {
    let index = 0;
    let n = Number(input[index++]);
    let num = 0; let count800 = 0; let count600 = 0; let count400 = 0; let count200 = 0; let count199 = 0;

    for (let i = 0; i < n; i++) {
        num = Number(input[index++]);
        
        if (num >= 800) {
            count800++;
        } else if (num >= 600) {
            count600++;
        } else if (num >= 400) {
            count400++;
        } else if (num >= 200) {
            count200++;
        } else if (num < 200) {
            count199++;
        }
    }
    let total = count199 + count200 + count400 + count600 + count800
    let percent199 = (count199 / total * 100).toFixed(2);
    let percent200 = (count200 / total * 100).toFixed(2);
    let percent400 = (count400 / total * 100).toFixed(2);
    let percent600 = (count600 / total * 100).toFixed(2);
    let percent800 = (count800 / total * 100).toFixed(2);

    console.log(`${percent199}%`);
    console.log(`${percent200}%`);
    console.log(`${percent400}%`);
    console.log(`${percent600}%`);
    console.log(`${percent800}%`);
}

histogram(["3", "1", "2", "999"]);
histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);
histogram(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"]);
histogram(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"]);

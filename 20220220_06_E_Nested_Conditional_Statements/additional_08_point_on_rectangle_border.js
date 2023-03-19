// 20220222 JavaScript - Nested Conditional Statements
// Additional 08 - Point On Rectangle Border - judge: https://judge.softuni.org/Contests/Practice/Index/1663#7


function pointOnRectangleBorder(input) {
    let index = 0;
    let x1 = Number(input[index++]);
    let y1 = Number(input[index++]);
    let x2 = Number(input[index++]);
    let y2 = Number(input[index++]);
    let x = Number(input[index++]);
    let y = Number(input[index++]);

    if (((y === y1 || y === y2) && x >= x1 && x <= x2) || ((x === x1 || x === x2) && y >= y1 && y <= y2)) {
        console.log("Border");
    } else {
        console.log("Inside / Outside");
    }
}

pointOnRectangleBorder(["2", "-3", "12", "3", "8", "-1"]);
pointOnRectangleBorder(["2", "-3", "12", "3", "12", "-1"]);

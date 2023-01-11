// 20220209 - JavaScript - Programming Basics - First Steps in Coding
// Additional 07 - House Painting - judge: https://judge.softuni.org/Contests/Practice/Index/1642#6


function housePainting(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let wallsFront = ((x ** 2) * 2) - (1.2 * 2);
    let wallsSide = ((x * y) * 2) - ((1.5 ** 2) * 2);
    let wallsAll = wallsFront + wallsSide

    let roof = (x * y) * 2 + (x * h);

    let paintWalls = (wallsAll / 3.4).toFixed(2);
    let paintRoof = (roof / 4.3).toFixed(2);

    console.log(paintWalls);
    console.log(paintRoof);
}

housePainting(["6", "10", "5.2"]);

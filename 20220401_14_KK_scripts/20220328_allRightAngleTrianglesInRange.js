// 20220328 JavaScript - All Possible Rightangle Triangles In A Specified Range Of Side Length
// The code calculates how many right angle triangles exist in the specified range of side length.
// Side 'a' is 'AB', 'b' is 'BC', 'c' is 'AC' (hypotenuse); for the sine, sin(a) means sine from the angle across the 'a' side!

// The following specific syntax is if you do not have to use a string array method!
function existanceOfRightangleTriangle(input) {
    let index = 0;
    let startRange = input[index++];
    let endRange = input[index++];
    let counterRightangleTriangle = 0; let counterCombinations = 0;
    let sinA = 0; let sinB = 0; let cosA = 0; let cosB = 0; let tanA = 0; let tanB = 0; let cotA = 0; let cotB = 0;

    for (let a = startRange; a <= endRange; a++) {
        for (let b = a; b <= endRange; b++) {
            for (let c = a; c <= endRange; c++) {

                counterCombinations++;
                if ((a ** 2) + (b ** 2) === (c ** 2)) {
                    sinA = (a / c).toFixed(5);
                    sinB = (b / c).toFixed(5);
                    cosA = sinB;
                    cosB = sinA;
                    tanA = (a / b).toFixed(5);
                    tanB = (b / a).toFixed(5);
                    cotA = tanB;
                    cotB = tanA;
                    console.log(`\nRight angel triangle - sides (a) & (b) and hypotenuse (c): (a, b, c) = (${a}, ${b}, ${c})`);
                    console.log(`sin(a) = ${sinA}; cos(a) = ${cosA}; tan(a) = ${tanA}; cot(a) = ${cotA}`);
                    console.log(`sin(b) = ${sinB}; cos(b) = ${cosB}; tan(b) = ${tanB}; cot(b) = ${cotB}`);
                    counterRightangleTriangle++;
                }
            }
        }
    }
    console.log(`\nTotal number of traingles in range of side lengths [${startRange} - ${endRange}] : ${counterRightangleTriangle}`);
    console.log(`Total number of combinations checked for existance of a triangle: ${counterCombinations}`);
}

existanceOfRightangleTriangle([1, 100]);


// -------------------------------------------- older version ---------------------------------------------------


// // 20220328 JavaScript - All Possible Rightangle Triangles In A Specified Range Of Side Length
// // The code calculates how many right angle triangles exist in the specified range of side length. 

// function existanceOfRightangleTriangle(input) {
//     let index = 0;
//     let startRange = Number(input[index++]);
//     let endRange = Number(input[index++]);
//     let counterRightangleTriangle = 0; let counterCombinations = 0;

//     for (let i = startRange; i <= endRange; i++) {
//         for (let j = i; j <= endRange; j++) {
//             for (let k = i; k <= endRange; k++) {
//                 counterCombinations++;
//                 if ((i ** 2) + (j ** 2) === (k ** 2)) {
//                     console.log(`Right angel triangle - side (a), side (b), hypotensiosis (c): (a, b, c) = (${i}, ${j}, ${k})`);
//                     counterRightangleTriangle++;
//                 }
//             }
//         }
//     }
//     console.log(`\nTotal number of traingles in range of side lengths [${startRange} - ${endRange}] : ${counterRightangleTriangle}`);
//     console.log(`Total number of combinations checked for existance of a triangle: ${counterCombinations}`);
// }
// existanceOfRightangleTriangle(["1", "10"]);

// 20220328 JavaScript Code - Existence Of Right Angle Triangle
// The code checks weather a right angle triangle with the specified sides exists or not.


function existenceOfRightAngelTriangle(input) {
    let index = 0;
    let a = input[index++];
    let b = input[index++];
    let c = input[index++];
    
    if ((a ** 2) + (b ** 2) === (c ** 2)) {
        console.log(`Yes. A right angle triangle with sides (a = ${a}, b = ${b}, c = ${c}), exists.`);
    } else {
        console.log(`NO!. A right angle triangle with sides (a = ${a}, b = ${b}, c = ${c}), does NOT exist.`);
    }
}


existenceOfRightAngelTriangle([9, 15, 17]);

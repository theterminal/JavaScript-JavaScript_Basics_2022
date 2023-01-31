// 20220328 JavaScript Code - Existance Of Rightangle Triangle
// The code checks weather a right angle traiangle with the specified sides exists or not.


function existanceOfRightangelTriangle(input) {
    let index = 0;
    let a = input[index++];
    let b = input[index++];
    let c = input[index++];
    
    if ((a ** 2) + (b ** 2) === (c ** 2)) {
        console.log(`Yes. A right angle triangel with sides (a = ${a}, b = ${b}, c = ${c}), exists.`);
    } else {
        console.log(`NO!. A right angle triangel with sides (a = ${a}, b = ${b}, c = ${c}), does NOT exist.`);
    }
}

existanceOfRightangelTriangle([9, 15, 17]);

// 20220328 - Area Of A Square Inside Of Right Angle Triangle
// Square inscribed in a right angle triangle.
// The 2 sides ('a' and 'b') of the triangle are given numbers and they are NOT the hypotenuse.
// Calculate the area of the triangle.


function areaOfSquareInsideRightAngelTriangle(input) {
    let index = 0;
    let a = Number(input[index++]);
    let b = Number(input[index++]);
    
    let sideOfSquare = ((a * b) / (a + b)).toFixed(9);
    let triangleArea = (a * b) / 2;
    let squareArea = sideOfSquare * sideOfSquare;
    let percentSquareFromTriangleArea = squareArea / triangleArea * 100;

    console.log(`Side length of an inscribed square = ${Number(sideOfSquare).toFixed(2)}`);
    console.log(`Area of Square = ${squareArea.toFixed(2)}`);
    console.log(`Area of Triangle = ${triangleArea.toFixed(2)}`);
    console.log(`Area of Square as percent from Triangle = ${percentSquareFromTriangleArea.toFixed(2)}%`);
}

areaOfSquareInsideRightAngelTriangle(["4", "5"]);

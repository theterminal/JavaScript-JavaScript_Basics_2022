// 20220222 JavaScript - Nested Conditional Statements
// Additional 10 - Multiply By 2 - judge: https://judge.softuni.org/Contests/Practice/Index/1663#9


function multiplyBy2(input) {
    let index = 0;
    while (true) {
        num = Number(input[index++]);
        if (num < 0) {
            console.log(`Negative number!`);
            break;
        }
        console.log(`Result: ${(num * 2).toFixed(2)}`);
    }
}

multiplyBy2(["12", "43.2144", "12.3", "543.23", "-20"]);
multiplyBy2(["23.43", "12.3245", "0", "65.23432", "23", "65", "-12"]);
multiplyBy2(["-123"]);
 

// ----------------------------------------------- done with "for" loop ---------------------------------------


// function multiplyBy2(input) {
//     let index = 0;
//     let num = 0;
    
//     for (let i = 0; i < 1000000000; i++) {
//         num = Number(input[index++]);
//         if (num < 0) {
//             console.log(`Negative number!`);
//             break;
//         }
//         console.log(`Result: ${(num * 2).toFixed(2)}`);
//     }
// }
// multiplyBy2(["12", "43.2144", "12.3", "543.23", "-20"]);
// multiplyBy2(["23.43", "12.3245", "0", "65.23432", "23", "65", "-12"]);
// multiplyBy2(["-123"]);

// This problem must be solved with "while Loop"!

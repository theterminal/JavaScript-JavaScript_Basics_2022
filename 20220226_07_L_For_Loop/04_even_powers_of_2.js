// 20220228 - JavaScript - For Loops
// 04 - Even Powers Of 2 - judge: https://judge.softuni.org/Contests/Compete/Index/2405#3


function evenPowersOf2(input) {
    let n = Number(input[0]);
    let x = 0;

    for (let i = 0; i <= n; i += 2) {
        x = 2 ** i;
        console.log(x);
    }
}


evenPowersOf2(["3"]);
evenPowersOf2(["4"]);
evenPowersOf2(["5"]);
evenPowersOf2(["6"]);
evenPowersOf2(["7"]);


// --------------------------------------- another way (2) ---------------------------------------------


// 20220228 JavaScript Code - Even Powers Of 2 - judge url: https://judge.softuni.org/Contests/Compete/Index/2405#3

// function evenPowersOf2(input) {
//     let n = Number(input[0]);
//     let x = 1;

//     for (let i = 0; i <= n; i += 2) {
//         console.log(x);
//         x *= 4;
//     }
// }
// evenPowersOf2(["16"]);
// evenPowersOf2(["4"]);
// evenPowersOf2(["5"]);
// evenPowersOf2(["6"]);
// evenPowersOf2(["7"]);


// --------------------------------------- another way (3) ---------------------------------------------


// 20220228 JavaScript Code - Even Powers Of 2 - judge url: https://judge.softuni.org/Contests/Compete/Index/2405#3

// function evenPowersOf2(input) {
//     let n = Number(input[0]);
//     let x = 1;

//     for (let i = 0; i <= n; i += 2) {
//         console.log(x);
//         x = x * 2 * 2;
//     }
// }
// evenPowersOf2(["16"]);
// evenPowersOf2(["4"]);
// evenPowersOf2(["5"]);
// evenPowersOf2(["6"]);
// evenPowersOf2(["7"]);

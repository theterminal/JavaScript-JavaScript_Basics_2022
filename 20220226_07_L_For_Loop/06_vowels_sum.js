// 20220228 - JavaScript - For Loops
// 06 - Vowles Sum - judge: https://judge.softuni.org/Contests/Compete/Index/2405#5


function vowelsSum(input) {
    let index = 0;
    let text = input[index++];
    let sum = 0;

    for (let i = 0; i < text.length; i++) {
        switch (text.charAt(i)) {
            case "a": sum += 1; break;
            case "e": sum += 2; break;
            case "i": sum += 3; break;
            case "o": sum += 4; break;
            case "u": sum += 5; break;
        }
    }
    console.log(sum);
}

vowelsSum(["hello"]);
vowelsSum(["hi"]);
vowelsSum(["bamboo"]);
vowelsSum(["beer"]);


// -------------------------------- another way -------------------------------------------------------------


// function vowelsSum(input) {
//     let text = input[0];
//     let sum = 0;

//     for (let i = 0; i < text.length; i++) {
//         switch (text[i]) {
//             case "a": sum += 1; break;
//             case "e": sum += 2; break;
//             case "i": sum += 3; break;
//             case "o": sum += 4; break;
//             case "u": sum += 5; break;
//         }
//     }
//     console.log(sum);
// }
// vowelsSum(["hello"]);
// vowelsSum(["hi"]);
// vowelsSum(["bamboo"]);
// vowelsSum(["beer"]);

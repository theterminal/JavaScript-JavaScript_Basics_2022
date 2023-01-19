// 20220228 - JavaScript - For Loops
// 08 - Numbers Divisible By 9 - judge: https://judge.softuni.org/Contests/Compete/Index/2405#7 


function sumDivisibleBy9(input) {
    let index = 0;
    let n1 = Number(input[index++]);
    let n2 = Number(input[index++]);
    let sum = 0;
    let result = "";

    for (let i = n1; i < n2; i++) {
        if (i % 9 === 0) {
            sum += i;
            result += `${i}\n`;
        }
    }

    console.log(`The sum: ${sum}`);
    console.log(result);
}

sumDivisibleBy9((["100", "200"]));

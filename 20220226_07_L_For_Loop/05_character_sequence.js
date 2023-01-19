// 20220228 - JavaScript - For Loops
// 05 - Character Sequence - judge: https://judge.softuni.org/Contests/Compete/Index/2405#4


function characterSequence(input) {
    let index = 0;
    let word = input[index++];
    let length = word.length;

    for (let i = 0; i < length; i++) {
        console.log(`${word[i]}`);
    }
}

characterSequence((["softuni"]));
characterSequence(["ice cream"]);

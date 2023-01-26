// 20220312 - JavaScript - While Loop
// Additional 03 - Stream Of Letters - judge: https://judge.softuni.org/Contests/Practice/Index/1684#2


function streamOfLetters(input) {
    let index = 0;
    let letter = ""; let counterC = 0; let counterO = 0; let counterN = 0; let word = ""; let result = "";

    while (true) {
        letter = input[index++];

        if (letter === "End") {
            break;
        }

        if (letter === "c" && counterC === 0) {
            counterC = 1;
        }
        else if (letter === "o" && counterO === 0) {
            counterO = 1;
        }
        else if (letter === "n" && counterN === 0) {
            counterN = 1;
        }
        else if ((letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) || (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122)) {
                word += letter;
        }
        
        if (counterC + counterO + counterN === 3) {
            word += " ";
            counterC = 0; counterO = 0; counterN = 0;
            result = word;
        }
    }
    console.log(`${result}`);
}

streamOfLetters(["H", "n", "e", "l", "l", "o", "o", "c", "t", "c", "h", "o", "e", "r", "e", "n", "e", "End"]);
streamOfLetters(["%", "!", "c", "^", "B", "`", "o", "%", "o", "o", "M", ")", "{", "n", "\n", "A", "D", "End"]);
streamOfLetters(["o", "S", "%", "o", "l", "^", "v", "e", "c", "n", "&", "m", "e", "c", "o", "n", "End"]);

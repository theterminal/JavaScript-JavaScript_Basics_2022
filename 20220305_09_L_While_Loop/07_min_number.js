// 20220303 - JavaScript - While Loop
// 07 - Min Number - judge: https://judge.softuni.org/Contests/Compete/Index/2407#6


function minNumber(input) {
    let index = 0;
    let entry = 0;
    let minNumberEntered = Number.MAX_SAFE_INTEGER;
    
    while (entry !== "Stop") {
        entry = input[index++];
        
        if (entry === "Stop") {
            break;
        } else {
            if (Number(entry) < minNumberEntered) {
                minNumberEntered = entry;
            }
        }
    }

    console.log(`${minNumberEntered}`);
}


minNumber(["100", "99", "80", "70", "Stop"]);
minNumber(["-10", "20", "-30", "Stop"]);
minNumber(["45", "-20", "7", "99", "Stop"]);
minNumber(["999", "Stop"]);
minNumber(["-1", "-2", "Stop"]);

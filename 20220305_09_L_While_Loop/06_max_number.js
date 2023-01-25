// 20220303 - JavaScript - While Loop
// 06 - Max Number - judge: https://judge.softuni.org/Contests/Compete/Index/2407#5


function maxNumber(input) {
    let index = 0;
    let entry = 0;
    let maxNumberEntered = Number.MIN_SAFE_INTEGER;
    
    while (entry !== "Stop") {
        entry = input[index++];
        
        if (entry === "Stop") {
            break;
        } else {
            if (Number(entry) > maxNumberEntered) {
                maxNumberEntered = entry;
            }
        }
    }
    console.log(`${maxNumberEntered}`);
}

maxNumber(["100", "99", "80", "70", "Stop"]);
maxNumber(["-10", "20", "-30", "Stop"]);
maxNumber(["45", "-20", "7", "99", "Stop"]);
maxNumber(["999", "Stop"]);
maxNumber(["-1", "-2", "Stop"]);

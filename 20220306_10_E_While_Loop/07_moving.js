// 20220304 - JavaScript - While Loop
// 07 - Moving - judge: https://judge.softuni.org/Contests/Compete/Index/2408#6


function moving(input) {
    let index = 0;
    let w = Number(input[index++]);
    let l = Number(input[index++]);
    let h = Number(input[index++]);
    let space = w * l * h;
    let spaceUsed = 0;

    while (true) {
        spaceUsed = input[index++];

        if (spaceUsed === "Done") {
            console.log(`${space} Cubic meters left.`);
            break;
        } else {
            spaceUsed = Number(spaceUsed);
            space -= spaceUsed;
            
            if (space <= 0) {
                console.log(`No more free space! You need ${Math.abs(space)} Cubic meters more.`);
                break;
            }
        }
    }
}

moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
moving(["10", "1", "2", "4", "6", "Done"]);

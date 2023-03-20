// 20220308 JavaScript - Nested Loops
// 05 - Traveling - judge: https://judge.softuni.org/Contests/Compete/Index/2409#4


function traveling(input) {
    let index = 0;
    let budget = 0;
    let destination = 0; let sum = 0; let total = 0;

    while (true) {
        destination = input[index++];
        
        if (destination === "End") {
            break;
        }

        budget = Number(input[index++]);

        while (true) {
            sum = Number(input[index++]);
            total += sum;

            if (total >= budget) {
                console.log(`Going to ${destination}!`);
                total = 0;
                break;
            }
        }
    }
}


traveling(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"]);
traveling(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"]);

// 20220304 - JavaScript - While Loop
// 04 - Walking - judge: https://judge.softuni.org/Contests/Compete/Index/2408#3


function walking(input) {
    let index = 0;
    let dailyGoal = 10000;
    let currentSteps = 0; let totalSteps = 0;

    while (true) {
        currentSteps = input[index++];

        if (currentSteps === "Going home") {
            currentSteps = Number(input[index++]);
            totalSteps += currentSteps;
            break;
        } else {
            currentSteps = Number(currentSteps);
            totalSteps += currentSteps;
            
            if (totalSteps >= dailyGoal) {
                break;
            }
        }
    }

    if (totalSteps >= dailyGoal) {
        console.log(`Goal reached! Good job!`);
        console.log(`${totalSteps - dailyGoal} steps over the goal!`);
    } else {
        console.log(`${dailyGoal - totalSteps} more steps to reach goal.`);
    }
}

walking(["1000", "1500", "2000", "6500"])
walking(["1500", "300", "2500", "3000", "Going home", "200"])
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"])
walking(["125", "250", "4000", "30", "2678", "4682"])

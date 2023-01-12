// 20220213 - JavaScript - Programming Basics - Conditional Statements
// 06 - World Swimming Record - judge: https://judge.softuni.org/Contests/Compete/Index/2402#5


function worldSwimmingRecord(input) {
    let oldRecordInSeconds = Number(input[0]);
    let distanceToSwimtInMeters = Number(input[1]);
    let timeForOneMeterInSeconds = Number(input[2]);

    let newTimeInSeconds = distanceToSwimtInMeters * timeForOneMeterInSeconds;
    let latencyInSeconds = parseInt(distanceToSwimtInMeters / 15) * 12.5;         // or Math.floor(distanceToSwit / 15) * 12.5
    let newResultInSeconds = newTimeInSeconds + latencyInSeconds;

    let diff = Math.abs(newResultInSeconds - oldRecordInSeconds);
    
    if (newResultInSeconds < oldRecordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${newResultInSeconds.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }
}

worldSwimmingRecord(["10464", "1500", "20"]);
worldSwimmingRecord(["55555.67", "3017", "5.03"]);

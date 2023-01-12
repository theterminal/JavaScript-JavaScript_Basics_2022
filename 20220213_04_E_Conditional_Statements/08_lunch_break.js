// 20220213 - JavaScript - Programming Basics - Conditional Statements
// 08 - Lunch Break - judge: https://judge.softuni.org/Contests/Compete/Index/2402#7


function lunchBreak(input) {
    let movieName = input[0];
    let timeMovieMinutes = Number(input[1]);
    let timeBreakMinutes = Number(input[2]);

    let timeToEatMinutes = timeBreakMinutes / 8;
    let timeRelaxMinutes = timeBreakMinutes / 4;
    let timeToWatchMinutes = (timeBreakMinutes - timeToEatMinutes - timeRelaxMinutes);

    let diff = Math.abs(timeToWatchMinutes - timeMovieMinutes);

    if (timeToWatchMinutes >= timeMovieMinutes) {
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(diff)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(diff)} more minutes.`);
    }
}

lunchBreak(["Game of Thrones", "60", "96"]);
lunchBreak(["Teen Wolf", "48", "60"]);

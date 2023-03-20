// 20220303 - JavaScript - While Loop
// 01 - Read Text - judge: https://judge.softuni.org/Contests/Compete/Index/2407#0


function readText(input) {
    let index = 0;
    
    while (true) {
        let str = input[index++];

        if (str === "Stop") {
            break;
        }

        console.log(str);
    }
}


readText(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"]);
readText(["Sofia", "Berlin", "Moscow", "Athens", "Madrid", "London", "Paris", "Stop", "AfterStop"]);

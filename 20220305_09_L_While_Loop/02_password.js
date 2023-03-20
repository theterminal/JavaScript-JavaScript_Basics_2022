// 20220303 - JavaScript - While Loop
// 02 - Password - judge: https://judge.softuni.org/Contests/Compete/Index/2407#1


function password(input) {
    let index = 0;
    let user = input[index++];
    let password = input[index++];
    let entry = input[index++];

    while (entry !== password && index < Number(input.length)) {  // This way you cannot make an infinite loop
        entry = input[index++];
    }

    if (entry === password) {
        console.log(`Welcome ${user}!`);
    } else {
        console.log(`You didn't guess rigth!`)
    } 
}


password(["Nakov", "1234", "Pass", "1324", "1234"]);

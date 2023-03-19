// 20220302 - JavaScript - For Loops
// 05 - Salary - judge: https://judge.softuni.org/Contests/Compete/Index/2406#4


function salary(input) {
    let index = 0;
    let numBrowsersOpened = Number(input[index++]);
    let salary = Number(input[index++]);
    let nameSite = ""; let hasSalary = true;

    for (let i = 0; i < numBrowsersOpened; i++) {
        nameSite = input[index++];

        switch(nameSite) {
            case "Facebook": salary -= 150; break;
            case "Instagram": salary -= 100; break;
            case "Reddit": salary -= 50; break;
        }

        if (salary <= 0) {
            hasSalary = false;
            console.log(`You have lost your salary.`);
            break;
        }
    }

    if (hasSalary) {
        console.log(Math.trunc(salary));
    } 
}


salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);
salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);

// 20220206 - JavaScript - Programming Basics - First Steps in Coding
// 04 - Vacation Books List - judge: https://judge.softuni.org/Contests/Compete/Index/2400#3


function vacationBookList(input) {
    let numPagesInBook = Number(input[0]);
    let numPagesPerHour = Number(input[1]);
    let numDaysToReadBook = Number(input[2]);
    let result =  numPagesInBook / numPagesPerHour / numDaysToReadBook;

    console.log(result);
}

vacationBookList(["212", "20", "2"]);
vacationBookList(["432", "15", "4"]);

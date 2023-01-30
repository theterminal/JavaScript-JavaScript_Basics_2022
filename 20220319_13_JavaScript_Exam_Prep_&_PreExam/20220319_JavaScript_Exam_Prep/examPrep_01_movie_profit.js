// 20220319 JavaScript - Exam Prep
// 01 - Movie Profit - judge: https://judge.softuni.bg/Contests/Practice/Index/1699#1


function movieRevenue(input) {
    let index = 0;
    let movieName = input[index++];
    let numDays = Number(input[index++]);
    let numTickets = Number(input[index++]);
    let ticketPrice = Number(input[index++]);
    let percentForCinema = Number(input[index++]);
    let revenue = 0;

    revenue = numDays * numTickets * ticketPrice * (1 - (percentForCinema / 100));

    console.log(`The profit from the movie ${movieName} is ${revenue.toFixed(2)} lv.`);
}

movieRevenue(["The Programmer", "20", "500", "7.50", "7"]);
movieRevenue(["Python Basics", "40", "34785", "10.45", "14"]);
movieRevenue(["The Jungle", "22", "20500", "9.37", "30"]);

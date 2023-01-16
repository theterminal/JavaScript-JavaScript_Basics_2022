// 20220222 JavaScript - Nested Conditional Statements
// Additional 01 - Match Tickets - judge: https://judge.softuni.org/Contests/Practice/Index/1663#0


function matchTickets(input) {
    let index = 0;
    let budget = Number(input[index++]);
    let type = input[index++];
    let numPeople = Number(input[index++]);
    let transportPercentFromBudget = 0; let transport = 0; let ticketCost = 0;

    if (numPeople > 49) {
        transportPercentFromBudget = 0.25;
    } else if (numPeople > 24) {
        transportPercentFromBudget = 0.40;
    } else if (numPeople > 9) {
        transportPercentFromBudget = 0.50;
    } else if (numPeople > 4) {
        transportPercentFromBudget = 0.60;
    } else if (numPeople > 0) {
        transportPercentFromBudget = 0.75;
    }

    transport = budget * transportPercentFromBudget;
    let moneyForTickets = budget - transport;

    switch (type) {
        case "VIP": ticketCost = 499.99; break;
        case "Normal": ticketCost = 249.99; break;
    }

    let totalTicketCost = numPeople * ticketCost;
    let diff = (Math.abs(moneyForTickets - totalTicketCost)).toFixed(2);

    if (moneyForTickets >= totalTicketCost) {
        console.log(`Yes! You have ${diff} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff} leva.`);
    }
}

matchTickets(["1000", "Normal", "1"]);
matchTickets(["30000", "VIP", "49"]);

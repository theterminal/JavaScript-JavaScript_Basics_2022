// 20220220 JavaScript - Nested Conditional Statements
// 01 - Cinema - judge: https://judge.softuni.org/Contests/Compete/Index/2404#0


function cinema(input) {
    let type = input[0];
    let raws = Number(input[1]);
    let columns = Number(input[2]);
    let price = 0;

    let allTickets = raws * columns;

    switch (type) {
        case "Premiere": price = 12.00; break;
        case "Normal": price = 7.50; break;
        case "Discount": price = 5.00; break;
    }
    let total = (allTickets * price).toFixed(2);
    console.log(`${total} leva`);
}

cinema(["Premiere", "10", "12"]);
cinema(["Normal", "21", "13"]);
cinema(["Discount", "12", "30"]);

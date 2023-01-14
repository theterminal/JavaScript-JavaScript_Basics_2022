// 20220219 - JavaScript - Nested Conditional Statements
// 12 - Trade Commissions - judge: https://judge.softuni.org/Contests/Compete/Index/2403#11


function tradeCommission(input) {
    let town = input[0];
    let sales = Number(input[1]);
    let percent = 0; let commission = 0;

    if (sales > 10000) {
        switch (town) {
            case "Sofia": percent = 0.12; break;
            case "Varna": percent = 0.13; break;
            case "Plovdiv": percent = 0.145; break;
            default: percent = "error"; break;
        }
    } else if (sales > 1000) {
        switch (town) {
            case "Sofia": percent = 0.08; break;
            case "Varna": percent = 0.10; break;
            case "Plovdiv": percent = 0.12; break;
            default: percent = "error"; break;
        }
    } else if (sales > 500) {
        switch (town) {
            case "Sofia": percent = 0.07; break;
            case "Varna": percent = 0.075; break;
            case "Plovdiv": percent = 0.08; break;
            default: percent = "error"; break;
        }
    } else if (sales >= 0) {
        switch (town) {
            case "Sofia": percent = 0.05; break;
            case "Varna": percent = 0.045; break;
            case "Plovdiv": percent = 0.055; break;
            default: percent = "error"; break;
        }
    } else {
        percent = "error";
    }

    if (percent == "error") {
        console.log("error");
    } else {
        commission = (sales * percent).toFixed(2);
        console.log(commission);
    }
}

tradeCommission(["Sofia", "1500"]);
tradeCommission(["Plovdiv", "499.99"]);
tradeCommission(["Varna", "3874.50"]);
tradeCommission(["Kaspichan", "-50"]);

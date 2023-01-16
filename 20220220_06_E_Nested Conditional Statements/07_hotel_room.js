// 20220220 JavaScript - Nested Conditional Statements
// 07 - Hotel Room - judge: https://judge.softuni.org/Contests/Compete/Index/2404#6


function hotelRoom(input) {
    let month = input[0];
    let numberNights = Number(input[1]);
    let studio = 0; let apartment = 0;

    switch(month) {
        case "May":
        case "October":
            studio = 50.00;
            apartment = 65.00; break;
        case "June":
        case "September":
            studio = 75.20;
            apartment = 68.70; break;
        case "July":
        case "August":
            studio = 76.00;
            apartment = 77.00; break;
    }
    if (month === "May" || month === "October") {
        if (numberNights > 14) {
            studio *= 0.70;
        } else if (numberNights > 7) {
            studio *= 0.95;
        }
    } else if ((month === "June" || month === "September") && numberNights > 14) {
        studio *= 0.80;
    }
    if (numberNights > 14) {
        apartment *= 0.90;
    }
    apartment *= numberNights;
    studio *= numberNights; 
    console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`)
}

hotelRoom(["May", "15"]);
hotelRoom(["June", "14"]);
hotelRoom(["August","20"]);

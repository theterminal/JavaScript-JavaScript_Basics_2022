// 20220311 JavaScript - Nested Loops
// 06 - Cinema Tickets - judge: https://judge.softuni.org/Contests/Compete/Index/2410#5


function cinemaTickets(input) {
    let index = 0;
    let movieName = ""; let allSeatsInCinema = 0; let ticketType = ""; let thisMovieSold = 0; let availableSeats = 0;
    let counterStudents = 0; let counterStandards = 0; let counterKids = 0; let totalSold = 0; 
    let percentStudentTickets = 0; let percentStandardTickets = 0; let percentKidTickets = 0;
    
    while (true) {
        movieName = input[index++];

        if (movieName === "Finish") {
            console.log(`Total tickets: ${totalSold}`);

            if (totalSold === 0) {
                console.log(`0.00% student tickets.`);
                console.log(`0.00% standard tickets.`);
                console.log(`0.00% kids tickets.`);
            } else {
                percentStudentTickets = (counterStudents / totalSold * 100).toFixed(2);
                percentStandardTickets = (counterStandards / totalSold * 100).toFixed(2);
                percentKidTickets = (counterKids / totalSold * 100).toFixed(2);
                console.log(`${percentStudentTickets}% student tickets.`);
                console.log(`${percentStandardTickets}% standard tickets.`);
                console.log(`${percentKidTickets}% kids tickets.`);
            }
            break;
        } else {
            allSeatsInCinema = Number(input[index++]);
            availableSeats = allSeatsInCinema;

            while (true) {
                ticketType = input[index++];

                if (ticketType === "End") {
                    console.log(`${movieName} - ${(thisMovieSold / allSeatsInCinema * 100).toFixed(2)}% full.`);
                    break;
                } else {
                    switch (ticketType) {
                        case "student": counterStudents++; availableSeats--; break;
                        case "standard": counterStandards++; availableSeats--; break;
                        case "kid": counterKids++; availableSeats--; break;
                    }
                    thisMovieSold++;

                    if (availableSeats === 0) {
                        console.log(`${movieName} - ${(thisMovieSold / allSeatsInCinema * 100).toFixed(2)}% full.`);
                        break;
                    }
                }
            }
            totalSold += thisMovieSold;
            thisMovieSold = 0;
        }
    }
}

cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);
cinemaTickets(["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End", "The Green Mile", "17", "student", "standard", "standard", "student", "standard", "student", "End", "Amadeus", "3", "standard", "standard", "standard", "Finish"]);

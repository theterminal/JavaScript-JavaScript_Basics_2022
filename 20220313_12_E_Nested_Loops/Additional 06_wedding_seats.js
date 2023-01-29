// 20220313 JavaScript - Nested Loops
// Additional 06 - Wedding Seats - judge: https://judge.softuni.org/Contests/Practice/Index/1381#5


function weddingSeats(input) {
    let index = 0;
    let lastSector = input[index++];
    let numRowsSectorA = Number(input[index++]);
    let numSeatsOnOddRow = Number(input[index++]);
    let firstSector = "A"; let firstSeat = "a"; let startSeat = firstSeat.charCodeAt(0);
    let startSector = firstSector.charCodeAt(0); let endSector = lastSector.charCodeAt(0); let counterTickets = 0;

    for (let sectors = startSector; sectors <= endSector; sectors++) {
        for (let row = 1; row <= numRowsSectorA; row++) {
            if (row % 2 !== 0) {
                for (let seats = startSeat; seats < (startSeat + numSeatsOnOddRow); seats++) {
                    console.log(`${String.fromCharCode(sectors)}${row}${String.fromCharCode(seats)}`);
                    counterTickets++;
                }
            } else {
                for (let seats = startSeat; seats < (startSeat + numSeatsOnOddRow + 2); seats++) {
                    console.log(`${String.fromCharCode(sectors)}${row}${String.fromCharCode(seats)}`);
                    counterTickets++;
                }
            }
        }
        numRowsSectorA++;
    }
    console.log(counterTickets);
}

weddingSeats(["B", "3", "2"]);
weddingSeats(["C", "4", "2"]);

// 20220303 - JavaScript - While Loop
// 01 - Old Books - judge: https://judge.softuni.org/Contests/Compete/Index/2408#0


function oldBooks(input) {
    let index = 0;
    let searchedBook = input[index++];
    let currentBook = 0; let bookCounter = 0;

    while (currentBook !== "No More Books") {
        currentBook = input[index++];

        if (currentBook === searchedBook) {
            console.log(`You checked ${bookCounter} books and found it.`);
            break;
        }
        if (currentBook === "No More Books") {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${bookCounter} books.`);
            break;
        }
        bookCounter++;
    }
}

oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
oldBooks(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"]);
oldBooks(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]);

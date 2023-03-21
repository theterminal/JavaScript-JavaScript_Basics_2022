// 20220319 JavaScript - Exam Prep
// 04 - Movie Ratings - judge: https://judge.softuni.bg/Contests/Practice/Index/1596#4


function movieRatings(input) {
    let index = 0;
    let numMovies = Number(input[index++]);
    let movieName = ""; let movieRating = 0;
    let movieNameMaxRating = ""; let maxRating = 0; let movieNameMinRating = ""; let minRating = 0; let sumRatings = 0;

    for (let i = 0; i < numMovies; i++) {
        movieName = input[index++];
        movieRating = Number(input[index++]);
        sumRatings += movieRating;

        if (i === 0) {
            movieNameMaxRating = movieName;
            maxRating = movieRating;
            movieNameMinRating = movieName;
            minRating = movieRating;
        }

        if (movieRating > maxRating) {
            maxRating = movieRating;
            movieNameMaxRating = movieName;
        }

        if (movieRating < minRating) {
            minRating = movieRating;
            movieNameMinRating = movieName;
        }
    }

    let averageRating = (sumRatings / numMovies).toFixed(1);
    console.log(`${movieNameMaxRating} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${movieNameMinRating} is with lowest rating: ${minRating.toFixed(1)}`);
    console.log(`Average rating: ${averageRating}`);
}


movieRatings(["5", "A Star is Born", "7.8", "Creed 2", "7.3", "Mary Poppins", "7.2", "Vice", "7.2", "Captain Marvel", "7.1"]);
movieRatings(["3", "Interstellar", "8.5", "Dangal", "8.3", "Green Book", "8.2"]);

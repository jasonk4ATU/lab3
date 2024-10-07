import React from 'react'; // Import React library
import Movies from './movies'; // Import the Movies component from the 'movies' file

const Read = () => { // Define the Read functional component
    // Define an array of movie objects with details
    const movieData = [
        {
            Title: "Avengers: Infinity War", // Movie title
            Year: "2018", // Release year
            imdbID: "tt4154756", // IMDb ID
            Type: "movie", // Type of media
            Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg" // Poster image URL
        },
        {
            Title: "Captain America: Civil War",
            Year: "2016",
            imdbID: "tt3498820",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        },
        {
            Title: "World War Z",
            Year: "2013",
            imdbID: "tt0816711",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        }
    ];

    return (
        <div> {/* Main container for the component */}
            <h1>Movie List</h1> {/* Heading for the movie list */}
            <Movies movies={movieData} /> {/* Pass movieData to the Movies component as props */}
        </div>
    );
};

export default Read; // Export the Read component for use in other files

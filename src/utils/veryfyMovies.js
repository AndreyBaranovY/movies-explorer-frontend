export const verifyMovies = (movies, savedMovies) => {
    savedMovies.forEach((savedMovie) => {
      const indexSavedMovie = movies.findIndex((movie) => movie.id === savedMovie.movieId);
      movies[indexSavedMovie].isSaved = true;
    });
    return movies;
  };

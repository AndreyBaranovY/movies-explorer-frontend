export const durationFilter = (movies, checked) =>
  movies.filter((movie) => {
    const maxDuration = checked ? 40 : 10000;
    return movie.duration <= maxDuration;
  });
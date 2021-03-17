export const searchFilter = (movies, value) =>
  movies.filter((movie) => {
    const nameLowerCase = movie.nameRU ? movie.nameRU.toLowerCase() : '';
    const valueLowerCase = value.toLowerCase();
    return nameLowerCase.includes(valueLowerCase);
  });
  
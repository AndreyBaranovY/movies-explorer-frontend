import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import { searchFilter } from '../../utils/searchFilter';
import { durationFilter } from '../../utils/durationFilter';
import getMoviesCount from '../../utils/getMoviesCount';

export default function SavedMovies(props) {
  const { savedMovies, onBookmarkClick } = props;

  const [searchValue, setSearchValue] = useState('');
  const [isCheckboxChecked, setCheckboxChecked] = useState(false);
  const [moviesCount, setMoviesCount] = useState(getMoviesCount());
  const [currentMovies, setCurrentMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]); 
  
  function handleSearchSubmit(value) {
    setSearchValue(value);
    if(!savedMovies.length) {
      setSearchValue(value);
    }
  }
  
  function handleCheckboxChange() {
    setCheckboxChecked(!isCheckboxChecked);
  }

  useEffect(() => {
    const moviesFound = searchFilter(savedMovies, searchValue);
    const moviesFiltered = durationFilter(moviesFound, isCheckboxChecked);
    setFilteredMovies(moviesFiltered);
    setCurrentMovies(moviesFiltered.slice(0, moviesCount));
  }, [savedMovies, isCheckboxChecked, searchValue, moviesCount]);

  useEffect(() => {
    function updateCardsList() {
      setTimeout(() => {
        setMoviesCount(getMoviesCount());
        setCurrentMovies(filteredMovies.slice(0, getMoviesCount()));
      }, 700);
    }

    window.addEventListener('resize', updateCardsList);
    return () => window.removeEventListener('resize', updateCardsList);
  }, [filteredMovies]);


  React.useEffect(() => {
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
    setCurrentMovies(savedMovies);
  }, [savedMovies]); 
// const savedMoviestoRender = JSON.stringify(filteredMovies, null, 4);
// const savedMoviesinSaved = JSON.stringify(savedMovies, null, 4);
//  console.log(`Component SavedMovies  ${savedMoviesinSaved}`);
//  console.log(`Component movies  ${currentMovies}`);


  return (
    <section >
      <SearchForm
         onSearch={handleSearchSubmit}
         isDisabledSearch={false}
         isCheckboxChecked={isCheckboxChecked}
         onCheckboxChange={handleCheckboxChange}/>
      <MoviesCardList
         movies={currentMovies}
         messageNoMovies='Пока сюда ничего не добавлено'
         isVisiblePreloader={false}
         isVisibleButtonMore={false}
         onBookmarkClick ={onBookmarkClick }
         isSavedMoviesPage={true}
        />      
    </section >
  )
}

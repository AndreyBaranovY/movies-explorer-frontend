import React, { useEffect, useState } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Button from '../ui/Button/Button';
import './Movies.css';
import { searchFilter } from '../../utils/searchFilter';
import { durationFilter } from '../../utils/durationFilter';
import getMoviesCount from '../../utils/getMoviesCount';
import getAddMoviesCount from '../../utils/getAddMoviesCount';

export default function Movies(props) {
  const {
    movies,
    onMoviesSearchSubmit,
    isDisabledSearch,
    isVisiblePreloader,
    messageNoMovies,
    onBookmarkClick,
  } = props;
  const [searchValue, setSearchValue] = useState('');
  const [isCheckboxChecked, setCheckboxChecked] = useState(false);
  const [moviesCount, setMoviesCount] = useState(getMoviesCount());
  const [currentMovies, setCurrentMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]); 
  const isVisibleButtonMore= filteredMovies.length > currentMovies.length; 

  function handleSearchSubmit(value) {
    setSearchValue(value);
    if(!movies.length) {
      onMoviesSearchSubmit();
    }
  }
  
  function handleCheckboxChange() {
    setCheckboxChecked(!isCheckboxChecked);
  }

  function handleClickMoreButton() {
    setMoviesCount(moviesCount + getAddMoviesCount());
  }

  useEffect(() => {
    const moviesFound = searchFilter(movies, searchValue);
    const moviesFiltered = durationFilter(moviesFound, isCheckboxChecked);
    setFilteredMovies(moviesFiltered);
    setCurrentMovies(moviesFiltered.slice(0, moviesCount));
  }, [movies, isCheckboxChecked, searchValue, moviesCount]);

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
       
  return (
    <div >      
      <SearchForm
        onSearch={handleSearchSubmit}
        isDisabledSearch={isDisabledSearch}
        isCheckboxChecked={isCheckboxChecked}
        onCheckboxChange={handleCheckboxChange}/>  
      
       <MoviesCardList
         movies={currentMovies}
         messageNoMovies={messageNoMovies}
         isVisiblePreloader={isVisiblePreloader}
         isVisibleButtonMore={filteredMovies.length > currentMovies.length}
         onBookmarkClick={onBookmarkClick}/>    
     { isVisibleButtonMore &&
       <Button buttonClassName='movies__show-more' onClick={handleClickMoreButton}>Ещё </Button>   
     }
    </div >
  )
}

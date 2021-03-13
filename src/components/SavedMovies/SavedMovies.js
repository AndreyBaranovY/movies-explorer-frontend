import React, { useContext, useEffect, useState } from 'react';
 import { MoviesContext } from '../../contexts/MoviesContext';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import { searchFilter } from '../../utils/searchFilter';
import { durationFilter } from '../../utils/durationFilter';




export default function SavedMovies(props) {
  const {  selectedMovies, onBookmarkClick } = props;
  
  const [searchValue, setSearchValue] = useState('');
  const [isCheckboxChecked, setCheckboxChecked] = useState(false);
  const [movies, setMovies] = useState([]);
                    //  const  {savedMovies } = useContext(MoviesContext);
  function handleSearchSubmit(value) {
    setSearchValue(value);
  }
  
  function handleCheckboxChange() {
    setCheckboxChecked(!isCheckboxChecked);
  }
  
  useEffect(() => {
    const moviesFound = searchFilter(selectedMovies, searchValue);
    const moviesFiltered = durationFilter(moviesFound, isCheckboxChecked);
    setMovies(moviesFiltered);
  }, [selectedMovies, searchValue, isCheckboxChecked]);
  
  return (
    <section >
      <SearchForm
         onSearch={handleSearchSubmit}
         isDisabledSearch={false}
         isCheckboxChecked={isCheckboxChecked}
         onCheckboxChange={handleCheckboxChange}
      />
      <MoviesCardList
         movies={movies}
         messageNoMovies='Пока сюда ничего не добавлено'
         isVisiblePreloader={false}
         isVisibleButtonMore={false}
         onBookmarkClick ={onBookmarkClick }
         isSavedPage={true}      
      />      
    </section >
  )
}

import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Button from '../ui/Button/Button';
import { CARDS_PER_ROW } from '../../utils/constants';
import movies from '../../data/movies/movies';
import mov from '../../data/movies/movie';
import './Movies.css';


export default function Movies(props) {
  const {
    CheckText,
    searchMovies,
    onSearch,
    isLoggedIn,
    isLoading,
    onCardClick,
    onCardSave,
    onShowMore,
    isSearchOk,
    currentRow,
    isError } = props;

  const moviesToRender = movies.slice(0, (currentRow + 1) * CARDS_PER_ROW);
  const savedMovies = mov;
    return (
      <div >      
        <SearchForm CheckText={CheckText} searchMovies={searchMovies} />
         {/* <Preloader isLoadind={isLoading}  /> */}
         <MoviesCardList
         moviesToRender={moviesToRender}
         isLoggedIn={isLoggedIn}
         savedMovies={savedMovies}
         onCardClick={onCardClick}  
         onCardSave ={onCardSave}       
         />  
         <Button buttonClassName='movies__show-more' onClick={onShowMore}> 
           Ещё
         </Button>      
      </div >
    )
  }
import React, { useContext, useState } from 'react';
import './MoviesCard.css';
import { MoviesContext } from '../../contexts/MoviesContext';

export default function MoviesCard(props) {
  const { movie, isSavedMoviesPage, onBookmarkClick } = props;
  const  {savedMovies } = useContext(MoviesContext);
  const { duration, trailerLink, nameRU } = movie;

  const hours = Math.floor(duration/60);
  const minutes = duration - Math.floor(hours * 60);

 function imageHelper(movie) {
    if (movie.image && movie.image.url) return `https://api.nomoreparties.co${movie.image.url}`;
    if (movie.image) return movie.image;
  };
 
  function handleBookmarkClick() {
    onBookmarkClick(movie); 
  }
 
  return (
    <div className ="card">   
      <div className={isSavedMoviesPage ? "card__holder_saved" : "card__holder"}>  
      <a  className="card__click" href={trailerLink} target="_blank" rel='noopener noreferrer'>
        <img className="card__image" src={imageHelper(movie)}  alt={nameRU} />
      </a>

      {isSavedMoviesPage ? (
           <button className="card__button_delete" type="button"     
           onClick={handleBookmarkClick}></button>
          ) : (
           <button className={movie.isSaved ? "card__button_saved" : "card__button"}  type="button"  
           onClick={handleBookmarkClick}></button>
      )}
      
      </div>
      <div className ="card__description">
        <p  className ="card__name">{nameRU}</p>
        <p className ="card__duration">{hours}ч {minutes}м</p>
      </div>  
   </div>
  )
}

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import moviePath from '../../data/33_slova.png';
import './MoviesCard.css';

export default function MoviesCard(props) {
  const { onCardSave, isLoggedIn, onCardClick, movie } = props;

  const { country, director, duration, year, description, image, trailerLink, thumbnail, owner, movieId, nameRU, nameEN } = movie;
  
  const hours = Math.floor(duration/60);
  const minutes = duration - Math.floor(hours * 60);

  const [isSelected, setIsSelected] = useState(false);
  const { pathname } = useLocation();

  function handleSelect() { 
    setIsSelected(!isSelected);
  }

  function handleDelete() { 
    console.log("Удаление ...");
  }

  function handleImgClick() {
    console.log("Клик на Изображении");
  }
 
if(pathname === '/saved-movies') {
  return (
    <div className ="card">   
      <div className="card__holder_saved">
        <img className="card__image" src={moviePath}  alt={nameRU}  onClick = {handleImgClick}/>
        <button  className ="card__button_delete"  type="button"
       
         onClick={handleDelete}></button>
      </div>
      <div className ="card__description">
        <p  className ="card__name">{nameRU}</p>
        <p className ="card__duration">{hours}ч {minutes}м</p>
      </div>  
   </div>
  )
 } else {
  return (
    <div className ="card">   
      <div className="card__holder">
        <img className="card__image" src={moviePath}  alt={nameRU}  onClick = {handleImgClick}/>
        <button  className ={isSelected ? "card__button_saved" : "card__button"}   type="button"
       
         onClick={handleSelect}></button>
      </div>
      <div className ="card__description">
        <p  className ="card__name">{nameRU}</p>
        <p className ="card__duration">{hours}ч {minutes}м</p>
      </div>  
   </div>
  )
 }
}
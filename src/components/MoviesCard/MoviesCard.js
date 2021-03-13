import React from 'react';
import './MoviesCard.css';

export default function MoviesCard(props) {
  const {  movie, isSavedPage, onBookmarkClick } = props;
  const { duration, image, trailerLink, nameRU } = movie;
  const hours = Math.floor(duration/60);
  const minutes = duration - Math.floor(hours * 60);

  const imageURL = `https://api.nomoreparties.co${image ? image.url : ''}`;

function handleBookmarkClick() {
  console.log(`movie.isSaved: ${movie.isSaved}`);
  onBookmarkClick(movie); 
}
 
  return (
    <div className ="card">   
      <div className="card__holder">
      <a  className="card__click" href={trailerLink} target="_blank" rel='noopener noreferrer'>
        <img className="card__image" src={imageURL}  alt={nameRU} />
      </a>


      {isSavedPage ? (
           <button className="card__button_delete" type="button"     
           onClick={handleBookmarkClick}></button>
          ) : (
           <button className={movie.isSaved ? "card__button_saved" : "card__button"}  type="button"  
           onClick={handleBookmarkClick}></button>
      )}

          
            
        {/* <button  className ="card__button_delete"  type="button"      
         onClick={handleBookmarkClick}></button> */}
      
      </div>
      <div className ="card__description">
        <p  className ="card__name">{nameRU}</p>
        <p className ="card__duration">{hours}ч {minutes}м</p>
      </div>  
   </div>
  )
 

      
}
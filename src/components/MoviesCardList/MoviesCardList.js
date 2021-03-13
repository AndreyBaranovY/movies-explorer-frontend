import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

export default function MoviesCardList(props) {
  const {
  movies,
  messageNoMovies,
  isVisiblePreloader,
  onBookmarkClick,
  isSavedPage
  } = props;
  

  return (
    <section className='cards-section'>
      { !movies.length && <p className="movies__not-found">{messageNoMovies}</p> }
        {!!movies.length &&  movies.map((movie,index) => (
          <MoviesCard
            movie={movie}  
            key={index}
            onBookmarkClick={onBookmarkClick}
            isSavedPage={isSavedPage}
             />
        ))}
      <Preloader isVisiblePreloader={isVisiblePreloader} /> 
    </section>
  )
}

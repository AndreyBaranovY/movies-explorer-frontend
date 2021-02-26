import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
// import moviesToRender from '../../data/movies/movies';

export default function MoviesCardList(props) {
  const {
    isLoggedIn,
    onCardClick,
    moviesToRender,
    savedMovies,
    onCardSave,
    onCardDelete,
  } = props;

  return (
    <section className='cards-section'>
        {moviesToRender.map((movie) => (
          <MoviesCard
            movie={movie}  
            key={movie._id}
            onCardClick={onCardClick}
            onCardSave={onCardSave}
            onCardDelete={onCardDelete}
             />
        ))}
    </section>
  )
}

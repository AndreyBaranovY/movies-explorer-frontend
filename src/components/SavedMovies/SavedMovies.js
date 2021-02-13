import SavedMoviesHeader from '../SavedMoviesHeader/SavedMoviesHeader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';

import './SavedMovies.css';


export default function SavedMovies(props) {
    
  
    return (
      <section >
         <SavedMoviesHeader />
         <MoviesCardList />  
         <MoviesCard />
             SavedMovies are Here!
      </section >
    )
  }
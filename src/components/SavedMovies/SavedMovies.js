import SearchForm from '../SearchForm/SearchForm';
import SavedMoviesHeader from '../SavedMoviesHeader/SavedMoviesHeader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import movies from '../../data/movies/movies';
import mov from '../../data/movies/movie';
import './SavedMovies.css';


export default function SavedMovies(props) {
  const moviesToRender = mov;
  const savedMovies = movies;
    return (
      <section >
        <SearchForm />
        <MoviesCardList
         moviesToRender={moviesToRender}
         savedMovies={savedMovies}       
         />    
         <SavedMoviesHeader />   
      </section >
    )
  }
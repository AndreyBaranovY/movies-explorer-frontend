import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';

import './Movies.css';


export default function Movies(props) {
    
  
    return (
      <div >
        <SearchForm />
         <Preloader />
         <MoviesCardList />  
         <MoviesCard />
             MOOVIES are Here!
      </div >
    )
  }
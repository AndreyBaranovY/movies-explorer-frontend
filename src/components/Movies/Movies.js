// import React, { useContext } from 'react';
// import { MoviesContext } from '../../contexts/MoviesContext';
// import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';
// import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import Button from '../ui/Button/Button';
// import { CARDS_PER_ROW } from '../../utils/constants';
// import './Movies.css';

// export default function Movies(props) {
//   const {
//     onSearch,
//     isLoading,
//     isError,
//     onShowMore,
//     currentRow,
//     onBookmarkClick,
//    } = props;
    
//     const { movies, savedMovies } = useContext(MoviesContext);
//     const [shortFilm, setShortFilm] = React.useState(false);


//     const moviesToRender = movies.slice(0, (currentRow + 1) * CARDS_PER_ROW);

//     function onFilterShort(filterOn) {
//       setShortFilm(filterOn);
//     }

//     return (
//       <div >      
//         <SearchForm
//           onSearch={onSearch}
//           isLoading={isLoading} 
//           onFilterShort={onFilterShort}
//         />
//         {
//         isLoading && (<Preloader />)
//         }
//          <MoviesCardList
//          moviesToRender={moviesToRender}
//         onBookmarkClick={onBookmarkClick}
//          />  

//          <Button buttonClassName='movies__show-more' onClick={onShowMore}> 
//            Ещё
//          </Button>   
//          {
//         isError && (<div className='movies__moviess-container'>
//           <div className='movies__not-found'>
//             <h3 className='movies__not-found-heading'>Во время запроса произошла ошибка.</h3>
//             <p className='movies__not-found-text'>
//               Возможно, проблема с соединением или сервер недоступен.
//               Подождите немного и попробуйте ещё раз</p>
//           </div>
//         </div>)
//       }
//       </div >
//     )
//   }

import React, { useContext, useEffect, useState } from 'react';
import { MoviesContext } from '../../contexts/MoviesContext';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Button from '../ui/Button/Button';
import './Movies.css';
import { searchFilter } from '../../utils/searchFilter';
import { durationFilter } from '../../utils/durationFilter';
import getMoviesCount from '../../utils/getMoviesCount';
import getAddMoviesCount from '../../utils/getAddMoviesCount';

export default function Movies(props) {
  const {
    onMoviesSearchSubmit,
    isDisabledSearch,
    isVisiblePreloader,
    messageNoMovies,
    onBookmarkClick,
   } = props;

   const  { movies } = useContext(MoviesContext); 
   const [searchValue, setSearchValue] = useState('');
   const [isCheckboxChecked, setCheckboxChecked] = useState(false);
   const [moviesCount, setMoviesCount] = useState(getMoviesCount());
   const [currentMovies, setCurrentMovies] = useState([]);
   const [filteredMovies, setFilteredMovies] = useState([]);

   const isVisibleButtonMore= filteredMovies.length > currentMovies.length;

   function handleSearchSubmit(value) {
    setSearchValue(value);
    if(!movies.length) {
      onMoviesSearchSubmit();
    }
  }
  function handleCheckboxChange() {
    setCheckboxChecked(!isCheckboxChecked);
  }

  function handleClickMoreButton() {
    setMoviesCount(moviesCount + getAddMoviesCount());
  }

  useEffect(() => {
    const moviesFound = searchFilter(movies, searchValue);
    const moviesFiltered = durationFilter(moviesFound, isCheckboxChecked);
    setFilteredMovies(moviesFiltered);
    setCurrentMovies(moviesFiltered.slice(0, moviesCount));
  }, [movies, isCheckboxChecked, searchValue, moviesCount]);

  useEffect(() => {
    function updateCardsList() {
      setTimeout(() => {
        setMoviesCount(getMoviesCount());
        setCurrentMovies(filteredMovies.slice(0, getMoviesCount()));
      }, 700);
    }
    window.addEventListener('resize', updateCardsList);
    return () => window.removeEventListener('resize', updateCardsList);
  }, [filteredMovies]);

    return (
      <div >      
        <SearchForm
        onSearch={handleSearchSubmit}
        isDisabledSearch={isDisabledSearch}
        isCheckboxChecked={isCheckboxChecked}
        onCheckboxChange={handleCheckboxChange}
        />  
         <MoviesCardList
         movies={currentMovies}
         messageNoMovies={messageNoMovies}
         isVisiblePreloader={isVisiblePreloader}
         isVisibleButtonMore={filteredMovies.length > currentMovies.length}
         onBookmarkClick={onBookmarkClick}
         />  
         { isVisibleButtonMore &&
         <Button buttonClassName='movies__show-more' onClick={handleClickMoreButton}>Ещё </Button>   
         }
      </div >
    )
}

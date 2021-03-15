import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import PageNotFound from '../PageNotFound/PageNotFound';
import Register from '../Register/Register';
import Signin from '../Signin/Signin';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { MoviesContext } from '../../contexts/MoviesContext';
import * as moviesApi from '../../utils/MoviesApi';
import * as mainApi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRout';


function App() {
  const escape = require('escape-html');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isTooltipOpen, setTooltipOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [authError, setAuthError] = useState('');
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const [isVisiblePreloader, setVisiblePreloader] = useState(false);
  const [messageNoMovies, setMessageNoMovies] = useState('');
  const [isDisabledSearch, setDisabledSearch] = useState(false);
  const [disabled, setDisabled] = useState(false);
 

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi.getUserInfo(jwt)
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser(res.data);
        })
        .catch(() => {
          setLoggedIn(false);
        })
    }
  }, []);

//загрузка фильмов в localStorage
  useEffect(() => {
    const localStorageMovies = JSON.parse(localStorage.getItem('movies'));
    if (localStorageMovies && localStorageMovies.length) {
      setMovies(localStorageMovies);
    }
  }, []);

//загрузка сохранённых фильмов 
  function getSavedMovies() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      mainApi.getSavedMovies()
        .then((savedMovies) => {
          setSavedMovies(savedMovies.movies);
        })
        .catch(err => console.log(`Ошибка при загрузке сохранённых фильмов: ${err.message}`));
    }   
  };
  
  // сверка 
  function saveAllMovies(movies) {
    const verifiedMovies = movies.map((movie) => {
      movie.isSaved = savedMovies.some((savedMovie) => savedMovie.movieId === movie.id);
      return movie;
    });
    setMovies(verifiedMovies);
    localStorage.setItem('movies', JSON.stringify(verifiedMovies));
    console.log(movies);
  }

useEffect(() => {
  const jwt = localStorage.getItem("jwt");
  if (jwt) {
    mainApi.getSavedMovies()
      .then((movies) => {
        setSavedMovies(movies.movies);
      })
      .catch(() => {
        setSavedMovies([]);
      })
  }
}, []);

 useEffect(() => {
   const localMovies = JSON.parse(localStorage.getItem('movies')) || [];
   const verifiedMovies = localMovies.map((localMovie) => {
     localMovie.isSaved = savedMovies.some((savedMovie) => savedMovie.movieId === localMovie.id);
     return localMovie;
   });
   setMovies(verifiedMovies);
   localStorage.setItem('movies', JSON.stringify(verifiedMovies));
   if(!!verifiedMovies.length) {
     setMessageNoMovies('Ничего не найдено');
   }
 }, [currentUser, savedMovies]); 


// сохранение - удаление фильма
function onBookmarkClick(movie) {
  console.log(`Хозяин фильма: ${!movie.owner}`); 
  console.log(`Фильм isSaved?: ${!movie.isSaved}`); 
  if(!movie.isSaved && !movie.owner) {
    mainApi.saveMovie(movie)
      .then((savedMovie) => {
        setSavedMovies([savedMovie, ...savedMovies]);
        console.log(`Фильм сохранён ОК: `); 
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    const movieId = movie.id || movie.movieId;
    const deletedMovie = savedMovies.find((item) => item.movieId === movieId);
    mainApi.deleteMovie(deletedMovie._id)
      .then(() => {
        const newSavedMovies = savedMovies.filter((item) => item.movieId !== movieId);
        setSavedMovies(newSavedMovies);
        console.log(`Фильм удалён ОК`); 
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

//поиск фильма по строке ввода
function handleMoviesSearch() {
  setDisabledSearch(true);
  setMessageNoMovies('');
  setVisiblePreloader(true);
  moviesApi.getMovies()
    .then((movies) => {
      saveAllMovies(movies);
      setMessageNoMovies('Фильмы не найдены');
    })
    .catch(() => {
      setMessageNoMovies('Во время запроса произошла ошибка. Возможно, проблема с соединением или ' +
        'сервер недоступен. Подождите немного и попробуйте ещё раз');
    })
    .finally(() => {
      setVisiblePreloader(false);
      setDisabledSearch(false);
    })
}

//___________________________ start of the popup section _________________________________________
  //закрыть попапы
  function handlePopupsClose() {
    setRegisterOpen(false);
    setLoginOpen(false);
    setProfileOpen(false);
    setTooltipOpen(false);
    setAuthError('');
  };
  //выход из попапов через Esc
  useEffect(() => {
    function closeOnEsc(evt) {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        handlePopupsClose();
      }
    }
    document.addEventListener("keyup", closeOnEsc);
    return () => {
      document.removeEventListener("keyup", closeOnEsc);
    };
  }, []);

  function handleLoginPopupOpen() {
    setLoginOpen(true);
  };

  function handleRegisterPopupOpen() {
    setRegisterOpen(true);
  };

  const handleClickHamburger = () => {
    setIsMobileMenuOpened(!isMobileMenuOpened);
  };

  function handleTogglePopup() {
    setAuthError('');
    setLoginOpen(!isLoginOpen);
    setRegisterOpen(!isRegisterOpen);
  }; 

  function handleOpenLogin() {
    setAuthError('');
    setTooltipOpen(false);
    setLoginOpen(true);
    console.log(`сработала: handleOpenLogin ${isLoginOpen}`); 
  };

  const handleOpenProfile = () => {
    setProfileOpen(!isProfileOpen);
  };
  //___________________________ end of the popup section _________________________________________


 //регистрация
  function handleRegister(email, password, name) {
    setDisabled(true);
    mainApi.register(email, escape(password), name)
    .then((res) => {
      setRegisterOpen(false);
      setTooltipOpen(true);
    })
    .catch((err) => setAuthError(err.message))
    .finally(() => setDisabled(false));
};

 //авторизация 
function handleLogin(email, password) {
  setDisabled(true);
  mainApi.authorize(email, escape(password))
    .then((data) => {
      mainApi.getUserInfo(data)
        .then((res) => setCurrentUser(res.data))
        .catch((err) => setAuthError(err.message));
      setLoggedIn(true);
      setLoginOpen(false);
      getSavedMovies();
    })
    .catch((err) => setAuthError(err.message))
    .finally(() => setDisabled(false));
};

// редактирование профиля 
function handleUpdateUser(user) {
  if (!user.data) {
    setLoggedIn(false);
    setCurrentUser({})
    setProfileOpen(false);
  } else {
    setCurrentUser(user);
    setProfileOpen(false);
    setTooltipOpen(true);
  }
}

const CurrentUserData = JSON.stringify(currentUser, null, 4);
// const savedMoviesData = JSON.stringify(savedMovies, null, 4);
// const moviesData = JSON.stringify(movies, null, 4);
console.log(`Залогинен: ${isLoggedIn}`); 
console.log(`CurrentUser: ${CurrentUserData}`); 
// console.log(`savedMoviesData: ${savedMoviesData}`); 
// console.log(`moviesData: ${movies}`); 


  return (
   
    <CurrentUserContext.Provider value={currentUser}>
    <MoviesContext.Provider value={{ movies, savedMovies }}>

    <div className="App"> 
      <Header 
        isMobileMenuOpened={isMobileMenuOpened}
        onHamburgerClick={handleClickHamburger}
        onProfileOpen={handleOpenProfile}
        isProfileOpen={isProfileOpen}
        isLoggedIn={isLoggedIn}
        onSelectLogin={handleLoginPopupOpen}
        onSelectRegister={handleRegisterPopupOpen}/>
      <Switch>

        <Route exact path='/'>
          <Main />
        </Route>

        <Route   path='/signup'>
           { isLoginOpen ? <Redirect to='/signin' />
            : <Register
               isOpen={isRegisterOpen}
               onClose={handlePopupsClose}
               onChangeForm={handleTogglePopup}
               onRegister={handleRegister}
               authError={authError} />      
           } 
        </Route>

        <Route  path='/signin'>
           { isLoggedIn ? <Redirect to='/movies' />
            : <Signin
               isOpen={isLoginOpen}
               onClose={handlePopupsClose}
               onChangeForm={handleTogglePopup}
               authError={authError}
               onLogin={handleLogin}
               disabled={disabled} />      
           } 
        </Route>

        <ProtectedRoute  path='/movies' isLoggedIn={isLoggedIn}>
             <Movies
               onMoviesSearchSubmit={handleMoviesSearch}
               isDisabledSearch={isDisabledSearch}
               isVisiblePreloader={isVisiblePreloader}
               messageNoMovies={messageNoMovies}
               onBookmarkClick={onBookmarkClick}/>  
        </ProtectedRoute>

        <ProtectedRoute exact path='/saved-movies' isLoggedIn={isLoggedIn}>
            <SavedMovies 
            SavedMovies={savedMovies}
            onBookmarkClick={onBookmarkClick} />  
        </ProtectedRoute>

        <ProtectedRoute exact path='/profile' isLoggedIn={isLoggedIn}>
          <Profile
            isOpen={isProfileOpen}
            onClose={handlePopupsClose}
            authError={authError}
            onUpdateUser={handleUpdateUser}
            disabled={disabled} /> 
         </ProtectedRoute>

        <Route path="*">
          <PageNotFound />
        </Route>  

      </Switch>
      <Footer />      
      <InfoTooltip
        isOpen={isTooltipOpen}
        onClose={handlePopupsClose}
        onChangeForm={handleOpenLogin}
        disabled={disabled} 
        message = "Пользователь успешно зарегистрирован!"/>
   </div>
  </MoviesContext.Provider>
  </CurrentUserContext.Provider>
  );
}

export default App;

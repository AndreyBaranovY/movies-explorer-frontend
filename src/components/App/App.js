import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
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
import ProtectedRoute from '../ProtectedRout';
import { PATH_ROUTES } from '../../utils/pathRouts';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { MoviesContext } from '../../contexts/MoviesContext';
import * as moviesApi from '../../utils/MoviesApi';
import * as mainApi from '../../utils/MainApi';


function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  // const [movies, setMovies] = useState([]);
  // const [savedMovies, setSavedMovies] = useState([]);
  const [allMovies, setAllMovies] = React.useState([]);
  const [selectedMovies, setSelectedMovies] = React.useState([]);
  

  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isTooltipOpen, setTooltipOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [authError, setAuthError] = useState('');
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  const [isVisiblePreloader, setVisiblePreloader] = useState(false);
  const [messageNoMovies, setMessageNoMovies] = React.useState('');
  const [isDisabledSearch, setDisabledSearch] = React.useState(false);
  
  const [disabled, setDisabled] = useState(false);
   
  // const history = useHistory();
 


  

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi.getUserInfo(jwt)
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser(res.data);
          getSavedMovies();
        })
        .catch((err) => console.log(err));
    }
  }, []);

  //загрузка фильмов
  // useEffect(() => {
  //   const localStorageMovies = JSON.parse(localStorage.getItem('movies'));
  //   if (localStorageMovies && localStorageMovies.length) {
  //     setAMovies(localStorageMovies);
     
  //   }
  // }, []);


//загрузка сохранённых фильмов//
  function getSavedMovies() {
      mainApi.getSavedMovies()
        .then((movies) => {
          console.log(movies);
          setSelectedMovies(movies);
        })
    //  setLoggedIn(true);
      console.log(`Сработалала загрузка сохранённых: ${selectedMovies}`); 
  }


  console.log(`UserData: ${currentUser}`); 
  console.log(`SavedMovies: ${selectedMovies}`); 
  


  // function saveAllMovies(movies) {
  //   const verifiedMovies = movies.map((movie) => {
  //     movie.isSaved = savedMovies.some((savedMovie) => savedMovie.movieId === movie.id);
  //     return movie;
  //   });
  //   setMovies(verifiedMovies);
  //   localStorage.setItem('movies', JSON.stringify(verifiedMovies));
  // }
  function saveAllMovies(movies) {
    const verifiedMovies = movies.map((movie) => {
      movie.isSaved = selectedMovies.some((selectedMovie) => selectedMovie.movieId === movie.id);
      return movie;
    });
    setAllMovies(verifiedMovies);
    localStorage.setItem('all-movies', JSON.stringify(verifiedMovies));
  }


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
    console.log(`Login: ${isLoginOpen} 
              Register: ${isRegisterOpen}`);
  }; 

  function handleOpenLogin() {
    setAuthError('');
    setTooltipOpen(false);
    setLoginOpen(true);
  };

  const handleOpenProfile = () => {
    setProfileOpen(!isProfileOpen);
  };

 //регистрация
  function handleRegister(email, password, name) {
    setDisabled(true);
    mainApi.register(email, password, name)
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
      //  getSavedMovies();
    })
    .catch((err) => setAuthError(err.message))
    .finally(() => setDisabled(false));
};



function handleUpdateUser(user) {
  if (!user.data) {
    setLoggedIn(false);
    setCurrentUser({})
  } else {
    setCurrentUser(user.data);
  }
}
  // редактирование профиля 
//   function handleEditProfile(email, name) { 
//     console.log( email, name);
//     setDisabled(true);
//     debugger;
//     mainApi.updateUserInfo(name, email)
//      .then((user) => {
//       setCurrentUser({ data: user })
//       setProfileOpen(false);
//       setTooltipOpen(true);
//     })
//    
// };

  // выход 
  // function handleSignOut() { 
  //   setLoggedIn(false);
  //   localStorage.removeItem('jwt');
  //   setCurrentUser({});
  //   history.push('/');
  // };

  //поиск фильма 
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
 // сохранение - удаление фильма
  // function onBookmarkClick(movie) {
  //   console.log(`Сработалала: onBookmarkClick: Movie - ${movie}`);
  //   if(!movie.isSaved && !movie.owner) {
  //     mainApi.saveMovie(movie)
  //       .then((res) => {
  //         setSavedMovies([{...res, id: res.movieId}, ...savedMovies]);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else {
  //     console.log(`Сработалала: else: `);
  //     const movieId = movie.id || movie.movieId;
  //     const deletedMovie = savedMovies.find((savedMovie) => savedMovie.movieId === movieId);
  //     mainApi.deleteMovie(deletedMovie._id)
  //       .then(() => {
  //         const newSelectedMovies = savedMovies.filter((savedMovie) => savedMovie.movieId !== movieId);
  //         setSavedMovies(newSelectedMovies);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       })
  //   }
  // }

  function handleAuthSubmit(data) {
    if (data.token) {
      localStorage.setItem("jwt", data.token);
      mainApi.getSavedMovies()
        .then((movies) => {
          setSelectedMovies(movies);
        })
      setLoggedIn(true);
    }
  }





  function onBookmarkClick(movie) {
    if(!movie.isSaved && !movie.owner) {
      mainApi.saveMovie(movie)
        .then((selectedMovie) => {
          setSelectedMovies([selectedMovie, ...selectedMovies]);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const movieId = movie.id || movie.movieId;
      const deletedMovie = selectedMovies.find((selectedMovie) => selectedMovie.movieId === movieId);
      mainApi.deleteMovie(deletedMovie._id)
        .then(() => {
          const newSelectedMovies = selectedMovies.filter((selectedMovie) => selectedMovie.movieId !== movieId);
          setSelectedMovies(newSelectedMovies);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      Promise.all([
        mainApi.getUserInfo()
      ])
        .then((user) => {
          setLoggedIn(true);
          setCurrentUser(user[0].data);
        })
        .catch(() => {
          setLoggedIn(false);
        })
    }
  }, [isLoggedIn]);




  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      Promise.all([mainApi.getSavedMovies()])
        .then((movies) => {
          setSelectedMovies(movies[0]);
        })
        .catch(() => {
          setSelectedMovies([]);
        })

        console.log(`Сработалал UseEffect  сохранённыe: ${selectedMovies}`); 

    }
  }, []);


//  useEffect(() => {
//    const localMovies = JSON.parse(localStorage.getItem('all-movies')) || [];
//    const verifiedMovies = localMovies.map((localMovie) => {
//      localMovie.isSaved = setSelectedMovies.some((selectedMovie) => selectedMovie.movieId === localMovie.id);
//      return localMovie;
//    });
//    setAllMovies(verifiedMovies);
//    localStorage.setItem('movies', JSON.stringify(verifiedMovies));
//    if(!!verifiedMovies.length) {
//      setMessageNoMovies('Ничего не найдено');
//    }
//  }, [currentUser, selectedMovies]);


  return (
   
    <CurrentUserContext.Provider value={currentUser}>
    <MoviesContext.Provider value={{ allMovies, selectedMovies }}>

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
       
        <Route exact path={PATH_ROUTES.SIGNIN}>
          { 
            isLoggedIn ? <Redirect to={PATH_ROUTES.MOVIES} /> :
              <Signin
              isOpen={isLoginOpen}
              onClose={handlePopupsClose}
              onChangeForm={handleTogglePopup}
              authError={authError}
              onLogin={handleLogin}
              disabled={disabled} />
          }    
        </Route>

        <Route  path='/signup'>
              <Register
              isOpen={isRegisterOpen}
              onClose={handlePopupsClose}
              onChangeForm={handleTogglePopup}
              onRegisterSubmit={handleAuthSubmit}
              authError={authError} />
        </Route>

        <ProtectedRoute path={PATH_ROUTES.MOVIES} exact isLoggedIn={isLoggedIn}>
             <Movies
             movies={allMovies}
             onMoviesSearchSubmit={handleMoviesSearch}
             isDisabledSearch={isDisabledSearch}
             isVisiblePreloader={isVisiblePreloader}
             messageNoMovies={messageNoMovies}
             onBookmarkClick={onBookmarkClick} 
             />  
        </ProtectedRoute>

        <ProtectedRoute path={PATH_ROUTES.SAVED_MOVIES} exact isLoggedIn={isLoggedIn}>
             <SavedMovies
             selectedMovies={selectedMovies}
             onBookmarkClick={onBookmarkClick}
             />         
        </ProtectedRoute>

        <ProtectedRoute path={PATH_ROUTES.PROFILE} exact isLoggedIn={isLoggedIn}>
              <Profile
              // onSignOut={handleSignOut}
              isOpen={isProfileOpen}
              onClose={handlePopupsClose}
              // onChangeForm={handleTogglePopup}
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

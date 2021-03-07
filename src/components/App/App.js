import React, { useState } from "react";
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
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

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isTooltipOpen, setTooltipOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [authError, setAuthError] = useState('');

  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const [currentRow, setCurrentRow] = useState(0);
  const [isLoading, setLoading] = useState(false);
 
  const [disabled, setDisabled] = useState(false);

  const history = useHistory();
  const { pathname } = useLocation();

  function handlePopupsClose() {
    setRegisterOpen(false);
    setLoginOpen(false);
    setProfileOpen(false);
    setTooltipOpen(false);
    setAuthError('');
  };

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

  function handleShowMore() {
    setCurrentRow(currentRow + 1);
  };
 
  function handleRegister(email, password, name) {
    setDisabled(true);
    setRegisterOpen(false);
    setTooltipOpen(true);
    console.log(`Отсылаем на сервер: имя - ${email} пароль - ${password} имя - ${name}`);
    setDisabled(false);
  };
  
  function handleLogin(email, password) {
    setDisabled(true);
    setCurrentUser(email,password);   
    setLoggedIn(true);
    // setLoginOpen(false);
    setAuthError('Что-то пошло не так ...');
    console.log(`Авторизирум: почта - ${email} пароль - ${password}`)
    console.log(`Пользователь: почта- ${currentUser}`)
  };

  function handleEditProfile(name, email) {
    setDisabled(true);
    setProfileOpen(false);
    setTooltipOpen(true);
    console.log(`Перезаписываем: имя - ${name}  почту - ${email}`);
    setDisabled(false);
  };

  function handleSignOut() { // Выход
    setLoggedIn(false);
    setCurrentUser({});
    history.push('/');
    console.log(" Как говорится: I will be back ...");
  };

  return (
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
        <Route path='/movies'>
          <Movies
            isLoading={isLoading} 
            onShowMore={handleShowMore}
            currentRow={currentRow} />        
        </Route>  
        <Route path='/saved-movies'>
          <SavedMovies />         
        </Route>             
        <Route path='/profile'/>
        <Route path='/signin'/>  
        <Route path='/signup'/>
        <Route path="*">
          <PageNotFound />
        </Route>    
      </Switch>
      <Footer />

      <Profile
        onSignOut={handleSignOut}
        isOpen={isProfileOpen}
        onClose={handlePopupsClose}
        onChangeForm={handleTogglePopup}
        authError={authError}
        onProfile={handleEditProfile}
        disabled={disabled} />   
      <Signin
        isOpen={isLoginOpen}
        onClose={handlePopupsClose}
        onChangeForm={handleTogglePopup}
        authError={authError}
        onLogin={handleLogin}
        disabled={disabled} />
      <Register
        isOpen={isRegisterOpen}
        onClose={handlePopupsClose}
        onChangeForm={handleTogglePopup}
        onRegister={handleRegister}
        authError={authError} />
      <InfoTooltip
        isOpen={isTooltipOpen}
        onClose={handlePopupsClose}
        onChangeForm={handleOpenLogin}
        disabled={disabled} 
        message = "Пользователь успешно зарегистрирован!"/>
  </div>
  );
}

export default App;

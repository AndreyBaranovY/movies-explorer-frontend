import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Signin from '../Signin/Signin';

function App() {

  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const [currentRow, setCurrentRow] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);


  const handleClickHamburger = () => {
    setIsMobileMenuOpened(!isMobileMenuOpened);
  };

  const handleProfileOpen = () => {
    setProfileOpen(!isProfileOpen);
  };

  function handleShowMore() {
    setCurrentRow(currentRow + 1);
  };

// Выход
  function handleSignOut() {
    console.log(" I will be back ...")
  };



  return (
    <div className="App">
  
      <Header 
        isMobileMenuOpened={isMobileMenuOpened}
        onHamburgerClick={handleClickHamburger}
        onProfileOpen={handleProfileOpen}
      />
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/movies'>
          <Movies
            isLoading={isLoading} 
            onShowMore={handleShowMore}
            currentRow={currentRow}
          />
        </Route>  
        <Route path='/saved-movies'>
          <SavedMovies />         
       </Route>             
       <Route path='/profile'>
           <Profile
          
             onSignOut={handleSignOut}
           />
       </Route>  
       <Route path='/signin'>
           <Signin />         
       </Route>       
       <Route path='/signup'>
          <Register 
          />         
       </Route>       
      </Switch>
   <Footer 
      isProfileOpen={isProfileOpen}
   />
    </div>
  );
}

export default App;

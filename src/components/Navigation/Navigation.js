import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';



function Menu({ isMobileMenuOpened, onHamburgerClick, onProfileOpen, navigationClassName, savedMovies }){
       
  const onClicks = (e) => { 
    if (isMobileMenuOpened) 
    onHamburgerClick(); 
  }

  const onClicksProfile = (e) => { 
    if (isMobileMenuOpened) {
    onHamburgerClick(); 
    onProfileOpen();
    } else {
      onProfileOpen();
    }
  }

    return(
      <div className={navigationClassName}>
        <div className="navigation__container">
         <NavLink 
            to='/' 
            className= "navigation__to-main"
            activeClassName="navigation__title_active"  
               
          >
            Главная
          </NavLink>
          <div className="navigation__films-container">
          <NavLink 
            to='/movies' 
            className={savedMovies ? "navigation__title navigation__title_savedMovies" : "navigation__title"} 
            activeClassName="navigation__title_active"     
            onClick={onClicks} 
          >
            Фильмы
          </NavLink> 
          <NavLink 
            to='/saved-movies' 
            className={savedMovies ? "navigation__title_active menu__title_savedMovies" : "navigation__title"}  
            activeClassName={savedMovies ? "navigation__title_active_savedMovies" : "navigation__title_active"} 
            onClick={onClicks}  
          >
            Сохранённые фильмы
          </NavLink>
          </div>

        <NavLink
            to="/profile"
            className="navigation__profile"  
            onClick={onClicksProfile}
            >
          </NavLink>
         
          </div>
      </div>
    )

  
}

export default Menu;

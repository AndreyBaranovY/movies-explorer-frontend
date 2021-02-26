import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import ProfilePath from '../../images/profile.svg';
import './Navigation.css';



function Menu({ onHamburgerClick, onProfileOpen, navigationClassName, savedMovies }){
       
  const onClicks = (e) => {
    onHamburgerClick(); 
    onProfileOpen();
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

          <NavLink 
            to='/movies' 
            className={savedMovies ? "navigation__title navigation__title_savedMovies" : "navigation__title"} 
            activeClassName="navigation__title_active"   
            onClick={onHamburgerClick}      
          >
            Фильмы
          </NavLink> 
          <NavLink 
            to='/saved-movies' 
            className={savedMovies ? "navigation__title menu__title_savedMovies" : "navigation__title"}  
            activeClassName={savedMovies ? "navigation__title_active_savedMovies" : "navigation__title_active"} 
            onClick={onHamburgerClick}    
          >
            Сохранённые фильмы
          </NavLink>
        </div>

        <NavLink
            to="/profile"
            className="navigation__profile"  
            onClick={onClicks}
                
            >
          </NavLink>
         


         {/* <div className="navigation__profile">
         <Link to="/profile"> 
            <img className="navigation__profile-img" src={ProfilePath} alt="профайл пользователя" />
          </Link>
        </div>    */}

      </div>
    )

  
}

export default Menu;

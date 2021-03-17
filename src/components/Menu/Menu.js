import React from 'react';
import Hamburger from '../Hamburger/Hamburger';
import Navigation from '../Navigation/Navigation';

import './Menu.css';

function Menu({ isLoggedIn, isMobileMenuOpened, onHamburgerClick, onProfileOpen}){

  const navigationClassName = `${isMobileMenuOpened ? 'navigation_mobile' : 'navigation'}`;
 


  if(!isMobileMenuOpened) {
    return(
      <div className="menu">
        <Hamburger
          isMobileMenuOpened={isMobileMenuOpened}
          onHamburgerClick={onHamburgerClick}
          
        />  
       <Navigation 
          isLoggedIn={isLoggedIn}
          navigationClassName={navigationClassName} 
          onHamburgerClick={onHamburgerClick}  
          onProfileOpen={onProfileOpen}   
         
        />   
                   
     </div>
    )
  } else {
    return(
      <div className="menu_mobile">
          <div className="menu__container">
            <Navigation 
              isLoggedIn={isLoggedIn}
              navigationClassName={navigationClassName}  
              onHamburgerClick={onHamburgerClick}   
              onProfileOpen={onProfileOpen}   
              isMobileMenuOpened={isMobileMenuOpened}
            />
            <Hamburger
              isMobileMenuOpened={isMobileMenuOpened}
              onHamburgerClick={onHamburgerClick}
            />
           </div>
     </div>
    )

  }
  
}

export default Menu;

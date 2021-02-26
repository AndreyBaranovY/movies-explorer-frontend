import React from 'react';
import Hamburger from '../Hamburger/Hamburger';
import Navigation from '../Navigation/Navigation';

import './Menu.css';

function Menu({ isMobileMenuOpened, onHamburgerClick, onProfileOpen }){

  const navigationClassName = `${isMobileMenuOpened ? 'navigation_mobile' : 'navigation'}`;
 


  if(!isMobileMenuOpened) {
    return(
      <div className="menu">
        
            <Navigation 
              navigationClassName={navigationClassName} 
              onHamburgerClick={onHamburgerClick}  

            />   
               <Hamburger
              isMobileMenuOpened={isMobileMenuOpened}
              onHamburgerClick={onHamburgerClick}
            />      
     </div>
    )
  } else {
    return(
      <div className="menu_mobile">
         {/* <div className="menu__overlay">   */}
          <div className="menu__container">
            <Navigation 
              navigationClassName={navigationClassName}  
              onHamburgerClick={onHamburgerClick}   
              onProfileOpen={onProfileOpen}   
            />
            <Hamburger
              isMobileMenuOpened={isMobileMenuOpened}
              onHamburgerClick={onHamburgerClick}
            />
           </div>
         {/* </div> */}
     </div>
    )

  }
  
}

export default Menu;

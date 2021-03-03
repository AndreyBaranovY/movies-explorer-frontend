import { NavLink, useLocation } from 'react-router-dom'; 
import './Header.css';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

export default function Header({isProfileOpen, isMobileMenuOpened, onHamburgerClick , onProfileOpen, onSelectLogin, onSelectRegister }) {
  const { pathname } = useLocation();

  if(pathname === "/"){
    return (
      <header className='hero'>
         <div className="hero__content">
           <NavLink to="/"> 
             <Logo />
           </NavLink> 
           <div className="hero__links-container">
             <NavLink to="/signup" className="hero__link"
                onClick={onSelectRegister}> 
                Регистрация
             </NavLink> 
             <NavLink to="/signin" className="hero__link hero__link_active"
                onClick={onSelectLogin}> 
                Войти
             </NavLink> 
           </div>  
         </div>  
      </header >
    )
  } else {
    return (
     <header className='header' style={isProfileOpen ? {zIndex: 50} : {zIndex:0 } }>
        <div className="header__content"> 
         <NavLink to="/"> 
           <Logo />
         </NavLink>        
         < Menu 
            isMobileMenuOpened={isMobileMenuOpened}
            onHamburgerClick={onHamburgerClick}
            onProfileOpen={onProfileOpen}
         />
       </div>  
     </header >
   )
  }
}


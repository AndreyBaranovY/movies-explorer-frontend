import { Link, useLocation } from 'react-router-dom'; 
import './Header.css';
import Logo from '../Logo/Logo';
import ProfilePath from '../../images/profile.svg';
import Menu from '../Menu/Menu';
import Navigation from '../Navigation/Navigation';
import Hamburger from '../Hamburger/Hamburger';


export default function Header({isMobileMenuOpened, onHamburgerClick , onProfileOpen}) {
  const { pathname } = useLocation();

  if(pathname === "/"){
    return (
      <header className='hero'>
         <div className="hero__content">
           <Link to="/"> 
             <Logo />
           </Link> 
           <div className="hero__nav">
             <Link to="/signup"> 
               <button  className="hero__btn" >Регистрация</button>
             </Link> 
             <Link to="/signin"> 
                <button  className="hero__btn hero__btn_active" >Войти</button>
             </Link> 
           </div>  
         </div>  
      </header >
    )
  } else {


  return (
    <header className='header'>
       <div className="header__content"> 
        <Link to="/"> 
          <Logo />
        </Link> 
        
        < Menu 
           isMobileMenuOpened={isMobileMenuOpened}
           onHamburgerClick={onHamburgerClick}
           onProfileOpen={onProfileOpen}
        />
       
        {/* <div className="header__profile">
          <Link to="/profile"> 
            <img className="header__profile-pic" src={ProfilePath} alt="профайл пользователя" />
         </Link> 
        </div>   */}
      </div>  
    </header >
  )
  }

}


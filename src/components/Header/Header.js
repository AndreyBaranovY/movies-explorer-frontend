import Logo from '../Logo/Logo';
import './Header.css';


export default function Header(props) {
    
  
    return (
      <header className='header'>
       <Logo />
       HEADER  PICTURE HERE
       <ul className='header__links'>
          <li>
            <a
              className='header__link'
              href='#'
              rel='noopener noreferrer'>О проекте</a>
          </li>
          <li>
            <a
              className='header__link'
              href='#'
              rel='noopener noreferrer'>Технологии</a>
          </li>
          <li>
            <a
              className='header__link'
              href= '#'
              rel='noopener noreferrer'>Студент</a>
          </li>
          </ul>
      </header >
    )
  }
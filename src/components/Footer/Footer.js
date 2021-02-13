import React from 'react';
import './Footer.css';
export default function Footer(props) {
    
  
    return (
      <footer className='footer' >
        <div className='footer__text'> Учебный проект Яндекс практикум x BeatFilm</div>
        <div className='footer__menu'>
          <p className='footer__copyright'>&copy; {(new Date().getFullYear())} </p>
          <ul className='footer__links'>
          <li>
            <a
              className='footer__link'
              href='https://praktikum.yandex.ru/'
              target='_blank'
              rel='noopener noreferrer'>Яндекс.Практикум</a>
          </li>
          <li>
            <a
              className='footer__link'
              href='https://github.com/'
              target='_blank'
              rel='noopener noreferrer'>Github</a>
          </li>
          <li>
            <a
              className='footer__link'
              href= 'https://www.facebook.com/'
              target='_blank'
              rel='noopener noreferrer'>Facebook</a>
          </li>
          </ul>
        </div> 

      </footer >
    )
  }

import React from 'react';
import { Link } from 'react-router-dom'; 
import logoPath from '../../images/logo.svg';

export default function Logo(props) {
  return (
    <Link to="/"> 
          <img className="logo"  src={logoPath} alt="логотип надпись C" />    
    </Link> 
  )
}



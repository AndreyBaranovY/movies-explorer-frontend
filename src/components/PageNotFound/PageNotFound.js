import React from 'react';
import { NavLink } from 'react-router-dom';
import './PageNotFound.css';


function PageNotFound (props) {
    return (
        <div className='error404' >
           <div className='popup__overlay'>  
             <div className='error404__container'>
               <p className='error404__heading'> 404 </p>
               <p className='error404__text'> Страница не найдена </p>
                  <NavLink className='error404__link'   to="/" 
                    >Назад 
                  </NavLink>       
             </div> 
          </div> 
      </div>  
  )
}

export default PageNotFound; 
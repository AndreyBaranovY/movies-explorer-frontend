import React from 'react';
import  './Form.css';

export default function Form(props) {
    const {
        email,
        name,
        error,
        errorp,
        textBeforeBtn,
        childrenLink,
        children,
    } = props;
  return (
   <div className="form__container">
          <h3 className="form__title">Привет, {name}!</h3>
          <form >
            <div className="form__form">
              <p className="form__label">Имя</p>
              <input 
                type="password" 
               placeholder={name}
               className="form__input" 
               id="password-input" 
               name= "name"
               required 
               minLength="2" 
               maxLength="30" 
                autoComplete="off"
            
                />
             </div> 
                
           {/* <span className="form__input_error" id="password-input-error">{errorp}</span> */}
           <span className="form__line"/> 
           <div className="form__form">
               <p className="form__label">Почта</p>
                  <input 
              type="email" 
              placeholder={email}
              className="form__input" 
              id="email-input" 
              name= "email"
              required 
              minLength="2" 
              maxLength="30" 
              autoComplete="off"
                />
            </div>
             {/* <span className="form__input_error" id="email-input-error">{error}</span> */}
          </form>
          
        <div className="form__link-container"  >
          <p className="form__link-text">{textBeforeBtn}</p>
          <button className="form__link-btn" href="#"> {childrenLink} </button>
        </div>
     </div>       
  );
};

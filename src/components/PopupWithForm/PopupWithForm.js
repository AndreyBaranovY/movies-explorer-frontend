import React from 'react';
import  './PopupWithForm.css';
import Logo from '../Logo/Logo';
import Button from '../ui/Button/Button';
import SubmitButton from '../SubmitButton/SubmitButton';


export default function PopupWithForm(props) {
    const {     
        formName,
        textBeforeBtn,
        childrenLink,
        buttonName,
        children,
        active,
        authError,
        onSubmit,
        isFormValid,
        submitButtonText,
        onChangeForm,
        subtitleText,
        disabled
    } = props;


  // return (
  //   <div className="popup">
  //      <div className="popup__overlay">  
  //        <div className="popup__container">
  //         <Logo />
  //         <h3 className="popup__title">{title}</h3>
  //         <form className="popup__form">
  //           <p className="popup__label">Email</p>
  //           <input 
  //             type="email" 
  //             placeholder="Введите почту"
  //             className="popup__input" 
  //             id="email-input" 
  //             name="email"
  //             required 
  //             minLength="2" 
  //             maxLength="30" 
  //             autoComplete="off"
  //           />
  //           <span className="popup__input_error" id="email-input-error">{error}</span>

  //           <p className="popup__label">Пароль</p>
  //           <input 
  //           type="password" 
  //           placeholder="Введите пароль"
  //           className="popup__input" 
  //           id="password-input" 
  //           name="password"
  //           required 
  //           minLength="2" 
  //           maxLength="30" 
  //           autoComplete="off"
  //         />
  //          <span className="popup__input_error" id="password-input-error">{errorp}</span>
  //         {children}
  //         <SubmitButton name={buttonName} width="358px"  active={active} />
  //         </form>
  //       <p className="popup__link-text">{textBeforeBtn}<button className="popup__link-btn" href="/sign-in"> {childrenLink} </button></p>
        
  //       </div> 
  //     </div> 
  //   </div>   
  // );

  return (
    <div className="popup">
       <div className="popup__overlay">  
         <div className="popup__container">
          <Logo />
          <form className={`popup__form ${formName}__form`}>
          <fieldset
          className='popup__input-container'
          disabled={disabled}>
          {children}
        </fieldset>
        {formName !== 'tooltip' &&
          <>
            <span className='popup__error'>{authError}</span>
            <Button
              buttonClassName='popup__submit'
              onClick={onSubmit}
              disabled={!isFormValid}>
              {submitButtonText}
            </Button>
          </>
        }
        

        <span className='popup__subtitle'>{formName !== 'tooltip' && `${subtitleText}`}
          <span className='popup__link' onClick={onChangeForm}>
            {formName !== 'login' ? 'Войти' : 'Зарегистрироваться'}</span></span>
            </form>
            </div> 
      </div> 
    </div>   
  );
};

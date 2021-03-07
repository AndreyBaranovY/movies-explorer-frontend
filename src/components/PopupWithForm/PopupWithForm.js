import React from 'react';
import  './PopupWithForm.css';
import Logo from '../Logo/Logo';
import Button from '../ui/Button/Button';


export default function PopupWithForm(props) {
    const {     
      isOpen,
      onSubmit,
      onClose,
      formName,
      onChangeForm,
      children,
      submitButtonText,
      isFormValid,
      authError,
      disabled,
      subtitleText,
      onSignOut
    } = props;
    
    if(formName === 'profile') {
      return (
        <div className={`popup popup_type_profile ${isOpen && 'popup_opened'}`}>
        <div
          className='popup__overlay'
          onClick={onClose}>
        </div>
        <form
          className={`popup__form ${formName}__form`}
          name={formName}
          onSubmit={onSubmit}>
            <fieldset
                className='popup__input-container_profile '
                disabled={disabled}>
                {children}
            </fieldset>
            <span className='popup__error'>{authError}</span>
            <div className="popup__profile-buttons">
              <Button
                 buttonClassName='button__profile'
                 onClick={onSubmit}
                 disabled={!isFormValid}>
                 Редактировать
               </Button>
               <Button
                 buttonClassName='button__profile button__profile_active'
                 onClick={onSignOut}
                 >
                 Выйти из аккаунта
               </Button>
             </div>
            </form>   
          </div > 
       )

    } else {
return (
  
  <div className={`popup popup_type_${formName} ${isOpen && 'popup_opened'}`}>
    
    <div
      className='popup__overlay'
      onClick={onClose}>
    </div>
    <form
      className={`popup__form ${formName}__form`}
      name={formName}
      onSubmit={onSubmit}>
      <div  className='popup__logo' onClick={onClose}>
        <Logo/>
      </div>   
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
            disabled={!isFormValid}
            onClick={onSubmit}>
            {submitButtonText}
          </Button>
        </>
      }
      <span className='popup__subtitle'>{formName !== 'tooltip'  && `${subtitleText}`}
      <span className='popup__link' onClick={onChangeForm}>
      {formName !== 'login' ? 'Войти' : 'Зарегистрироваться'}</span></span>
    </form>   
  </div > 
  )
    }
};

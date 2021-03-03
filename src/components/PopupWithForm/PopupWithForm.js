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
      linkName,
      onSignOut
    } = props;
    
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
      { formName !== 'profile' &&
         <div  className='popup__logo' onClick={onClose}>
           <Logo/>
        </div>
      }
        
      <fieldset
        className={formName !== 'profile' ? 'popup__input-container': 'popup__input-container_profile'}
        disabled={disabled}>
        {children}
      </fieldset>
      {formName !== 'tooltip' &&
        <>
          <span className='popup__error'>{authError}</span>

          <Button
              buttonClassName={formName !== 'profile' ? 'popup__submit' : 'button__profile  button__profile_active'}
              onClick={onSubmit}
              disabled={!isFormValid}>
              {submitButtonText}
            </Button>


        </>
      }
      <span className='popup__subtitle'>{formName !== 'tooltip'  && `${subtitleText}`}
      <span className={formName !== 'profile' ? 'popup__link' : 'button__profile'} onClick={formName !== 'profile' ? onChangeForm : onSignOut}>
          {linkName}</span></span>
    </form>   
  </div > 
 );
};

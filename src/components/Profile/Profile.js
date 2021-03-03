import React, { useState } from 'react';

import Input from '../ui/Input/Input';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useValidation } from '../../utils/validation';
import './Profile.css';



export default function Profile(props) {
  const { onSignOut, isOpen, onClose, onChangeForm, onProfile, authError, disabled} = props;
 
 
  const name = "Василий";
  const email = "pochta@yandex.ru";

  const emailField = useValidation();
  const nameField = useValidation();

  function handleUpdateProfile(evt) {
    evt.preventDefault();
    onProfile(emailField.value, nameField.value);
  };

 





  function handleClose() {
    emailField.setErrorMessage('');
    emailField.setValue('');
    nameField.setErrorMessage('');
    nameField.setValue('');
    emailField.setIsValid(false);
    nameField.setIsValid(false);
    onClose();
  };

    return (
      <div className='profile'>
          <PopupWithForm 
                formName='profile'
                isOpen={isOpen}
                onClose={handleClose}
                onChangeForm={onChangeForm}
                isFormValid={emailField.isValid && nameField.isValid}
                onSubmit={handleUpdateProfile}
                authError={authError}
                disabled={disabled}
                submitButtonText='Редактировать'
                subtitleText=''
                linkName = 'Выйти из аккаунта'
                onSignOut={onSignOut}
                >
                
                <legend className='popup__heading'>{`Привет, ${name}`}</legend>
                <Input
                  label='Имя'
                  name='name'
                  formName='reg'
                  minLength='2'
                  maxLength='30'
                  type='text'
                  required={true}
                  {...nameField}
                  inputLabelClassName='popup__input-label profile__input-lable'
                  inputFieldClassName='popup__input profile__input'
                  placeholder= {name}
                   />
                <Input
                  label='Почта'
                  name='email'
                  formName='reg'
                  minLength='6'
                  maxLength='30'
                  type='email'
                  required={true}
                  autoComplete='email'
                  {...emailField}
                  inputLabelClassName='popup__input-label profile__input-lable'
                  inputFieldClassName='popup__input profile__input profile__input_border'
                  placeholder= {email}
                   />
           </PopupWithForm>
     </div>
    )
  }
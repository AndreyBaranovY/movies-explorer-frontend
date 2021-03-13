import React from 'react';
import Input from '../ui/Input/Input';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useValidation } from '../../utils/validation';
import { PATH_ROUTES } from '../../utils/pathRouts';
import * as mainApi from '../../utils/MainApi';
import { useHistory } from 'react-router-dom';




export default function Register(props) {
  const { isOpen, onClose, onChangeForm, onRegisterSubmit, authError, disabled  } = props;

  const emailField = useValidation();
  const nameField = useValidation();
  const passwordField = useValidation();
  const history = useHistory();

  // function handleRegister(evt) {
  //   evt.preventDefault();
  //   onRegister(emailField.value, passwordField.value, nameField.value);
  // };

  function handleRegister(evt) {
    evt.preventDefault();
   
    mainApi.register(nameField, emailField, passwordField)
      .then(() => {
        mainApi.authorize(emailField, passwordField)
          .then((user) => {
            onRegisterSubmit(user);
            history.push(PATH_ROUTES.MOVIES);
          })
      })
      .catch((err) => {
        
      })
      .finally(() => {
       
      });
  }







  function handleClose() {
    emailField.setErrorMessage('');
    emailField.setValue('');
    passwordField.setErrorMessage('');
    passwordField.setValue('');
    nameField.setErrorMessage('');
    nameField.setValue('');
    emailField.setIsValid(false);
    passwordField.setIsValid(false);
    nameField.setIsValid(false);
    onClose();
  };

  return (
    <PopupWithForm
      formName='registration'
      isOpen={isOpen}
      onClose={handleClose}
      onChangeForm={onChangeForm}
      isFormValid={emailField.isValid && passwordField.isValid && nameField.isValid}
      onSubmit={handleRegister}
      authError={authError}
      disabled={disabled}
      submitButtonText='Зарегистрироваться'
      subtitleText='Уже зарегистрированны? '
      >
      <legend className='popup__heading'>Добро пожаловать!</legend>
      <Input
        label='Имя'
        name='name'
        formName='reg'
        minLength='2'
        maxLength='30'
        type='text'
        required={true}
        {...nameField}
        inputLabelClassName='popup__input-label'
        inputFieldClassName='popup__input'
        placeholder='Введите имя' />
      <Input
        label='E-mail'
        name='email'
        formName='reg'
        minLength='6'
        maxLength='30'
        type='email'
        required={true}
        autoComplete='email'
        {...emailField}
        inputLabelClassName='popup__input-label'
        inputFieldClassName='popup__input'
        placeholder='Введите почту' />
      <Input
        label='Пароль'
        name='password'
        formName='reg'
        minLength='8'
        maxLength='30'
        type='password'
        required={true}
        autoComplete='password'
        {...passwordField}
        inputLabelClassName='popup__input-label'
        inputFieldClassName='popup__input'
        placeholder='Введите пароль' />
    </PopupWithForm>
  )
}
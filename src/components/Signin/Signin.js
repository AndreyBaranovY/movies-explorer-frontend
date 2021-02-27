import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Input from '../ui/Input/Input';
import {useValidation} from '../../utils/validation';

export default function Signin(props) {
  const { isOpen, onClose, onChangeForm, onLogin, authError, disabled } = props;
  const emailField = useValidation();
  const passwordField = useValidation();

  // return (
  //   <div >
  //     <PopupWithForm
  //        title="Рады видеть!"
  //        error="Правильно введите E-mail ..."
  //        errorp="Что-то пошло не так ..."
  //        textBeforeBtn ="Ещё не зарегистрированы?"
  //        buttonName="Войти"
  //        childrenLink="Регистрация"
  //     />  
  //   </div>
  // )
  function handleLogin(evt) {
    evt.preventDefault();
    onLogin(emailField.value, passwordField.value);
  };

  function handleClose() {
    emailField.setErrorMessage('');
    emailField.setValue('');
    passwordField.setErrorMessage('');
    passwordField.setValue('');
    emailField.setIsValid(false);
    passwordField.setIsValid(false);
    onClose();
  };
  return (
    <PopupWithForm
      formName='login'
      isOpen={isOpen}
      onClose={handleClose}
      onChangeForm={onChangeForm}
      isFormValid={emailField.isValid && passwordField.isValid}
      onSubmit={handleLogin}
      authError={authError}
      disabled={disabled}
      submitButtonText='Войти'
      subtitleText='Ещё не зарегистрированны? '>

      <legend className='popup__heading'>Рады видеть!</legend>
      <Input
        label='E-mail'
        name='email'
        formName='log'
        type='email'
        minLength='6'
        maxLength='30'
        required={true}
        autoComplete='email'
        {...emailField}
        inputLabelClassName='popup__input-label'
        inputFieldClassName='popup__input'
        placeholder='Введите почту' />
      <Input
        label='Пароль'
        name='password'
        formName='log'
        type='password'
        minLength='8'
        maxLength='30'
        required={true}
        autoComplete='password'
        {...passwordField}
        inputLabelClassName='popup__input-label'
        inputFieldClassName='popup__input'
        placeholder='Введите пароль' />
    </PopupWithForm>
  
  )

}

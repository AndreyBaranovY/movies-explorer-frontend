import React, { useContext } from 'react';
import * as mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useHistory } from 'react-router-dom';
import Input from '../ui/Input/Input';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useValidation } from '../../utils/validation';
import './Profile.css';
   
    export default function Profile(props) {
      const {  isOpen, onClose, onUpdateUser, authError, disabled} = props;
      const user = useContext(CurrentUserContext);
      const history = useHistory();
      const emailField = useValidation();
      const nameField = useValidation();




      function handleUpdateProfile(evt) {
        evt.preventDefault();
        mainApi.updateUserInfo(nameField.value, emailField.value)
          .then((user) => {
            onUpdateUser(user);
          })
          .catch((err) => (err.message))
          .finally();  
      }

      function handleSignOut (evt) {
       evt.preventDefault();
        onUpdateUser({});
        localStorage.removeItem('jwt');
        history.push('/');
      }





      // function handleUpdateProfile(evt) {
      //   evt.preventDefault();
      //   onSubmit(emailField.value, nameField.value);
      // };

      // function handleSignOut (evt) {
      //   onSignOut();
      // }

      function handleClose() {
        onClose();
      };

    return (
     <div className='profile'>
       <PopupWithForm 
          formName='profile'
          isOpen={isOpen}
          onClose={handleClose}
          isFormValid={emailField.isValid && nameField.isValid}
          onSubmit={handleUpdateProfile}
          
          authError={authError}
          disabled={disabled}
          submitButtonText='Редактировать'
          subtitleText=''
          linkName = 'Выйти из аккаунта'
          onSignOut={handleSignOut} 
          
          >
         <legend className='popup__heading'>{`Привет, ${user.name}!`}</legend>
         <Input
            label='Имя'
            name='name'
            formName='reg'
            minLength='2'
            maxLength='30'
            type='text'
            {...nameField}
            inputLabelClassName='profile__label'
            inputFieldClassName='profile__input'
            placeholder= {user.name} />
          <Input
            label='Почта'
            name='email'
            formName='reg'
            minLength='6'
            maxLength='30'
            type='email'
            autoComplete='email'
            {...emailField}
            inputLabelClassName='profile__label_no-border'
            inputFieldClassName='profile__input'
            placeholder= {user.email} />
       </PopupWithForm>
    </div>
        )

  }
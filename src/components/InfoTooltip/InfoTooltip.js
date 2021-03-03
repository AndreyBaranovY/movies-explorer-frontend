import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default function InfoTooltip(props) {
  const { isOpen, onClose, onChangeForm} = props;
  const message = 'Пользователь успешно зарегистрирован!';

  return (
    <PopupWithForm
      formName='tooltip'
      isOpen={isOpen}
      onClose={onClose}
      onChangeForm={onChangeForm}> 
      <legend className='popup__heading'>{message}</legend>
    </PopupWithForm>
  )
}

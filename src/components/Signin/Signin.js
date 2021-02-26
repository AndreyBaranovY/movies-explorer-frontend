
import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default function Signin(props) {


  return (
    <div >
   <PopupWithForm
   title="Рады видеть!"
   error="Правильно введите E-mail ..."
   errorp="Что-то пошло не так ..."
   textBeforeBtn ="Ещё не зарегистрированы?"
   buttonName="Войти"
   childrenLink="Регистрация"
   >
     
   </PopupWithForm>
    </div >
  )
}

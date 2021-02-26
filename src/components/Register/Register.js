
import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default function Register(props) {


  return (
    <div >
     <PopupWithForm
       title="Добро пожаловать!"
       error="Правильно введите E-mail ..."
       errorp="Что-то пошло не так ..."
       textBeforeBtn ="Уже зарегистрированы?"
       buttonName="Зарегистрироваться"
       childrenLink="Войти"
       children ={
         <div>
           <p className="popup__label">Имя</p>
           <input 
             type="text" 
              placeholder="Введите своё имя"
              className="popup__input" 
              id="name-input" 
              name="name"
              required 
              minLength="2" 
              maxLength="30" 
            />
         </div>
       }
      > 
     </PopupWithForm>
   </div >
  )
}

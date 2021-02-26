import Button from '../ui/Button/Button';
import Form from '../Form/Form';
import './Profile.css';



export default function Profile({ onSignOut }) {
    
  const buttonClassName = "button__profile";
    return (
      <div profile >    
        <Form 
          name = "Виталий"
          email = "pochta@yandex.ru"
          error="Правильно введите E-mail ..."
          errorp="Правильно введите имя ..."
        />
        <div className="profile__bnts-container">
          <Button 
            buttonClassName={buttonClassName}
          > Редактировать
          </Button>
          <Button 
             buttonClassName={buttonClassName}
             onClick={ onSignOut }> Выйти из аккаунта
          </Button>
        </div>
      </div>
    )
  }
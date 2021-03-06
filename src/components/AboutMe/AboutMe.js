import './AboutMe.css';   
import photoPath from '../../images/photo.png';


export default function AboutMe(props) { 
    return (
     <section className="main__container about-me__container" id="student">
       <h2 className="main__name about-me__name">Студент </h2>
       <span className="main__line"/>
       <div className="about-me__content">

          <div className="about-me__content_article">
            <h3 className="about-me__content_article-name">Виталий</h3>
            <h4 className="about-me__content_article-header">Фронтенд-разработчик, 30 лет</h4>
            <p className="about-me__content_article-text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <div className="about-me__content-tab">
               <a className="about__content-tab-link" href="https://facebook.com" target="_blank" rel='noopener noreferrer'>Facebook</a >
               <a  className="about__content-tab-link" href="https://github.com/AndreyBaranovY" target="_blank" rel='noopener noreferrer'>GitHub</a >
            </div>
          </div >

          <div className="about-me__content_pic-container">
            <img className="about-me__pic" src={photoPath} alt="фото студента"/>
          </div >
        </div> 
     </section>
    )
  }
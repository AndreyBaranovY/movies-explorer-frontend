import './AboutProject.css';   



export default function AboutProject(props) {

  
    return (
     <section className="main__container" id="about-project">
       <h2 className="main__name">О проекте</h2>
       <span className="main__line"/>
       <div className="main__articles">
         <article className="main__article">
           <h3 className="main__header">Дипломный проект включал 5 этапов</h3>
           <p className="main__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
         </article >
         <article className="main__article">
           <h3 className="main__header">На выполнение диплома ушло 5 недель</h3>
           <p className="main__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
         </article >
         </div>
       <div className="about__tab">
         <div className="about__tab-text about__tab-text_active-green">1 неделя</div ><div  className="about__tab-text about__tab-text_active-grey">4 недели</div >
         <div  className="about__tab-text about__tab-text">Back-end</div ><div  className="about__tab-text">Front-end</div >
       </div>
     </section>
    )
  }
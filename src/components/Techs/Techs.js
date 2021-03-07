import './Techs.css';
export default function Techs(props) {
    
  
    return (
        <div className="techs__container" id="techs">
          <h2 className="main__name">Технологии</h2>
          <span className="main__line"/>
      
            <article className="main__article">
              <h3 className="techs__article-header">7 технологий</h3>
              <p className="main__text techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            </article >
         
          <div className="techs__tab">
            <a className="techs__tab-link" href="https://html.spec.whatwg.org/multipage/" target="_blank" rel='noopener noreferrer'>HTML</a > 
            <a className="techs__tab-link" href="https://www.w3.org/Style/CSS/ps://html.spec.whatwg.org/multipage/" target="_blank" rel='noopener noreferrer'>CSS</a >
            <a className="techs__tab-link" href="https://ru.wikipedia.org/wiki/JavaScript" target="_blank" rel='noopener noreferrer'>JS</a >
            <a className="techs__tab-link" href="https://ru.reactjs.org/" target="_blank" rel='noopener noreferrer'>REACT</a >
            <a className="techs__tab-link" href="https://git-scm.com/" target="_blank" rel='noopener noreferrer'>Git</a > 
            <a className="techs__tab-link" href="https://expressjs.com/ru/" target="_blank" rel='noopener noreferrer'>Express.js</a >
            <a className="techs__tab-link" href="https://www.mongodb.com/" target="_blank" rel='noopener noreferrer'>MongoDB</a >
          </div>
        </div>
       )
  }
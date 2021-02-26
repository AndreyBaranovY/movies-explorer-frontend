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
            <div className="techs__tab-text">HTML</div ><div  className="techs__tab-text">CSS</div >
            <div  className="techs__tab-text">JS</div ><div  className="techs__tab-text">REACT</div >
            <div className="techs__tab-text">Git</div ><div  className="techs__tab-text">Express.js</div >
            <div  className="techs__tab-text">MongoDB</div >
          </div>
        </div>
       )
  }
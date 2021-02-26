import './Portfolio.css';   

export default function Portfolio(props) {

  
    return (
     <div className="portfolio__container">
       <h2 className="portfolio__header">Портфолио</h2>
       
       <div className="portfolio__content">
          <div className="portfolio__content_article">
            <h3 className="portfolio__content_article-header">Статичный сайт</h3>
            <p className="portfolio__content_arrow">↗</p>
          </div >
       <span className="portfolio__content-line"/>    
          <div className="portfolio__content_article">
            <h3 className="portfolio__content_article-header">Адаптивный сайт</h3>
            <p className="portfolio__content_arrow">↗</p>
          </div >   
       <span className="portfolio__content-line"/> 
       <div className="portfolio__content_article">
            <h3 className="portfolio__content_article-header">Одностраничное приложение</h3>
            <p className="portfolio__content_arrow">↗</p>
          </div >   
      </div>
     </div>
    )
  }
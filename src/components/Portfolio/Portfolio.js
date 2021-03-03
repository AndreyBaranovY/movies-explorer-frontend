import './Portfolio.css';   

export default function Portfolio(props) {

  
    return (
     <div className="portfolio__container">
       <h2 className="portfolio__header">Портфолио</h2>
       
       <div className="portfolio__content">
          <div className="portfolio__content_article">
            <h3 className="portfolio__content_article-header">Статичный сайт</h3>
            <a className="portfolio__content-link" href="https://github.com/AndreyBaranovY/how-to-learn" target="_blank" rel='noopener noreferrer'>↗</a>
          </div >
       <span className="portfolio__content-line"/>    
          <div className="portfolio__content_article">
            <h3 className="portfolio__content_article-header" href="https://github.com/AndreyBaranovY/russian-travel" target="_blank" rel='noopener noreferrer'>Адаптивный сайт</h3>
            <a className="portfolio__content-link">↗</a>
          </div >   
       <span className="portfolio__content-line"/> 
       <div className="portfolio__content_article">
            <h3 className="portfolio__content_article-header">Одностраничное приложение</h3>
            <a className="portfolio__content-link" href="https://github.com/AndreyBaranovY/react-mesto-api-full" target="_blank" rel='noopener noreferrer'>↗</a>
          </div >   
      </div>
     </div>
    )
  }
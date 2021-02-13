export default function Navigation(props) {
    
  
    return (
      <nav >
            <ul className='navigation__links'>
          <li>
            <a
              className='navigation__link'
              href='#'
              rel='noopener noreferrer'>Главная</a>
          </li>
          <li>
            <a
              className='navigation__link'
              href='#'
              rel='noopener noreferrer'>Фильмы</a>
          </li>
          <li>
            <a
              className='navigation__link'
              href= '#'
              rel='noopener noreferrer'>Сохранённые фильмы</a>
          </li>
          </ul>
      </nav >
    )
  }
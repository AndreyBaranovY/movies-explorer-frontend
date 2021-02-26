import './NavTab.css';


export default function NavTab(props) {
    
  
    return (
      <nav className="nav-tab"> 
      <ul className='nav-tab__links'>
        <li>
          <a className='nav-tab__link' href='#about-project' rel='noopener noreferrer'>О проекте</a>
        </li>
        <li>
          <a className='nav-tab__link' href='#techs' rel='noopener noreferrer'>Технологии</a>
        </li>
        <li>
           <a className='nav-tab__link' href= '#student' rel='noopener noreferrer'>Студент</a>
        </li>
      </ul>
     </nav> 
    )
  }
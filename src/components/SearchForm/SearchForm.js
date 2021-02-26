import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({CheckText, searchMovies}){
  const [searchText, setSearchText] = useState('');
  const [focusInput, setFocusInput] = useState(false);
  
  function handleChange(e){
    setSearchText(e.target.value);
  }

  const onFocus =()=> {
    setFocusInput(true)
  }

  const onBlur =()=> {
    setFocusInput(false)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    CheckText(searchText);
    searchMovies(searchText);
  }

  return(
    <div className="search-form__container">
      <form className="search-form" onSubmit={handleSubmit}>
        <input className="search-form__input" id="search-form" placeholder="Фильм" onChange={handleChange} onFocus={onFocus} onBlur={onBlur}></input>
        <button className={focusInput ? "search-form__btn search-form__btn_active" : "search-form__btn"}> Найти</button>
      </form>

      <div className="search-form__cbx">
          <input type="checkbox" id="cbx" className="cbx input"/>
          <label for="cbx" className="label toggle "><span className="span"></span></label>   
          <p className="search-form__label">Короткометражки</p>
      </div>
    </div>
  

  )
}

export default SearchForm;

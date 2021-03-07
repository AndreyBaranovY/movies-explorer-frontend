import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({CheckText, searchMovies}){
  const [searchText, setSearchText] = useState('');
  const [focusInput, setFocusInput] = useState(false);
  
  function handleChange(e){
    setSearchText(e.target.value);
  }

  const onFocus = ()=> {
    setFocusInput(true)
  }

  const onBlur = ()=> {
    setFocusInput(false)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    CheckText(searchText);
    searchMovies(searchText);
  }

  return(
    <section className="search-form__container">
      <form className="search-form" onSubmit={handleSubmit}>
        <input 
          className="search-form__input" 
          id="search-form"
          type="text"
          name="search"
          minLength='2'
          maxLength='140'
          required
          autoComplete='off'
          placeholder="Фильм"
          onChange={handleChange} 
          onFocus={onFocus} 
          onBlur={onBlur} />
        <button className={focusInput ? "search-form__btn search-form__btn_active" : "search-form__btn"}> Найти</button>
      </form>

      <div className="search-form__cbx">
          <input 
          className="search-form__cbx-input"
          id="filter"
          type="checkbox"
          value="" />
          <label htmlFor="filter" className="label toggle "><span className="span"></span></label>   
          <p className="search-form__cbx-text">Короткометражки</p>
      </div>
    </section>
  

  )
}

export default SearchForm;

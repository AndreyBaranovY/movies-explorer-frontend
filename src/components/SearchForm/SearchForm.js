import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({onSearch, isDisabledSearch, isCheckboxChecked, onCheckboxChange }){
  const [searchValue, setSearchValue] = React.useState('');
  const [searchError, setSearchError] = React.useState('');



  const [focusInput, setFocusInput] = useState(false);
  const onFocus = ()=> {
    setFocusInput(true)
  }
  const onBlur = ()=> {
    setFocusInput(false)
  }
 
  function handleChangeInput(evt) {
    setSearchValue(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const searchValueField = searchValue.trim();
    setSearchValue(searchValueField);
    if (!searchValueField) {
      setSearchError('Введите ключевое слово для поиска');
    } else {
      setSearchError('');
      onSearch(searchValueField);
    }
  };

  return(
    <section className="search-form__container">
      <p className="search__error-container">
        <span className="search__error-text">{searchError}</span>
      </p>
      <form className="search-form" onSubmit={handleSubmit}>
        <input 
          className="search-form__input" 
          id="search-form"
          type="text"
          {...searchValue}
          name="search"
          required
          autoComplete='off'
          placeholder="Фильм"
          onChange={handleChangeInput}
          onFocus={onFocus} 
          onBlur={onBlur} />
        <button type="submit" className={focusInput ? "search-form__btn search-form__btn_active" : "search-form__btn"} disabled={isDisabledSearch}> Найти</button>
      </form>

      <div className="search-form__cbx">
          <input 
          className="search-form__cbx-input"
          id="filter"
          type="checkbox"
          checked={isCheckboxChecked} 
          onChange={onCheckboxChange}
           />
          <label htmlFor="filter" className="label toggle "><span className="span"></span></label>   
          <p className="search-form__cbx-text">Короткометражки</p>
      </div>
    </section>
  

  )
}

export default SearchForm;

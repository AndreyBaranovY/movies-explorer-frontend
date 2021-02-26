import React from 'react';
import './Hamburger.css';

function Hamburger({ isMobileMenuOpened, onHamburgerClick }) {
  const hamburgerClassName =
    `hamburger
    ${isMobileMenuOpened
      ? 'hamburger_opened'
      : 'hamburger_closed'}`;
   console.log(isMobileMenuOpened);
  return (
    <button
      className={hamburgerClassName}
      onClick={onHamburgerClick}>
      <span></span>
    </button>
  )
}

export default Hamburger;

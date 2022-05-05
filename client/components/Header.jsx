import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';

function Header(props) {
return (
  <div className='header-container'>
    <div className='header' onClick={props.headerClick}>
      GODMODE
    </div>
    <div className='subheader' onClick={props.backClick}>
    {props.view !== 'home' && <FaChevronLeft />} {props.headerText}
    </div>
    <br />
  </div>
  );
}

export default Header;

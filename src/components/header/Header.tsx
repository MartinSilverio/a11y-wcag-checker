import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleNavMenu } from '../../redux/nav/navActions';
import './Header.scss';

function Header() {
  const dispatch = useDispatch();

  function handleDrawerToggle() {
    dispatch(toggleNavMenu());
  }

  return (
    <header id='root-header'>
      <button className='mobile-open-menu' onClick={handleDrawerToggle}>
        <i className='fas fa-bars'></i>
      </button>
      <h1>A11y-Checker</h1>
    </header>
  );
}

export default Header;

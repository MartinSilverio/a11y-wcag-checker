import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useDispatch } from 'react-redux';
import { toggleNavMenu } from '../../redux/nav/navActions';
import './Header.scss';

function Header() {
  const dispatch = useDispatch();

  function handleDrawerToggle() {
    dispatch(toggleNavMenu());
  }

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <header id='root-header'>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <button className='mobile-open-menu' onClick={handleDrawerToggle}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <i className='fas fa-bars'></i>
      </button>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <h1>A11y-Checker</h1>
    </header>
  );
}

export default Header;

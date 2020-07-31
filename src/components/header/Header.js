import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
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
      {/* <Toolbar>
        <Hidden smUp>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <AccessibilityNewIcon aria-hidden={true} fontSize='large' />
        <Typography variant='h1'>A11y-Checker</Typography>
      </Toolbar> */}
      <button className='mobile-open-menu' onClick={handleDrawerToggle}>
        <i className='fas fa-bars'></i>
      </button>
      <h1>A11y-Checker</h1>
    </header>
  );
}

export default Header;

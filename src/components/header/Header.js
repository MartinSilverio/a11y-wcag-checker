import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import { useDispatch } from 'react-redux';
import { toggleNavMenu } from '../../redux/nav/navActions';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();

  function handleDrawerToggle() {
    dispatch(toggleNavMenu());
  }

  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <AccessibilityNewIcon fontSize='large' />
        <Typography variant='h4' component='h1'>
          A11y-Checker
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

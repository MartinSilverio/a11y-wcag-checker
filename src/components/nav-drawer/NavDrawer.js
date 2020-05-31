import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import FilterList from '../filterList/FilterList';
import { Hidden } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { toggleNavMenu } from '../../redux/nav/navActions';
import { selectOpenNav } from '../../redux/nav/navSelector';

import useStyles from './NavDrawerStyles';

function NavDrawer(props) {
  const classes = useStyles();
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.down('xs'));
  const navDrawerOpen = useSelector(selectOpenNav);
  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    dispatch(toggleNavMenu());
  };

  return (
    <nav>
      <Hidden smUp implementation='css'>
        <Drawer
          variant='temporary'
          anchor='left'
          open={navDrawerOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <FilterList />
        </Drawer>
      </Hidden>
      <Hidden xsDown>
        <Drawer
          className={classes.drawer}
          variant='permanent'
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <FilterList />
        </Drawer>
      </Hidden>
    </nav>
  );
}

export default NavDrawer;

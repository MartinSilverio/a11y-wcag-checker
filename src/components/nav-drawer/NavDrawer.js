import React, { useCallback } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import FilterList from '../filterList/FilterList';
import { Hidden } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { toggleNavMenu } from '../../redux/nav/navActions';
import { toggleLevel, toggleTag } from '../../redux/orm/ormActions';
import { selectOpenNav } from '../../redux/nav/navSelector';
import { selectLevels, selectTags } from '../../redux/orm/ormSelectors';

import useStyles from './NavDrawerStyles';

function NavDrawer(props) {
  const classes = useStyles();
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.down('xs'));
  const navDrawerOpen = useSelector(selectOpenNav);
  const complianceLevels = useSelector((state) => selectLevels(state));
  const tags = useSelector((state) => selectTags(state));

  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    dispatch(toggleNavMenu());
  };

  const handleLevelFilters = useCallback(
    (value) => {
      dispatch(toggleLevel(value));
    },
    [dispatch]
  );

  const handleTagFilters = useCallback(
    (value) => {
      dispatch(toggleTag(value));
    },
    [dispatch]
  );

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
          <FilterList
            title='Compliance Level'
            listOfFilters={complianceLevels}
            onFilterCheck={handleLevelFilters}
          />
          <FilterList
            title='Filter By Tags'
            listOfFilters={tags}
            onFilterCheck={handleTagFilters}
          />
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
          <FilterList
            title='Compliance Level'
            listOfFilters={complianceLevels}
            onFilterCheck={handleLevelFilters}
          />
          <FilterList
            title='Filter By Tags'
            listOfFilters={tags}
            onFilterCheck={handleTagFilters}
          />
        </Drawer>
      </Hidden>
    </nav>
  );
}

export default NavDrawer;

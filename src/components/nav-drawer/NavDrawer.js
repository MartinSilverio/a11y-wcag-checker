import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Hidden, Checkbox } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { toggleNavMenu } from '../../redux/nav/navActions';
import { selectOpenNav } from '../../redux/nav/navSelector';
import ListSectionTitle from '../list-section-title/ListSectionTitle';
import { selectComplianceLevels } from '../../redux/filter/filterSelector';
import { toggleComplianceLevel } from '../../redux/filter/filterActions';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
}));

function NavDrawer(props) {
  const classes = useStyles();
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.down('xs'));
  const navDrawerOpen = useSelector(selectOpenNav);
  const filters = useSelector(selectComplianceLevels);
  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    dispatch(toggleNavMenu());
  };

  const handleFilterCheckbox = (value) => () => {
    dispatch(toggleComplianceLevel(value));
  };

  const drawer = (
    <div className={classes.drawerContainer}>
      <List subheader={<ListSectionTitle title={'Compliance Level'} />}>
        <ListItem button onClick={handleFilterCheckbox('A')}>
          <Checkbox
            checked={filters['A']}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': 'Single A Compliance' }}
          />
          <ListItemText primary={'A'} />
        </ListItem>
        <ListItem button onClick={handleFilterCheckbox('AA')}>
          <Checkbox
            checked={filters['AA']}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': 'Double A Compliance' }}
          />
          <ListItemText primary={'AA'} />
        </ListItem>
        <ListItem button onClick={handleFilterCheckbox('AAA')}>
          <Checkbox
            checked={filters['AAA']}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': 'Triple A Compliance' }}
          />
          <ListItemText primary={'AAA'} />
        </ListItem>
      </List>
    </div>
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
          {drawer}
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
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
}

export default NavDrawer;

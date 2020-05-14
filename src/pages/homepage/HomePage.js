import React from 'react';
import { makeStyles, Toolbar } from '@material-ui/core';
import WcagCardList from '../../components/wcag-card-list/WcagCardList';

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(4),
  },
}));

function HomePage() {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <Toolbar />
      <WcagCardList />
    </main>
  );
}

export default HomePage;

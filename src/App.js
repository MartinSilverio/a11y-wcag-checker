import React from 'react';
import { makeStyles, CssBaseline } from '@material-ui/core';
import Header from './components/header/Header';
import NavDrawer from './components/nav-drawer/NavDrawer';
import HomePage from './pages/homepage/HomePage';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

//TODO Remove this later after normalizing data
// const formattedData = WCAG_DATA.map(({ guidelines, ...otherData }) => {
//   const guideline_ref_ids = guidelines.map((item) => item.ref_id);
//   return {
//     ...otherData,
//     guideline_ref_ids,
//   };
// });

// console.log(formattedData);

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <NavDrawer />
      <HomePage />
    </div>
  );
}

export default App;

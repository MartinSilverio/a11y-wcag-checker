import React from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import WcagCard from '../wcag-card/WcagCard';
import { AnimatePresence } from 'framer-motion';
import { selectFilteredWcags } from '../../redux/orm/ormSelectors';

import useStyles from './WcagCardListStyles';

function WcagCardList() {
  const fitleredResults = useSelector((state) => selectFilteredWcags(state));
  const classes = useStyles();
  console.log('called');

  return (
    <AnimatePresence>
      <Grid
        container
        direction='column'
        spacing={2}
        className={classes.gridList}
      >
        {fitleredResults.map((wcagSuccessCriteria) => {
          const { ref_id } = wcagSuccessCriteria;
          return <WcagCard key={ref_id} wcagGuideline={wcagSuccessCriteria} />;
        })}
      </Grid>
    </AnimatePresence>
  );
}

export default WcagCardList;

// TODO Clean this up, for now used for reference
// const ormAllTags = useSelector((state) => ormTags(state));
// // const ormTag = useSelector((state) => ormTags(state, 'video'));
// const ormTagWcag = useSelector((state) => ormTagWcags(state, 'video'));
// const ormTagWcagC = useSelector((state) => ormTagWcagsCount(state));
// const count = useSelector((state) => wcagCount(state, 'AAA'));
// const ormLevelWcag = useSelector((state) =>
//   ormLevelWcags(state, ['A', 'AA', 'AAA'])
// );

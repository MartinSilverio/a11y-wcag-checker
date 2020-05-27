import React from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import WcagCard from '../wcag-card/WcagCard';
import { selectWcag } from '../../redux/wcag/wcagSelector';
import { selectComplianceLevels } from '../../redux/filter/filterSelector';
import { AnimatePresence } from 'framer-motion';
// import { toggleSuccessCriteria } from '../../redux/wcag/wcagActions';

import useStyles from './WcagCardListStyles';

function WcagCardList() {
  const wcagSuccessCriterias = useSelector(selectWcag);
  const complianceLevels = useSelector(selectComplianceLevels);
  const classes = useStyles();
  // console.log('called');

  return (
    <AnimatePresence>
      <Grid
        container
        direction='column'
        spacing={2}
        className={classes.gridList}
      >
        {wcagSuccessCriterias.map((wcagSuccessCriteria) => {
          const { ref_id, level } = wcagSuccessCriteria;
          return (
            complianceLevels[level] && (
              <WcagCard key={ref_id} wcagGuideline={wcagSuccessCriteria} />
            )
          );
        })}
      </Grid>
    </AnimatePresence>
  );
}

export default WcagCardList;

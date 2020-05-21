import React from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import WcagCard from '../wcag-card/WcagCard';
import { selectWcag } from '../../redux/wcag/wcagSelector';
import { selectComplianceLevels } from '../../redux/filter/filterSelector';
// import { toggleSuccessCriteria } from '../../redux/wcag/wcagActions';

function WcagCardList() {
  const wcagSuccessCriterias = useSelector(selectWcag);
  const complianceLevels = useSelector(selectComplianceLevels);
  // console.log('called');

  return (
    <Grid container direction='column' spacing={2}>
      {wcagSuccessCriterias.map((wcagSuccessCriteria) => {
        const { ref_id, level } = wcagSuccessCriteria;
        return (
          complianceLevels[level] && (
            <WcagCard key={ref_id} wcagGuideline={wcagSuccessCriteria} />
          )
        );
      })}
    </Grid>
  );
}

export default WcagCardList;

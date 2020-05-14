import React from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import WcagCard from '../wcag-card/WcagCard';

function WcagCardList() {
  const wcagList = useSelector((state) => state.wcag);

  return (
    <Grid container direction='column' spacing={2}>
      {wcagList.map((wcagListItem) => {
        const { ref_id } = wcagListItem;
        return <WcagCard key={ref_id} wcagListItem={wcagListItem} />;
      })}
    </Grid>
  );
}

export default WcagCardList;

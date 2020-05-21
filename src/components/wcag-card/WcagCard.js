import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import WcagCheckbox from '../wcag-checkbox/WcagCheckbox';
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Divider,
} from '@material-ui/core';

import { toggleSuccessCriteria } from '../../redux/wcag/wcagActions';

function WcagCard({ wcagGuideline }) {
  const {
    ref_id,
    title,
    short_description,
    url,
    checked,
    level,
  } = wcagGuideline;
  const dispatch = useDispatch();
  const handleToggleSuccessCriteria = useCallback(
    () => dispatch(toggleSuccessCriteria(ref_id)),
    [dispatch, ref_id]
  );

  return (
    <Grid item xs={12}>
      <Card>
        <Grid container>
          <Grid
            item
            container
            xs={1}
            alignItems='center'
            justify='center'
            onClick={handleToggleSuccessCriteria}
          >
            <WcagCheckbox checked={checked} />
          </Grid>
          <Divider orientation='vertical' flexItem />

          <Grid item xs={10}>
            <CardHeader title={`${ref_id}: ${title}`} />
            <CardContent>
              <Typography>Compliance Level: {level}</Typography>
              <Typography>{short_description}</Typography>
              <Typography>Url: {url}</Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}

export default WcagCard;

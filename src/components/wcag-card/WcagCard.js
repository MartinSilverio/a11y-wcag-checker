import React from 'react';
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
} from '@material-ui/core';

function WcagCard(props) {
  const { title, description, url } = props.wcagListItem;

  return (
    <Grid item xs={12}>
      <Card>
        <CardHeader title={title} />
        <CardContent>
          <Typography>{description}</Typography>
          <Typography>Url: {url}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default WcagCard;

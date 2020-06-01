import React, { useCallback, useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import ReactTags from 'react-tag-autocomplete';
import WcagCheckbox from '../wcag-checkbox/WcagCheckbox';
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Link,
  CardActions,
  IconButton,
  Collapse,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { motion } from 'framer-motion';

import {
  toggleSuccessCriteria,
  deleteTag,
  addTag,
} from '../../redux/wcag/wcagActions';
import useStyles from './WcagCardStyles';

function WcagCard({ wcagGuideline }) {
  const [expanded, setExpanded] = useState(false);
  const {
    ref_id,
    title,
    short_description,
    description,
    url,
    checked,
    level,
    special_cases,
    notes,
    tags,
  } = wcagGuideline;
  const dispatch = useDispatch();
  const handleToggleSuccessCriteria = useCallback(
    () => dispatch(toggleSuccessCriteria(ref_id)),
    [dispatch, ref_id]
  );
  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleAddTag = (tag) => {
    console.log(tag);
    dispatch(addTag(tag, ref_id));
  };
  const handleDeleteTag = (index) => {
    console.log('Delete triggered');
    dispatch(deleteTag(index, ref_id));
  };

  const classes = useStyles();
  // console.log(ref_id);
  // console.log(special_cases);
  // console.log(`${ref_id}: ${title}`.length);

  return (
    <Grid item xs={12}>
      <motion.div
        className='card-div'
        key={ref_id}
        exit={{ opacity: 0 }}
        positionTransition={{ type: 'tween' }}
      >
        <Card>
          <Grid container>
            <Grid
              item
              container
              xs={1}
              alignItems='center'
              justify='center'
              className={classes.divider}
              onClick={handleToggleSuccessCriteria}
            >
              <WcagCheckbox checked={checked} />
            </Grid>

            <Grid item xs={11}>
              <CardHeader
                disableTypography
                title={
                  <Typography variant='h3'>
                    {ref_id}: {title}
                  </Typography>
                }
              />
              <CardContent>
                <Typography paragraph>
                  <strong>Compliance Level:</strong> {level}
                </Typography>
                <Typography paragraph>{short_description}</Typography>
                <Link href={url} variant='body1' className={classes.linkMargin}>
                  External link to the W3C documentation on {ref_id}
                </Link>

                <Fragment>
                  <Typography>
                    <label for={`tags-${ref_id}`}>
                      <strong>Tags for {ref_id}</strong>
                    </label>
                  </Typography>
                  <ReactTags
                    id={`tags-${ref_id}`}
                    tags={tags}
                    handleDelete={handleDeleteTag}
                    handleAddition={handleAddTag}
                    allowNew
                    allowBackspace={false}
                    suggestions={[{ id: 5, name: 'Banana' }]}
                  />
                </Fragment>
              </CardContent>
              <CardActions className={classes.buttonJustify}>
                <IconButton
                  aria-label={`Show more about ${ref_id}`}
                  onClick={handleToggleExpand}
                  aria-expanded={expanded}
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout='auto' unmountOnExit>
                <CardContent>
                  <Typography>{description}</Typography>
                  <ul>
                    {special_cases &&
                      special_cases.map(({ title }, ndx) => (
                        <li key={ndx}>
                          <Typography paragraph>{title}</Typography>
                        </li>
                      ))}
                  </ul>

                  {notes && (
                    <Fragment>
                      <Typography variant='h4'>Notes</Typography>
                      <Typography>{notes[0].content}</Typography>
                    </Fragment>
                  )}
                </CardContent>
              </Collapse>
            </Grid>
          </Grid>
        </Card>
      </motion.div>
    </Grid>
  );
}

export default WcagCard;

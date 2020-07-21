import React, { useCallback, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactTags from 'react-tag-autocomplete';
import WcagCheckbox from '../wcag-checkbox/WcagCheckbox';
import { Typography, IconButton, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { motion } from 'framer-motion';

import { toggleSuccessCriteria } from '../../redux/wcag/wcagActions';
import { deleteTagFromWcag, addTagToWcag } from '../../redux/orm/ormActions';
import { selectTags } from '../../redux/orm/ormSelectors';

import './WcagCard.scss';

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
  const allTags = useSelector((state) => selectTags(state));
  const dispatch = useDispatch();
  const handleToggleSuccessCriteria = useCallback(
    () => dispatch(toggleSuccessCriteria(ref_id)),
    [dispatch, ref_id]
  );
  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleAddTag = (tag) => {
    let tagPayload = tag.id
      ? tag
      : {
          ...tag,
          id: tag.name,
        };
    dispatch(addTagToWcag(tagPayload, ref_id));
  };
  const handleDeleteTag = (index) => {
    dispatch(deleteTagFromWcag(tags[index].id, ref_id));
  };

  return (
    <motion.div
      className='wcag-card'
      key={ref_id}
      exit={{ opacity: 0 }}
      positionTransition={{ type: 'tween' }}
    >
      <div
        className='card-checkbox-container'
        onClick={handleToggleSuccessCriteria}
      >
        <WcagCheckbox checked={checked} />
      </div>

      <div className='card-content'>
        <div className='card-header'>
          <h3>
            {ref_id}: {title}
          </h3>
        </div>
        <div className='card-body'>
          <p>
            <strong>Compliance Level:</strong> {level}
          </p>
          <p>{short_description}</p>
          <a href={url} variant='body1' className='card-link'>
            External link to the W3C documentation on {ref_id}
          </a>

          <div className='card-tags'>
            <label htmlFor={`tags-${ref_id}`}>
              <strong>Tags for {ref_id}</strong>
            </label>
            <ReactTags
              id={`tags-${ref_id}`}
              tags={tags}
              onDelete={handleDeleteTag}
              onAddition={handleAddTag}
              allowNew
              allowBackspace={false}
              suggestions={allTags}
            />
          </div>
        </div>
        <div className='card-footer'>
          <IconButton
            aria-label={`Show more about ${ref_id}`}
            onClick={handleToggleExpand}
            aria-expanded={expanded}
          >
            <ExpandMoreIcon />
          </IconButton>
        </div>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <div className='card-more-info'>
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
          </div>
        </Collapse>
      </div>
    </motion.div>
  );
}

export default WcagCard;

import React, { useCallback, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactTags from 'react-tag-autocomplete';
import WcagCheckbox from '../wcag-checkbox/WcagCheckbox';
import Collapsible from '../collapsible/Collapsible';
import { motion } from 'framer-motion';

import { toggleWcag } from '../../redux/orm/ormActions';
import { deleteTagFromWcag, addTagToWcag } from '../../redux/orm/ormActions';
import { selectTags } from '../../redux/orm/ormSelectors';

import './WcagCard.scss';

function WcagCard({ wcagGuideline }) {
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
  const handleToggleWcag = useCallback(() => dispatch(toggleWcag(ref_id)), [
    dispatch,
    ref_id,
  ]);

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      positionTransition={{ type: 'tween' }}
    >
      <div className='card-checkbox-container' onClick={handleToggleWcag}>
        <WcagCheckbox checked={checked} />
      </div>

      <div className='card-content'>
        <div className='card-header'>
          <h3>
            {ref_id}: {title}
          </h3>
        </div>
        <div className='card-body'>
          <p className='short-description'>{short_description}</p>
          <p className='compliance-level'>
            <strong>Compliance Level:</strong> {level}
          </p>
          <p>
            <a href={url} variant='body1' className='card-link'>
              External link to the W3C documentation on {ref_id}
            </a>
          </p>

          <div className='card-tags'>
            <label htmlFor={`tags-${ref_id}`}>
              <strong>Tags for {ref_id}:</strong>
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
          <Collapsible
            headerAriaLabel={`Show more about ${ref_id}`}
            title='Detailed Info'
          >
            <div className='card-more-info'>
              <p className='long-description'>{description}</p>
              <ul>
                {special_cases &&
                  special_cases.map(({ title }, ndx) => (
                    <li key={ndx}>
                      <p>{title}</p>
                    </li>
                  ))}
              </ul>

              {notes && (
                <Fragment>
                  <h4>Notes</h4>
                  <p>{notes[0].content}</p>
                </Fragment>
              )}
            </div>
          </Collapsible>
        </div>
      </div>
    </motion.div>
  );
}

export default WcagCard;

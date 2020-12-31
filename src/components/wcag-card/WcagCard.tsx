import React, { useCallback, Fragment } from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useDispatch, useSelector } from 'react-redux';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import ReactTags from 'react-tag-autocomplete';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../wcag-checkbox/WcagCheckbox' was resolve... Remove this comment to see the full error message
import WcagCheckbox from '../wcag-checkbox/WcagCheckbox';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../collapsible/Collapsible' was resolved t... Remove this comment to see the full error message
import Collapsible from '../collapsible/Collapsible';
import { motion } from 'framer-motion';

import { toggleWcag } from '../../redux/orm/ormActions';
import { deleteTagFromWcag, addTagToWcag } from '../../redux/orm/ormActions';
import { selectTags } from '../../redux/orm/ormSelectors';

import './WcagCard.scss';

function WcagCard({
  wcagGuideline
}: any) {
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
  const allTags = useSelector((state: any) => selectTags(state));
  const dispatch = useDispatch();
  const handleToggleWcag = useCallback(() => dispatch(toggleWcag(ref_id)), [
    dispatch,
    ref_id,
  ]);

  const handleAddTag = (tag: any) => {
    let tagPayload = tag.id
      ? tag
      : {
          ...tag,
          id: tag.name,
        };
    dispatch(addTagToWcag(tagPayload, ref_id));
  };
  const handleDeleteTag = (index: any) => {
    dispatch(deleteTagFromWcag(tags[index].id, ref_id));
  };

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <motion.div
      className='wcag-card'
      key={ref_id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      positionTransition={{ type: 'tween' }}
    >
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className='card-checkbox-container' onClick={handleToggleWcag}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <WcagCheckbox checked={checked} />
      </div>

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className='card-content'>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div className='card-header'>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <h3>
            {ref_id}: {title}
          </h3>
        </div>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div className='card-body'>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <p className='short-description'>{short_description}</p>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <p className='compliance-level'>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <strong>Compliance Level:</strong> {level}
          </p>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <p>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <a href={url} variant='body1' className='card-link'>
              External link to the W3C documentation on {ref_id}
            </a>
          </p>

          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <div className='card-tags'>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <label htmlFor={`tags-${ref_id}`}>
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <strong>Tags for {ref_id}:</strong>
            </label>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div className='card-footer'>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Collapsible
            headerAriaLabel={`Show more about ${ref_id}`}
            title='Detailed Info'
          >
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div className='card-more-info'>
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <p className='long-description'>{description}</p>
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <ul>
                {special_cases &&
                  special_cases.map(({
                    title
                  }: any, ndx: any) => (
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <li key={ndx}>
                      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                      <p>{title}</p>
                    </li>
                  ))}
              </ul>

              {notes && (
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Fragment>
                  {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <h4>Notes</h4>
                  {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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

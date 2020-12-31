import React from 'react';
import { motion } from 'framer-motion';
import './CollapsibleHeader.scss';

function IconButton({
  expanded,
  className,
  onClick,
  icon,
  text,
  ...otherProps
}: any) {
  const variants = {
    collapse: { rotate: 0 },
    expand: { rotate: 90 },
  };
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <button
      className={`icon-button ${className ? className : ''}`}
      aria-expanded={expanded}
      onClick={onClick}
      {...otherProps}
    >
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <motion.i
        initial={false}
        className='fas fa-chevron-right'
        variants={variants}
        transition={{ type: 'tween' }}
        animate={expanded ? 'expand' : 'collapse'}
      ></motion.i>
      {text}
    </button>
  );
}

export default IconButton;

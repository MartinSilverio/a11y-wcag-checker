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
}) {
  const variants = {
    collapse: { rotate: 0 },
    expand: { rotate: 90 },
  };
  return (
    <button
      className={`icon-button ${className ? className : ''}`}
      aria-expanded={expanded}
      onClick={onClick}
      {...otherProps}
    >
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

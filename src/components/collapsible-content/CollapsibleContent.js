import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CollapsibleContent.scss';

function CollapsibleContent({ expanded, children }) {
  return (
    <div
      className={`collapsible-content ${expanded ? `expanded` : `collapsed`}`}
      aria-expanded={expanded}
      role='region'
    >
      <AnimatePresence>
        {expanded && (
          <motion.section
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ ease: 'easeInOut', duration: 0.3 }}
          >
            <motion.div
              variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
              transition={{ duration: 0.8 }}
              className='content-placeholder'
            ></motion.div>
            {children}
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CollapsibleContent;

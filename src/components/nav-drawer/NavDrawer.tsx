import React, { useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import FilterList from '../filterList/FilterList';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLevel, toggleTag } from '../../redux/orm/ormActions';
import { selectOpenNav } from '../../redux/nav/navSelector';
import { selectLevels, selectTags } from '../../redux/orm/ormSelectors';
import useWindoDimensions from '../../util/useWindowDimensions';
import { MOBILE_BREAKPOINT } from '../../util/constants';

import './NavDrawer.scss';

function NavDrawer({ className }: any) {
  const navDrawerOpen = useSelector(selectOpenNav);
  const complianceLevels = useSelector((state: any) => selectLevels(state));
  const tags = useSelector((state: any) => selectTags(state));
  const { width } = useWindoDimensions();

  const dispatch = useDispatch();

  const handleLevelFilters = useCallback(
    (value) => {
      dispatch(toggleLevel(value));
    },
    [dispatch]
  );

  const handleTagFilters = useCallback(
    (value) => {
      dispatch(toggleTag(value));
    },
    [dispatch]
  );

  return (
    <AnimatePresence>
      {(width > MOBILE_BREAKPOINT ||
        (navDrawerOpen && width <= MOBILE_BREAKPOINT)) && (
        <motion.aside
          key='nav-drawer'
          className={`nav-drawer ${
            navDrawerOpen ? `drawer-open` : `drawer-closed`
          }`}
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.2 }}
          exit={{ x: '-100%' }}
        >
          <FilterList
            title='Compliance Level'
            listOfFilters={complianceLevels}
            onFilterCheck={handleLevelFilters}
          />
          <FilterList
            title='Filter By Tags'
            listOfFilters={tags}
            onFilterCheck={handleTagFilters}
          />
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

export default NavDrawer;

// animate={
//   (navDrawerOpen && width <= MOBILE_BREAKPOINT) ||
//   width > MOBILE_BREAKPOINT
//     ? 'open'
//     : 'closed'
// }

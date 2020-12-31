import React, { useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../filterList/FilterList' was resolved to ... Remove this comment to see the full error message
import FilterList from '../filterList/FilterList';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useSelector, useDispatch } from 'react-redux';
import { toggleLevel, toggleTag } from '../../redux/orm/ormActions';
import { selectOpenNav } from '../../redux/nav/navSelector';
import { selectLevels, selectTags } from '../../redux/orm/ormSelectors';
import useWindoDimensions from '../../util/useWindowDimensions';
import { MOBILE_BREAKPOINT } from '../../util/constants';

import './NavDrawer.scss';

function NavDrawer({
  className
}: any) {
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
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <AnimatePresence>
      {(width > MOBILE_BREAKPOINT ||
        (navDrawerOpen && width <= MOBILE_BREAKPOINT)) && (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <FilterList
            title='Compliance Level'
            listOfFilters={complianceLevels}
            onFilterCheck={handleLevelFilters}
          />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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

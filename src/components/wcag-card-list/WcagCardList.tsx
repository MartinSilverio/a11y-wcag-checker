import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useSelector } from 'react-redux';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../wcag-card/WcagCard' was resolved to 'C:... Remove this comment to see the full error message
import WcagCard from '../wcag-card/WcagCard';
import { AnimatePresence } from 'framer-motion';
import { selectFilteredWcags } from '../../redux/orm/ormSelectors';

import './WcagCardList.scss';

function WcagCardList() {
  const fitleredResults = useSelector((state: any) => selectFilteredWcags(state));

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className='wcag-card-list'>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <AnimatePresence>
        {fitleredResults.map((wcagSuccessCriteria: any) => {
          const { ref_id } = wcagSuccessCriteria;
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          return <WcagCard key={ref_id} wcagGuideline={wcagSuccessCriteria} />;
        })}
      </AnimatePresence>
    </div>
  );
}

export default WcagCardList;

// TODO Clean this up, for now used for reference
// const ormAllTags = useSelector((state) => ormTags(state));
// // const ormTag = useSelector((state) => ormTags(state, 'video'));
// const ormTagWcag = useSelector((state) => ormTagWcags(state, 'video'));
// const ormTagWcagC = useSelector((state) => ormTagWcagsCount(state));
// const count = useSelector((state) => wcagCount(state, 'AAA'));
// const ormLevelWcag = useSelector((state) =>
//   ormLevelWcags(state, ['A', 'AA', 'AAA'])
// );

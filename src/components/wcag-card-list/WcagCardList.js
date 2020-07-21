import React from 'react';
import { useSelector } from 'react-redux';
import WcagCard from '../wcag-card/WcagCard';
import { AnimatePresence } from 'framer-motion';
import { selectFilteredWcags } from '../../redux/orm/ormSelectors';

import './WcagCardList.scss';

function WcagCardList() {
  const fitleredResults = useSelector((state) => selectFilteredWcags(state));

  return (
    <div className='wcag-card-list'>
      <AnimatePresence>
        {fitleredResults.map((wcagSuccessCriteria) => {
          const { ref_id } = wcagSuccessCriteria;
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

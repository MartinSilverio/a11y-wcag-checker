import React from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/header/Header' was resolved t... Remove this comment to see the full error message
import Header from './components/header/Header';
// @ts-expect-error ts-migrate(6142) FIXME: Module './pages/homepage/HomePage' was resolved to... Remove this comment to see the full error message
import HomePage from './pages/homepage/HomePage';

import './App.scss';

//TODO Remove this later after normalizing data
// const formattedData = WCAG_DATA.map(({ guidelines, ...otherData }) => {
//   const guideline_ref_ids = guidelines.map((item) => item.ref_id);
//   return {
//     ...otherData,
//     guideline_ref_ids,
//   };
// });

// console.log(formattedData);

function App() {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div id='root-grid-container'>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Header />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <HomePage />
    </div>
  );
}

export default App;

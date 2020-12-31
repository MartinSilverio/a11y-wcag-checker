import React from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/wcag-card-list/WcagCardLi... Remove this comment to see the full error message
import WcagCardList from '../../components/wcag-card-list/WcagCardList';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/nav-drawer/NavDrawer' was... Remove this comment to see the full error message
import NavDrawer from '../../components/nav-drawer/NavDrawer';

import './HomePage.scss';

function HomePage() {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <main id='main-container'>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <NavDrawer />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <WcagCardList />
    </main>
  );
}

export default HomePage;

import React from 'react';
import WcagCardList from '../../components/wcag-card-list/WcagCardList';
import NavDrawer from '../../components/nav-drawer/NavDrawer';

import './HomePage.scss';

function HomePage() {
  return (
    <main id='main-container'>
      <NavDrawer />
      <WcagCardList />
    </main>
  );
}

export default HomePage;

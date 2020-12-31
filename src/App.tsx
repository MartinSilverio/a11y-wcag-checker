import React from 'react';
import Header from './components/header/Header';
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
    <div id='root-grid-container'>
      <Header />
      <HomePage />
    </div>
  );
}

export default App;

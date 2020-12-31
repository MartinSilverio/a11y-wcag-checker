import React from 'react';
import './ListSectionTitle.scss';

function ListSectionTitle({
  title
}: any) {
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <h2 className='list-section-title'>{title}</h2>;
}

export default ListSectionTitle;

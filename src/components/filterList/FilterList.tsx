import React from 'react';
import { List } from '@material-ui/core';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../filterItem/FilterItem' was resolved to ... Remove this comment to see the full error message
import FilterItem from '../filterItem/FilterItem';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../list-section-title/ListSectionTitle' wa... Remove this comment to see the full error message
import ListSectionTitle from '../list-section-title/ListSectionTitle';

function FilterList({
  title,
  listOfFilters,
  onFilterCheck
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <List subheader={<ListSectionTitle title={title} />}>
      {listOfFilters.map(({
        id,
        name,
        checked
      }: any, ndx: any) => (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FilterItem
          key={ndx}
          onFilterCheck={onFilterCheck}
          filterValue={id}
          checked={checked}
          ariaLabel={`${name}`}
        />
      ))}
    </List>
  );
}

export default FilterList;

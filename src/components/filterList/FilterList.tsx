import React from 'react';
import { List } from '@material-ui/core';
import FilterItem from '../filterItem/FilterItem';
import ListSectionTitle from '../list-section-title/ListSectionTitle';

function FilterList({ title, listOfFilters, onFilterCheck }) {
  return (
    <List subheader={<ListSectionTitle title={title} />}>
      {listOfFilters.map(({ id, name, checked }, ndx) => (
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

import React from 'react';
import { ListItem, ListItemText, Checkbox } from '@material-ui/core';

function FilterItem({ onFilterCheck, filterValue, checked, ariaLabel }: any) {
  return (
    <ListItem
      button
      onClick={() => {
        onFilterCheck(filterValue);
      }}
    >
      <Checkbox
        checked={checked}
        tabIndex={-1}
        disableRipple
        inputProps={{ 'aria-labelledby': ariaLabel }}
      />
      <ListItemText primary={filterValue} />
    </ListItem>
  );
}

export default FilterItem;

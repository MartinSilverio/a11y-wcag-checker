import React from 'react';
import { ListItem, ListItemText, Checkbox } from '@material-ui/core';

function FilterItem({
  onFilterCheck,
  filterValue,
  checked,
  ariaLabel
}: any) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ListItem
      button
      onClick={() => {
        onFilterCheck(filterValue);
      }}
    >
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Checkbox
        checked={checked}
        tabIndex={-1}
        disableRipple
        inputProps={{ 'aria-labelledby': ariaLabel }}
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <ListItemText primary={filterValue} />
    </ListItem>
  );
}

export default FilterItem;

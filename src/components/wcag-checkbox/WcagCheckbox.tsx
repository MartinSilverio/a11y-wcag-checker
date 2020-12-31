import React from 'react';
import { Checkbox } from '@material-ui/core';

function WcagCheckbox({
  checked
}: any) {
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <Checkbox checked={checked} />;
}

export default WcagCheckbox;

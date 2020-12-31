import React, { useState, Fragment } from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../collapsible-header/CollapsibleHeader' w... Remove this comment to see the full error message
import CollapsibleHeader from '../collapsible-header/CollapsibleHeader';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../collapsible-content/CollapsibleContent'... Remove this comment to see the full error message
import CollapsibleContent from '../collapsible-content/CollapsibleContent';

function Collapsible({
  headerAriaLabel,
  title,
  children
}: any) {
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Fragment>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <CollapsibleHeader
        aria-label={headerAriaLabel}
        text={title}
        onClick={handleToggleExpand}
        expanded={expanded}
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <CollapsibleContent expanded={expanded}>{children}</CollapsibleContent>
    </Fragment>
  );
}

export default Collapsible;

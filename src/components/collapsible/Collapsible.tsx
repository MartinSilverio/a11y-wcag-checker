import React, { useState, Fragment } from 'react';
import CollapsibleHeader from '../collapsible-header/CollapsibleHeader';
import CollapsibleContent from '../collapsible-content/CollapsibleContent';

function Collapsible({ headerAriaLabel, title, children }) {
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Fragment>
      <CollapsibleHeader
        aria-label={headerAriaLabel}
        text={title}
        onClick={handleToggleExpand}
        expanded={expanded}
      />
      <CollapsibleContent expanded={expanded}>{children}</CollapsibleContent>
    </Fragment>
  );
}

export default Collapsible;

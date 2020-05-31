import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List } from '@material-ui/core';
import FilterItem from '../filterItem/FilterItem';
import { selectComplianceLevels } from '../../redux/filter/filterSelector';
import { toggleComplianceLevel } from '../../redux/filter/filterActions';
import ListSectionTitle from '../list-section-title/ListSectionTitle';

function FilterList({ title }) {
  const dispatch = useDispatch();
  const complianceLevels = useSelector(selectComplianceLevels);

  const handleFilterCheckbox = useCallback(
    (value) => {
      dispatch(toggleComplianceLevel(value));
    },
    [dispatch]
  );

  return (
    <List subheader={<ListSectionTitle title={'Compliance Level'} />}>
      {Object.keys(complianceLevels).map((complianceLevel, ndx) => (
        <FilterItem
          key={ndx}
          onFilterCheck={handleFilterCheckbox}
          filterValue={complianceLevel}
          checked={complianceLevels[complianceLevel]}
          ariaLabel={`"${complianceLevel}" Compliance`}
        />
      ))}
    </List>
  );
}

export default FilterList;

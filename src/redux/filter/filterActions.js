import FilterActionTypes from './filterTypes';

export const toggleComplianceLevel = (complianceLevel) => ({
  type: FilterActionTypes.TOGGLE_COMPLIANCE_LEVEL,
  payload: complianceLevel,
});

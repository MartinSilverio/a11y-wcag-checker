import FilterActionTypes from './filterTypes';

export const toggleComplianceLevel = (complianceLevel: any) => ({
  type: FilterActionTypes.TOGGLE_COMPLIANCE_LEVEL,
  payload: complianceLevel
});

export const toggleTag = (tag: any) => ({
  type: FilterActionTypes.TOGGLE_TAG,
  payload: tag
});

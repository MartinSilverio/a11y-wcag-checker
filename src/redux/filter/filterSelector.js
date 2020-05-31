import { createSelector } from 'reselect';

export const selectFilters = (state) => state.filter;

export const selectComplianceLevels = createSelector(
  [selectFilters],
  (filters) => filters.success_criteria
);

export const selectTags = createSelector(
  [selectFilters],
  (filters) => filters.tags
);

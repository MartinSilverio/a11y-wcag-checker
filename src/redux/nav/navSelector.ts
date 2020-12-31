import { createSelector } from 'reselect';

const selectNav = (state) => state.nav;

export const selectOpenNav = createSelector([selectNav], (nav) => nav.openNav);

import { createSelector } from 'reselect';

const selectNav = (state: any) => state.nav;

export const selectOpenNav = createSelector([selectNav], (nav) => nav.openNav);

import { createSelector } from 'reselect';

export const selectWcag = (state) => state.wcag;

export const selectWcagById = createSelector([selectWcag], (wcag) => wcag.byId);

export const selectWcagAllIds = createSelector(
  [selectWcag],
  (wcag) => wcag.allIds
);

export const selectWcagAllData = createSelector(
  [selectWcagById, selectWcagAllIds],
  (wcagById, wcagAllIds) => {
    return wcagAllIds.map((wcagId) => wcagById[wcagId]);
  }
);

// export const selectWcagPercievable = createSelector([selectWcag], (wcag) => {
//   return wcag.find((wcagSection) => {
//     return wcagSection.title === WCAG_SECTIONS.PERCEIVABLE;
//   }).guidelines;
// });
// export const selectWcagPercievableSuccessCriteria = createSelector(
//   [selectWcagPercievable],
//   (wcagPercievable) => {
//     return wcagPercievable.reduce((accumulatedArr, guideline) => {
//       accumulatedArr.push(...guideline.success_criteria);
//       return accumulatedArr;
//     }, []);
//   }
// );
// export const selectWcagOperable = createSelector([selectWcag], (wcag) => {
//   return wcag.find((wcagSection) => {
//     return wcagSection.title === WCAG_SECTIONS.OPERABLE;
//   }).guidelines;
// });
// export const selectWcagOperableSuccessCriteria = createSelector(
//   [selectWcagOperable],
//   (wcagPercievable) => {
//     return wcagPercievable.reduce((accumulatedArr, guideline) => {
//       accumulatedArr.push(...guideline.success_criteria);
//       return accumulatedArr;
//     }, []);
//   }
// );
// export const selectWcagUnderstandable = createSelector([selectWcag], (wcag) => {
//   return wcag.find((wcagSection) => {
//     return wcagSection.title === WCAG_SECTIONS.UNDERSTANDABLE;
//   }).guidelines;
// });
// export const selectWcagUnderstandableSuccessCriteria = createSelector(
//   [selectWcagUnderstandable],
//   (wcagPercievable) => {
//     return wcagPercievable.reduce((accumulatedArr, guideline) => {
//       accumulatedArr.push(...guideline.success_criteria);
//       return accumulatedArr;
//     }, []);
//   }
// );
// export const selectWcagRobust = createSelector([selectWcag], (wcag) => {
//   return wcag.find((wcagSection) => {
//     return wcagSection.title === WCAG_SECTIONS.ROBUST;
//   }).guidelines;
// });
// export const selectWcagRobustSuccessCriteria = createSelector(
//   [selectWcagRobust],
//   (wcagPercievable) => {
//     return wcagPercievable.reduce((accumulatedArr, guideline) => {
//       accumulatedArr.push(...guideline.success_criteria);
//       return accumulatedArr;
//     }, []);
//   }
// );

// export const selectAllSuccessCriteria = createSelector(
//   [
//     selectWcagPercievableSuccessCriteria,
//     selectWcagOperableSuccessCriteria,
//     selectWcagUnderstandableSuccessCriteria,
//     selectWcagRobustSuccessCriteria,
//   ],
//   (pSCriteria, oSCriteria, uSCriteria, rSCriteria) => {
//     return [...pSCriteria, ...oSCriteria, ...uSCriteria, ...rSCriteria];
//   }
// );

// export const selectAllGuideLines = createSelector(
//   [
//     selectWcagPercievable,
//     selectWcagOperable,
//     selectWcagUnderstandable,
//     selectWcagRobust,
//   ],
//   (pSCriteria, oSCriteria, uSCriteria, rSCriteria) => {
//     return [...pSCriteria, ...oSCriteria, ...uSCriteria, ...rSCriteria];
//   }
// );

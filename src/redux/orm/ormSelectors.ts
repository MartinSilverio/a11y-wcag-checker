import { createSelector } from 'redux-orm';
import { orm } from './ormReducer';

//Tags
export const selectTags = createSelector(orm.Tag);

//Levels
export const selectLevels = createSelector(orm.Level);

//Filtered
export const selectFilteredWcags = createSelector(orm, ({ Wcag }) => {
  return Wcag.all()
    .toModelArray()
    .filter((wcag) => {
      const level = wcag.level.ref;
      const hasFilteredLevel = level.checked;

      const tags = wcag.tags.toModelArray();

      const hasFilteredTags = tags.filter((tag) => tag.checked).length;

      return hasFilteredLevel && hasFilteredTags;
    })
    .map((wcag) => ({
      ...wcag.ref,
      tags: wcag.tags.toRefArray(),
    }));
});
export const selectFilteredLevelWcags = createSelector(orm, ({ Wcag }) => {
  return Wcag.all()
    .toModelArray()
    .filter((wcag) => {
      const level = wcag.level.ref;
      const hasFilteredLevel = level.checked;

      return hasFilteredLevel;
    })
    .map((wcag) => wcag.ref);
});

// TODO Clean up examples
// export const ormTagWcags = createSelector(orm.Tag.wcags);
// export const ormTagWcagsCount = createSelector(orm, (session) => {
//   return session.Wcag.count();
// });

// export const ormLevelWcags = createSelector(orm.Level.wcags);

//Wcag
//This works
// export const wcagCount = createSelector(
//   orm,
//   (state, level) => level,
//   (session, level) => session.Wcag.all().filter({ level: level }).toModelArray()
// );

// export const wcagFilterTagFirst = createSelector(
//   (state) => ormTagWcags(state, 'video'),
//   (allModels) => {
//     session.Wcag.all().filter({ level: level }).toRefArray()
//   }
// );
// export const ormWcags = createSelector(orm.Wcag);
// export const wcagCount = createSelector(
//   orm,
//   (state) => state.orm,
//   (session) => {
//     return session.Wcags.all().toRefArray();
//   }
// );

// export const selectFilteredResult = createSelector(orm.Level, (levels) => {
//   return createSelector(orm.Tag, (tags) => {
//     console.log(levels);
//     console.log(tags);
//     return tags;
//   });
// });

// export const selectFilteredResult2 = createSelector(
//   ormWcags,
//   orm,
//   (wcagList, session) => {
//     return wcagList;
//   }
// );

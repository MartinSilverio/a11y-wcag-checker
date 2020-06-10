import OrmActionTypes from './ormTypes';

export const toggleTag = (tagId) => ({
  type: OrmActionTypes.TOGGLE_TAG,
  payload: {
    tagId,
  },
});

export const toggleLevel = (levelId) => ({
  type: OrmActionTypes.TOGGLE_LEVEL,
  payload: {
    levelId,
  },
});

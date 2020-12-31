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

export const toggleWcag = (wcagId) => ({
  type: OrmActionTypes.TOGGLE_WCAG,
  payload: {
    wcagId,
  },
});

export const deleteTagFromWcag = (tagId, wcagId) => ({
  type: OrmActionTypes.DELETE_TAG_FROM_WCAG,
  payload: {
    tagId,
    wcagId,
  },
});

export const addTagToWcag = (tag, wcagId) => ({
  type: OrmActionTypes.ADD_TAG_TO_WCAG,
  payload: {
    tag,
    wcagId,
  },
});

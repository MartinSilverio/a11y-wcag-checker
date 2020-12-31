import OrmActionTypes from './ormTypes';

export const toggleTag = (tagId: any) => ({
  type: OrmActionTypes.TOGGLE_TAG,

  payload: {
    tagId,
  }
});

export const toggleLevel = (levelId: any) => ({
  type: OrmActionTypes.TOGGLE_LEVEL,

  payload: {
    levelId,
  }
});

export const toggleWcag = (wcagId: any) => ({
  type: OrmActionTypes.TOGGLE_WCAG,

  payload: {
    wcagId,
  }
});

export const deleteTagFromWcag = (tagId: any, wcagId: any) => ({
  type: OrmActionTypes.DELETE_TAG_FROM_WCAG,
  payload: {
    tagId,
    wcagId,
  },
});

export const addTagToWcag = (tag: any, wcagId: any) => ({
  type: OrmActionTypes.ADD_TAG_TO_WCAG,
  payload: {
    tag,
    wcagId,
  },
});

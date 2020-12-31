// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import { Model } from 'redux-orm';
import OrmActionTypes from '../ormTypes';

class Tag extends Model {
  static modelName = 'Tag';
  static reducer(action: any, Tag: any) {
    let tag;
    switch (action.type) {
      case OrmActionTypes.TOGGLE_TAG:
        tag = Tag.withId(action.payload.tagId);
        tag.update({ checked: !tag.ref.checked });
        break;
      case OrmActionTypes.ADD_TAG_TO_WCAG:
        if (!Tag.filter({ id: action.payload.tag.id }).exists()) {
          Tag.create({ ...action.payload.tag, checked: true });
        }
        break;
      case OrmActionTypes.DELETE_TAG_FROM_WCAG:
        tag = Tag.withId(action.payload.tagId);
        if (tag.wcags.count() === 0) {
          tag.delete();
        }
        break;
      default:
        break;
    }
  }
}

export default Tag;

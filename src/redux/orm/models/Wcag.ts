// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import { Model, many, fk } from 'redux-orm';
import OrmActionTypes from '../ormTypes';

class Wcag extends Model {
  static modelName = 'Wcag';
  static fields = {
    tags: many('Tag', 'wcags'),
    level: fk('Level', 'wcags'),
  };
  static options = {
    idAttribute: 'ref_id',
  };
  static reducer(action: any, Wcag: any) {
    let wcag;
    switch (action.type) {
      case OrmActionTypes.ADD_TAG_TO_WCAG:
        wcag = Wcag.withId(action.payload.wcagId);
        wcag.tags.add(action.payload.tag.id);
        break;
      case OrmActionTypes.DELETE_TAG_FROM_WCAG:
        wcag = Wcag.withId(action.payload.wcagId);
        wcag.tags.remove(action.payload.tagId);
        break;
      case OrmActionTypes.TOGGLE_WCAG:
        wcag = Wcag.withId(action.payload.wcagId);
        wcag.checked = !wcag.checked;
        break;
      default:
        break;
    }
  }
}

export default Wcag;

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
  static reducer(action, Wcag) {
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
      default:
        break;
    }
  }
}

export default Wcag;

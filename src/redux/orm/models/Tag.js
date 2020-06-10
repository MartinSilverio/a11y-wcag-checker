import { Model } from 'redux-orm';
import OrmActionTypes from '../ormTypes';

class Tag extends Model {
  static modelName = 'Tag';
  static reducer(action, Tag) {
    let tag;
    switch (action.type) {
      case OrmActionTypes.TOGGLE_TAG:
        tag = Tag.withId(action.payload.tagId);
        tag.update({ checked: !tag.ref.checked });
        break;
      default:
        break;
    }
  }
}

export default Tag;

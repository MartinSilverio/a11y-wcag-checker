import { Model } from 'redux-orm';
import OrmActionTypes from '../ormTypes';

class Level extends Model {
  static modelName = 'Level';
  static reducer(action, Level) {
    let level;
    switch (action.type) {
      case OrmActionTypes.TOGGLE_LEVEL:
        level = Level.withId(action.payload.levelId);
        level.update({ checked: !level.ref.checked });
        break;
      default:
        break;
    }
  }
}

export default Level;

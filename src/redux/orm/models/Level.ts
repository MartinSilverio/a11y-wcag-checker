// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import { Model } from 'redux-orm';
import OrmActionTypes from '../ormTypes';

class Level extends Model {
  static modelName = 'Level';
  static reducer(action: any, Level: any) {
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
